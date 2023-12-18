<template>
    <div class="product-content">
        <div class="con">
            <p class="title">基础数据服务</p>
            <el-row :gutter="32" class="basic-service">
                <el-col :xs="24" :sm="12" :md="6">
                    <h3 class="subtitle">规划设计</h3>
                    <p class="article">数据库分布式架构</p>
                    <p class="article">数据库集中整合</p>
                    <p class="article">数据库整合咨询</p>
                    <p class="article">数据库选型咨询</p>
                    <p class="article">架构设计咨询</p>
                    <div class="hidden-sm-and-up line-sm"></div>
                </el-col>
                <el-col :xs="24" :sm="12" :md="6">
                    <h3 class="subtitle">建设实施</h3>
                    <p class="article">数据分析</p>
                    <p class="article">数据库安装部署</p>
                    <p class="article">整合迁移</p>
                    <p class="article">SQL审计</p>
                    <p class="article">高可用容灾</p>
                    <div class="hidden-sm-and-up line-sm"></div>
                </el-col>
                <el-col :xs="24" :sm="12" :md="6">
                    <h3 class="subtitle">运营管理</h3>
                    <p class="article">问题分析及处理</p>
                    <p class="article">性能监控</p>
                    <p class="article">升级迁移</p>
                    <p class="article">安全加固</p>
                    <p class="article">容灾恢复</p>
                    <p class="article">大数据服务</p>
                    <div class="hidden-sm-and-up line-sm"></div>
                </el-col>
                <el-col :xs="24" :sm="12" :md="6">
                    <h3 class="subtitle">优化提升</h3>
                    <p class="article">性能提升</p>
                    <p class="article">数据模型化优化</p>
                </el-col>
            </el-row>
            <div class="line-sm"></div>
            <el-row justify="space-between" :gutter="20">
                <el-col :xs="24" :sm="24" :md="8">
                    <p class="article">目前，随着信息化和大数据技术的发展，很对企业事业单位都建设了自己的数据中心，但是传统的数据中心跨专业业务协同与信息共享不足、数据多头输入，数据准确性、一致性不强、数据反复抽取、过度存储，质量不高等问题。</p>
                    <p class="article">全业务统一数据中心是企业现有数据中心的进一步发展和完善，不仅能够帮助企业完善现有的数据中心，还能够帮助未建设数据中心的企业已新的模式来规划和建设数据中心，全业务统一数据中心主要包括数据管理域、数据分析域和数据处理域三部分。</p>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8">
                    <img class="service-img" src="@/assets/img/datacenter.png" alt="">
                </el-col>
                <el-col :xs="24" :sm="24" :md="8">
                    <p class="article">模型规范统一，通过强化统一数据模型与企业级主数据的全面应用与管控，保证数据的一致性与可共享。</p>
                    <p class="article">数据干净透明，通过改善业务集成，消除数据冗余，归并整合业务系统，实现源端业务系统数据逻辑统一、分布合理、干净透明；</p>
                    <p class="article">分析灵活智能，通过汇总、清洗、转换全业务数据，构建统一数据分析服务，实现跨专业数据的高效计算、智能分析和深度挖掘。</p>
                </el-col>
            </el-row>
            <div class="line-sm"></div>
            <el-row justify="space-between" :gutter="20">
                <el-col :xs="24" :sm="24" :md="16">
                    <el-row>
                        <el-col :xs="24" :sm="24" :md="24">
                            <p class="article">中东华科数字化营销中台，实现自动化营销和智能化运营，系统聚焦四个方面的能力建设：数字化的营运管理能力、客户分析和洞察能力、多渠道协同的客户触达能力、营销自动化的能力和闭环评估的能力， 帮助企业提升数字化的业务能力，实现营销体系的数字化转型。解决方案具备完整的数字化营销产品组件，包括客户经营平台、客户画像、营销平台、自动建模、决策引擎、权益积分、企微通等，是一套完整的综合解决方案。</p>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24">
                            <img class="service-img" src="@/assets/img/marketing.png" alt="">
                        </el-col>
                        <!-- <p class="article">中东华科数字化营销中台，实现自动化营销和智能化运营，系统聚焦四个方面的能力建设：数字化的营运管理能力、客户分析和洞察能力、多渠道协同的客户触达能力、营销自动化的能力和闭环评估的能力， 帮助企业提升数字化的业务能力，实现营销体系的数字化转型。解决方案具备完整的数字化营销产品组件，包括客户经营平台、客户画像、营销平台、自动建模、决策引擎、权益积分、企微通等，是一套完整的综合解决方案。</p> -->
                    </el-row>
                </el-col>
                <!-- <el-col :xs="24" :sm="24" :md="10">
                    <img class="service-img" src="@/assets/img/marketing.png" alt="">
                </el-col> -->
                <el-col :xs="24" :sm="24" :md="8">
                    <p class="article bottom-20">智能决策与推荐<br/>
