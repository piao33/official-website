<template>
    <div class="partner-content">
        <h3>合作伙伴</h3>
        <p>Cooperative Partner</p>
        <div class="partner-box">
                <div v-for="item in partner_list"  class="partner-item" :style="{'backgroundImage': 'url('+item.img+')'}">
                    <img :src="item.partnersPath" alt="">
                </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { partnerListApi }  from '@/api/partner';
import { splicingImageUrl } from '@/utils';

const partner_list = ref([])

onMounted(async ()=>{
    await getPartnerList();
})

async function getPartnerList() {
    let {rows=[], code} = await partnerListApi()
    rows.forEach(item=> {
        item.partnersPath = splicingImageUrl(item.partnersPath);
    })
    partner_list.value = rows;
}
</script>
<style lang="less" scoped>
    .partner-content{
        .max1200();
        .marginAuto();
        text-align: center;
        h3{
            padding: 50px 0 12px;
            font-size: 30px;
        }
        p{
            color: #ccc;
            margin-bottom: 32px;
        }
        .partner-box{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            padding-bottom: 18px;
        }
        .partner-item{
            // width: 20%;
            min-width: 200px;
            padding: 12px 12px;
            img{
                width: 150px;
                border-radius: 4px;
                border: 2px solid #f1f1f1;
                height: 76px;
                vertical-align: top;
                object-fit: cover;
            }
        }
    }
</style>
  