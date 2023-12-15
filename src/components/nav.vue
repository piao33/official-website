<template>
    <nav>
        <div class="nav-box">
            <div class="logo-box">
                <!-- <img src="@/assets/img/logo.png" alt="logo" @click="$router.push('home')"> -->
            </div>
            <div class="menu-box">
                <div class="menu-item"
                    v-for="(menu_item, index) in menu" 
                    :key="index" 
                    @mouseenter="menu_item.show = true"
                    @mouseleave.prevent="menu_item.show = false"
                >
                    <RouterLink 
                        class="link" 
                        :class="{'active': $route.name == menu_item.routerName}" 
                        :to="menu_item.path"
                    >
                        {{ menu_item.name }}
                        <i v-if="menu_item.children" class="fa fa-chevron-down"></i>
                    </RouterLink>
                    <Transition name="fade">
                        <ul v-show="menu_item.show" class="options">
                            <li @click="jump(menu_item, c_item)" v-for="(c_item, i) in menu_item.children" :key="i">{{ c_item.name }}</li>
                        </ul>
                    </Transition>
                </div>
            </div>
            <div class="catalog" @click="showSideMenu">
                <i class="fa fa-bars"></i>
            </div>
            <el-drawer 
                v-model="drawer_visible" 
                :with-header="false"
                direction="ltr"
                :size="320"
                class="my-drawer"
            >
                <ul class="sideMinu">
                    <li v-for="item in menu" class="sideMenuItem">
                        <a class="link" :class="{'active': $route.name == item.routerName}" @click.prevent="onRouterClick(item.path)">
                            {{ item.name }}
                            <i v-if="item.children" class="fa fa-chevron-down" :class="{'fa-rotate-90': item.show_children}" @click.stop="item.show_children = !item.show_children"></i>
                        </a>
                        <ul class="clist" :class="{'clist-active': item.show_children}">
                            <li class="citem" v-for="citem in item.children" @click="jump(item, citem)">
                                {{ citem.name }}
                            </li>
                        </ul>
                    </li>
                </ul>
            </el-drawer>
        </div>
    </nav>
</template>

<script setup>
    import { RouterLink, useRouter, useRoute, routerKey } from 'vue-router';
    import { reactive, ref } from 'vue';
    import { storeToRefs } from 'pinia';

    const props = defineProps({
    })
    let router = useRouter()
    let route = useRoute()
    let drawer_visible = ref(false);
    let menu = reactive([
        {name: '首页', path: '/web/home', routerName: 'home'},
        {name: '产品服务', path: '/web/product', routerName: 'product'},
        {name: '新闻动态', path: '/web/news', routerName: 'news'},
        {name: '关于我们', path: '/web/about', routerName: 'about', children: [
            {name: '公司简介', id: '#introduce'},
            {name: '企业文化', id: '#culture'},
            {name: '公司荣誉', id: '#honor'},
            {name: '人才招聘', id: '#recruit'},
        ]},
        {name: '合作伙伴', path: '/web/partner', routerName: 'partner'},
    ])

    const showSideMenu =  () => {
        drawer_visible.value = !drawer_visible.value;
    }

    const jump = (menu, cmenu) => {
        router.push({name: menu.routerName, hash: cmenu.id})
        drawer_visible.value = false;
    }

    const onRouterClick = (path) => {
        console.log('xxxxx')
        router.push({path})
        drawer_visible.value = false;
    }
    
</script>

<style lang="less" scoped>

    nav {
        width: 100%;
        z-index: 100;
        border-bottom: 2px solid @blue;
        font-size: 16px;
        font-weight: 550;
        position: sticky;
        top:0;
        background-color: #fff;
    }
    .nav-box{
        .max1200();
        .marginAuto();
        width: 100%;
        height: @nav-height;
        display: flex;
        justify-content: space-between;
    }
    .logo-box{
        flex-shrink:0;
        height: 100%;
        display: flex;
        align-items: center;
        img{
            width: 58px;
            height: 50px;
            vertical-align: top;
            cursor: pointer;
        }
    }
    .menu-box{
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-right: 24px;
        .menu-item{
            color: @gray;
            padding: 0 20px;
            position: relative;
            height: 100%;
            display: flex;
            align-items: center;
            .link{
                cursor: pointer;
                color: inherit;
                i{
                    margin-left: 4px;
                    font-size: 14px;
                }
                &:hover{
                    color: @blue;
                }
            }
            .options{
                position: absolute;
                left: 0;top: @nav-height;
                background-color: @blue;
                white-space: nowrap;
                color: #e5e1e1;
                transition: all 0.3s;
                li{
                    cursor: pointer;
                    padding: 15px 40px;
                    &:nth-last-child(1){
                        margin-bottom: 0;
                    }
                    &:hover{
                        background-color: @blue-active;
                        color: #fff;
                    }
                }
            }
        }
    }
    .active{
        color: @blue-active!important;
        font-weight: 700!important;
    }
    .catalog{
        height: 100%;
        font-size: 24px;
        display: none;
        line-height: @nav-height;
        cursor: pointer;
    }

    .nav-box :deep(.my-drawer){
        background-color: @blue;
        .el-drawer__body{
            padding: 10px;
        }
    }

    .sideMinu{
        font-weight: 400;
        .sideMenuItem{
            background-color: #fff;
            margin-bottom: 10px;
            position: relative;
            .link{
                cursor: pointer;
                padding: 0 0 0 16px;
                font-weight: 400;
                height: 50px;
                color: inherit;
                display: flex;
                align-items: center;
                justify-content: space-between;
                i{
                    padding: 16px;
                }
            }
        }
    }
    .clist{
        height:0;
        overflow: hidden;
        transition: all 0.4s;
        .citem{
            height: 50px;
            display: flex;
            align-items: center;
            padding-left: 12px;
            background-color: @blue-dark;
            color: #fff;
            cursor: pointer;
            border-top: 1px solid #2352a4;
            &:hover{
                background-color: @blue-active;
            }
        }
    }
    .clist-active{
        height:inherit;
        overflow: auto;
        transition: all 0.3s;
    }
    @media screen and (width <= 992px){
        .menu-box{
            display: none;
        }
        .catalog{
            display: block;
        }
    }

    .fade-enter-active,.fade-leave-active{
        transition: all 0.4s linear;
    }
    .fade-enter-from,.fade-leave-to {
        opacity: 0;
        transform: translate(30px);
    }
    .fade-enter-to,.fade-leave-from {
        opacity: 1;
        transform: translate(0px);
    }
    
</style>