<template>
    <footer class="footer-content">
        <el-row align="middle">
            <el-col :md="9" :xs="24">
                <img src="@/assets/img/code.png"/>
            </el-col>
            <el-col :md="15" :sm="24">
                <div class="info">
                    <h5 class="">联系我们</h5>
                    <ul class="link-list">
                        <li>地址：吉林省长春市南关区远大购物广场3栋B-Z3-2单元217室</li>
                        <li>电话：0431-80534512</li>
                        <li>邮箱：br@jlbairong.com</li>
                    </ul>
                    <p>版权所有©吉林省百融信息技术有限公司 吉ICP备20001905号-1</p>
                </div>
            </el-col>
        </el-row>
    </footer>
</template>

<script setup>

</script>

<style lang="less" scoped>
    .footer-content{
        height: @footer-height;
        padding-top: 50px;
        color: #fff;
        background: url(@/assets/img/footer.png) 100% 100% / cover no-repeat;
    }
    .el-row{
        text-align: center;
        .max1280();
        .marginAuto();
    }
    .info{
        text-align: left;
        h5{
            font-size: 20px;
            margin-bottom: 18px;
        }
        p{
            font-size: 16px;
            margin-top: 16px;
            color: #898989;
        }
    }
    @media screen and (width <= 992px) {
        .footer-content{
            height: @footer-height2;
        }
        .info{
            text-align: center;
            margin-top: 24px;
        }
    }
    @media screen and (width <= 500px) {
        .footer-content{
            padding-top: 10px;
        }
    }
</style>