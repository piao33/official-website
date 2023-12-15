<template>
    <!-- <mNav></mNav> -->
    <div class="news">
        <ul>
            <li v-for="(item,index) in news_list" :key="index" @click="jumpToDetail(item.id)">
                <img :src="item.thumbnail || getRandomImg()" alt="news">
                <div class="text-box">
                    <p class="title">{{ item.title }}</p>
                    <p class="content">{{ item.summary }}</p>
                    <p class="tag">
                        <span class="time">{{ item.createDate }}</span>
                        <img src="@/assets/svg/view.svg" alt="浏览量" title="浏览量">
                        <span title="浏览量">{{ item.browseNum }}</span>
                    </p>
                </div>
            </li>

        </ul>
        <div class="mypagination" v-show="news_list.length">
            <el-pagination 
                :background="true" 
                layout="prev, pager, next" 
                :page-size="pageSize"
                :total="totalCount" 
                @current-change="onCurrentChange"
            />
        </div>
    </div>
</template>
<script setup>
    import { onActivated, ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { getNewsListApi }  from '@/api/news';
    import default1 from '@/assets/img/default1.jpg';
    import default2 from '@/assets/img/default2.jpg';
    import default3 from '@/assets/img/default3.jpg';
    import default4 from '@/assets/img/default4.jpg';
    import default5 from '@/assets/img/default5.jpg';
    
    const router = useRouter();

    const defaultImgList = [default1, default2, default3, default4, default5];

    function getRandomImg() {
        let rand = parseInt(Math.random()*5)
        return defaultImgList[rand];
    }

    let pageSize = ref(4)
    let pageNo = ref(1)
    let totalCount = ref(0)
    let news_list = ref([])
    
    onActivated(()=>{
        // onactiive
        console.log('active')
    })

    function jumpToDetail(id) {
        router.push({
            name: 'newsDetail',
            params: {
                id: Number(id)
            }
        })
    }

    async function getNewsList() {
        let { rows=[], total=0 } = await getNewsListApi({
            pageNum: pageNo.value,
            pageSize: pageSize.value
        });
        news_list.value = rows;
        totalCount.value = total;
    }
    function onCurrentChange(val) {
        pageNo.value = val;
        getNewsList();
    }
    getNewsList();
</script>
<style lang="less" scoped>
    .news{
        .max1200();
        .marginAuto();

        ul{
            padding-top: 24px;
            li{
                display: flex;
                margin-bottom: 30px;
                cursor: pointer;
                img{
                    flex-shrink: 0;
                    width: 310px;
                    height: 200px;
                    vertical-align: top;
                    border-radius: 6px;
                    object-fit: cover;
                }
                .text-box{
                    margin-left: 30px;
                    text-align: left;
                    position: relative;
                    overflow: hidden;
                    flex:1;
                    .title{
                        color: @blue;
                        font-size: 20px;
                        margin: 12px 0;
                        .one-line-ellipsis();
                    }
                    .content{
                        font-size: 16px;
                        .multiple-line-ellipsis();
                    }
                    .tag{
                        position: absolute;
                        bottom: 4px;right: 12px;
                        color: #b3a7a7;
                        font-size: 12px;
                        display: flex;
                        align-items: center;
                        img{
                            width: 12px;height:12px;
                            vertical-align: top;
                            margin-right: 4px;
                        }
                        .time{
                            margin-right: 12px;
                        }
                    }
                }
            }
        }
        .mypagination{
            display: flex;
            justify-content: center;
            margin: 50px 0;
        }
    }
</style>
  