<template>
    <div class="partner-content">
        <h3>合作伙伴</h3>
        <p>Cooperative Partner</p>
        <div class="partner-box">
                <div v-for="item in partner_list"  class="partner-item" :style="{'backgroundImage': 'url('+item.img+')'}"></div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import client1 from '@/assets/img/client1.png'
import client2 from '@/assets/img/client2.png'
import client3 from '@/assets/img/client3.png'
import client4 from '@/assets/img/client4.png'
import client5 from '@/assets/img/client5.png'
import client6 from '@/assets/img/client6.png'
import client7 from '@/assets/img/client7.png'
import client8 from '@/assets/img/client8.png'
import client9 from '@/assets/img/client9.png'
import client10 from '@/assets/img/client10.png'

const partner_list = ref([
    {img: client1},
    {img: client2},
    {img: client3},
    {img: client4},
    {img: client5},
    {img: client6},
    {img: client7},
    {img: client8},
    {img: client9},
    {img: client10},
])

</script>
<style lang="less" scoped>
    .partner-content{
        .max1280();
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
            width: 20%;
            min-width: 150px;
            height: 76px;
            margin: 12px 0;
            background-position: center -76px;
            background-repeat: no-repeat;
            background-size: 138px 152px;
        }
    }
</style>
  