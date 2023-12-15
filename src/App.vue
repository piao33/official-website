<script setup>
import { RouterView } from 'vue-router'
import { useRouter } from 'vue-router';

const router = useRouter();

function calcKeepAliveRouters() {
    let arr = [];
    router.getRoutes().forEach(item => {
        if(item?.meta?.keepAlive) {
            arr.push(item.meta.componentName);
        }
    })
    return arr;
}
let keepAliveRouters = calcKeepAliveRouters();
console.log(keepAliveRouters)
</script>

<template>
    <!-- <navVue></navVue> -->
    <div id="mainApp">
        <router-view v-slot="{ Component }">
            <keep-alive :include="keepAliveRouters">
                <component :is="Component" ></component>
            </keep-alive>
        </router-view>
    </div>
</template>

<style scoped>
    body{
        background-color: #fff;
    }
    #mainApp{
        width: 100%;
        /* element-plus 自定义主题 */
        /* --el-color-primary: #609f49;
        --el-color-primary-dark-2: #097510;
        --el-color-primary-light-3: #699d56;
        --el-color-primary-light-5: #87c472;
        --el-color-primary-light-7: #89b579;
        --el-color-primary-light-8: #8eb97e;
        --el-color-primary-light-9: #c8dac2; */
    }

</style>
<style>
</style>