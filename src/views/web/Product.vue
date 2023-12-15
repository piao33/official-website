<template>
    <div class="product-content">
        
        <!-- <Swiper
            class="product-swiper"
            :modules="modules"
            :slides-per-view="1"
            :space-between="50"
            :pagination="{ clickable: true }"
            :navigation="{ clickable: true }"
            loop
            :speed="800"
            :autoplay="{
                delay: 3000,
                disableOnInteraction: false,
            }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
            <swiper-slide v-for="(item, index) in swiper_list" :key="index">
                <div class="swiper-item">
                    <img :src="item.rcPath" :alt="item.rcTitle">
                </div>
            </swiper-slide>
        </Swiper> -->
    </div>
</template>
<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue'
import { safeHtml } from '@/utils';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/controller';

 // let swiper_list = ref([])
</script>
<style lang="less" scoped>
    .product-content{
        .product-swiper{
            height: 500px;
            margin-top: @nav-height-minus;

            --swiper-theme-color: @blue;/* 设置Swiper风格 */
            --swiper-navigation-color: #fff;/* 单独设置按钮颜色 */
            --swiper-navigation-size: 50px; /* 设置按钮大小 */
            --swiper-pagination-color: #fff;

            .swiper-item{
                height: 100%;
                img{
                    height: 100%;
                    width: 100%;
                    vertical-align: top;
                    object-fit: cover;
                }
            }
        }
    }
</style>
  