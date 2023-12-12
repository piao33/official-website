<template>
    <mNav></mNav>
    <div class="visitor">
        <router-view></router-view>
    </div>
    <mFooter></mFooter>
</template>
<script setup>
import mFooter from '@/components/footer.vue';
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
