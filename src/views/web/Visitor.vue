<template>
    <mNav></mNav>
    <div class="visitor">
        <router-view v-slot="{ Component }">
            <keep-alive :include="keepAliveRouters">
                <component :is="Component" ></component>
            </keep-alive>
        </router-view>
    </div>
    <mFooter></mFooter>
</template>
<script setup>
import mFooter from '@/components/footer.vue';
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
    let routers = calcKeepAliveRouters();
    let keepAliveRouters = ref(routers)
</script>
<style lang="less" scoped>
    .visitor{
        min-height: calc(100vh - @nav-height - @footer-height);
    }
    @media screen and (width <= 992px) {
        .visitor{
            min-height: calc(100vh - @nav-height - @footer-height2);
        }
    }
</style>
