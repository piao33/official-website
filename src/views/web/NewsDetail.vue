<template>
    <!-- <mNav></mNav> -->
    <div class="newsDetail">
        <div class="title-box">
            <p class="title">{{ detail.title }}</p>
            <p class="tag">
                <span class="time">{{ detail.createDate }}</span>
                <img src="@/assets/svg/view.svg" alt="浏览量" title="浏览量">
                <span title="浏览量">{{ detail.browseNum }}</span>
            </p>
        </div>
        <div class="content ql-editor" v-html="detail.contentHtml"></div>
    </div>
</template>
<script setup>
    import { reactive, ref } from 'vue';
    import { getNewsDetailApi } from '@/api/news';
    import { useRoute } from 'vue-router';
    
    const route = useRoute();

    let detail = ref({})

    async function getNewsDetail() {
        let { data } = await getNewsDetailApi({id: route.params.id});
        detail.value = data;
    }
    getNewsDetail();
</script>
<style lang="less" scoped>
    .newsDetail{
        .max1280();
        .marginAuto();
        .title-box{
            text-align: left;
            overflow: hidden;
            margin-bottom: 32px;
            .title{
                color: @blue;
                font-size: 24px;
                margin: 12px 0;
                font-weight: 500;
            }
            .tag{
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
        .content{
            font-size: 16px;
            line-height: 32px;
            text-indent: 2em;
            margin-bottom: 120px;
            :deep(p){
                margin: 12px;
            }
        }
    }
</style>
  