按照客户生命周期旅程内置了不同阶段的典型客群的决策规则，方便营销人员发现并分析典型的营销客群，同时可以通过配置不同的营销规则并在决策引擎的支撑下实现针对不同特征客户的个性化营销决策与推荐。</p>
                    <p class="article bottom-20">营销流程可视化<br/>
平台所有营销的流程策划与渠道配置均通过可视化界面实现，方便营销人员完成营销流程的配置与管理，基于可配置的营销流程可实现多样性、多渠道、多波段的营销策划与执行。</p>
                    <p class="article bottom-20">营销渠道低成本部署<br/>
对营销场景的渠道端部署实现“即开即用” ，渠道营销资源由平台提供并更新，渠道与平台的互动处理逻辑也由平台进行控制，渠道端仅需要提供发布的窗口并调用统一的服务接口，方便渠道的接入和协同，极大降低了渠道改造难度和部署成本。</p>
                </el-col>
            </el-row>
        </div>

        <div class="line"></div>

        <div class="con">
            <p class="title">数据标注</p>
            <p class="desc">
                数据定制服务（采集和标注）采用“自营定额+团队联盟”模式进行产能分配，力求在成本、效率和质量之间为用户找到理想的平衡点
            </p>
            <div class="boldline"></div>
        </div>

        <div class="line"></div>
    </div>
</template>
<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue'
import { safeHtml } from '@/utils';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
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

        .con{
            .max1200();
            .marginAuto();
        }
        .title {
            font-size: 32px;
            font-weight: 500;
            color: #003052;
            padding: 5px 0;
            text-align: center;
            font-size: 32px;
            margin: 60px 0 30px;
        }
        .basic-service{
            padding: 20px;
            text-align: center;
        }
        .line-sm{
            // height: 1px;
            border-bottom: 1px solid #eee;
            margin: 50px 0;
        }
        .subtitle {
            text-align: center;
            font-weight: 400;
            color: #333;
            font-size: 24px;
            line-height: 24px;
            margin: 20px 0;
        }
        
        .article{
            font-size: 15px;
            margin-bottom: 4px;
            font-weight: 340;
            color: #1b1b1b;
            font-family: 'Roboto', sans-serif;
            line-height: 28px;
        }
        .bottom-20{
            margin-bottom: 20px;
        }
        .service-img{
            width: 100%;
            vertical-align: top;
            object-fit: cover;
            margin: 16px 0;
        }

        .line {
            margin: 50px 0;
            border-top: 1px solid #eee;
            position: relative;
        }
        .desc{
            font-size: 16px;
            color: #666;
            text-align: center;
            padding: 0 10%;
            margin-bottom: 20px;
            margin-top: -38px;
        }
        .boldline{
            background-color: #000;
            height: 8px; width: 60px;
            border-radius: 5px;
            margin: 0 auto;
        }
    }
</style>
  