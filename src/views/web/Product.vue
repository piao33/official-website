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
                    <img class="service-img mgtop40" src="@/assets/img/datacenter.png" alt="">
                </el-col>
                <el-col :xs="24" :sm="24" :md="8">
                    <p class="article">模型规范统一，通过强化统一数据模型与企业级主数据的全面应用与管控，保证数据的一致性与可共享。</p>
                    <p class="article">数据干净透明，通过改善业务集成，消除数据冗余，归并整合业务系统，实现源端业务系统数据逻辑统一、分布合理、干净透明；</p>
                    <p class="article">分析灵活智能，通过汇总、清洗、转换全业务数据，构建统一数据分析服务，实现跨专业数据的高效计算、智能分析和深度挖掘。</p>
                </el-col>
            </el-row>
            <div class="line-sm"></div>
            <el-row justify="center" :gutter="20" align="middle">
                <el-col :span="24">
                    <p class="article">中东华科数字化营销中台，实现自动化营销和智能化运营，系统聚焦四个方面的能力建设：数字化的营运管理能力、客户分析和洞察能力、多渠道协同的客户触达能力、营销自动化的能力和闭环评估的能力， 帮助企业提升数字化的业务能力，实现营销体系的数字化转型。解决方案具备完整的数字化营销产品组件，包括客户经营平台、客户画像、营销平台、自动建模、决策引擎、权益积分、企微通等，是一套完整的综合解决方案。</p>
                </el-col>
                <el-col :span="24" align="center">
                    <img class="marketing-img" src="@/assets/img/marketing.png" alt="">
                </el-col>
                <el-col :span="24">
                    <p class="article bottom-20"><span class="bold">智能决策与推荐</span><br/>
按照客户生命周期旅程内置了不同阶段的典型客群的决策规则，方便营销人员发现并分析典型的营销客群，同时可以通过配置不同的营销规则并在决策引擎的支撑下实现针对不同特征客户的个性化营销决策与推荐。</p>
                    <p class="article bottom-20"><span class="bold">营销流程可视化</span><br/>
平台所有营销的流程策划与渠道配置均通过可视化界面实现，方便营销人员完成营销流程的配置与管理，基于可配置的营销流程可实现多样性、多渠道、多波段的营销策划与执行。</p>
                    <p class="article bottom-20"><span class="bold">营销渠道低成本部署</span><br/>
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
            <div class="tab" >
                <p 
                    v-for="(item,index) in data_list" :key="index"
                    class="tab-title" 
                    :class="{'active': index==choosedIndex}" 
                    @click="choosedIndex = index"
                >
                    {{ item.name }}
                    <i class="fa fa-caret-down" v-show="index==choosedIndex"></i>
                </p>
            </div>
            <div class="subtab">
                <p  
                    v-for="(citem, cindex) in data_list[choosedIndex].children" 
                    :key="cindex"
                    class="sub-tab-title" 
                    @click="choosedSubIndex = cindex"
                    :class="{'subactive': cindex==choosedSubIndex}" 
                >
                    {{ citem.name }}
                </p>
            </div>
            <div class="icon-con">
                <ul class="icon-box">
                    <li @click="slideTo(i)" v-for="(item,i) in swiper_list" class="icon-item" :class="{'active-icon': current_swiper == i}">
                        <div class="imgbox">
                            <img :src="current_swiper == i ? item.aicon : item.icon" alt="">
                        </div>
                        <p>{{ item.name }}</p>
                    </li>
                </ul>
            </div>

            <el-carousel 
                ref="refcarousel"
                class="product-swiper"
                indicator-position="none"
                arrow="hover"
                :autoplay="false" 
                type="card" 
                :height="carouselHeight"
                @change="onSlideChange"
            >
                <el-carousel-item :name="index+''" v-for="(item,index) in swiper_list" :key="index" class="swiper-item">
                    <img :src="item.img"  alt="">
                </el-carousel-item>
            </el-carousel>

        </div>
        <div class="line"></div>

        <div class="con">
            <p class="title">服务特色</p>
            <div class="boldline mtop-20"></div>
            <el-row :gutter="32" justify="space-between" class="m60">
                <el-col v-for="(item, index) in feature_list" :xs="24" :sm="12" :md="6" class="feature">
                    <img :src="item.img" alt="">
                    <p>{{ item.title }}</p>
                    <div>{{ item.desc }}</div>
                </el-col>
            </el-row>
        </div>

        <div class="process">
            <div class="con">
                <p class="title">服务流程</p>
                <div class="boldline mtop-20"></div>
                <el-row justify="center">
                    <el-col  :xs="24" :sm="20" class="process-box">
                        <p>数据标注与采集服务流程</p>
                        <img src="@/assets/img/annotation/process.png" alt="">
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>
<script setup>
import {ref, computed, onMounted} from 'vue'
import { getAssetFile } from '@/utils';

let choosedIndex = ref(0)
let choosedSubIndex = ref(0)
let current_swiper = ref(0)

const swiper_list = computed(()=>{
    let list = data_list.value?.[choosedIndex.value]?.children?.[choosedSubIndex.value]?.children || []
    return list
})

const onSlideChange = (v)=>{
    current_swiper.value = v
}
const refcarousel = ref()

const slideTo = (index)=>{
    refcarousel.value.setActiveItem(index)
}


let feature_list = ref([
    {title: '高度数据安全性', img: getAssetFile('feature-1.png'), desc: '数据中心实施24小时360度监控+严格的流程管理+私有化部署工具+交付即焚机制'},
    {title: '数据标注质量高', img: getAssetFile('feature-2.png'), desc: '2000余名专职数据标注师+培训上岗机制+双重质检机制'},
    {title: '项目工期有保障', img: getAssetFile('feature-3.png'), desc: 'AI 辅助标注加速工具提升效率+动态产能分配机制'},
    {title: '更低的项目成本', img: getAssetFile('feature-4.png'), desc: '自营标注团队+半自动化高效标注工具'},
])

let data_list = ref([
    {
        name: '数据标注',
        children: [
            {
                name: '计算机视觉',
                children: [
                    { name: '2D框',  aicon: getAssetFile('j1.png'), icon: getAssetFile('hj1.png'), img: getAssetFile('imgj1.png')},
                    { name: '3D框',  aicon: getAssetFile('j2.png'), icon: getAssetFile('hj2.png'), img: getAssetFile('imgj2.png')},
                    { name: '语意分割',  aicon: getAssetFile('j3.png'), icon: getAssetFile('hj3.png'), img: getAssetFile('imgj3.png')},
                    { name: 'OCR转写',  aicon: getAssetFile('j4.png'), icon: getAssetFile('hj4.png'), img: getAssetFile('imgj4.png')},
                    { name: '关键点',  aicon: getAssetFile('j5.png'), icon: getAssetFile('hj5.png'), img: getAssetFile('imgj5.png')},
                    { name: '连续帧标注',  aicon: getAssetFile('j6.png'), icon: getAssetFile('hj6.png'), img: getAssetFile('imgj6.gif')},
                    { name: '3D点云',  aicon: getAssetFile('j7.png'), icon: getAssetFile('hj7.png'), img: getAssetFile('imgj7.png')},
                    { name: '传感器融合',  aicon: getAssetFile('j8.png'), icon: getAssetFile('hj8.png'), img: getAssetFile('imgj8.gif')},
                ]
            },
            {
                name: '语音识别',
                children: [
                    { name: '语音转录',  aicon: getAssetFile('yy1.png'), icon: getAssetFile('hyy1.png'), img: getAssetFile('imgyy1.png')},
                    { name: '语音分割',  aicon: getAssetFile('yy2.png'), icon: getAssetFile('hyy2.png'), img: getAssetFile('imgyy2.png')},
                    { name: '语音审核',  aicon: getAssetFile('yy3.png'), icon: getAssetFile('hyy3.png'), img: getAssetFile('imgyy3.png')},
                ]
            },
            {
                name: '自然语言处理',
                children: [
                    { name: '指代消歧',  aicon: getAssetFile('z1.png'), icon: getAssetFile('hz1.png'), img: getAssetFile('imgz1.png')},
                    { name: '实体标注',  aicon: getAssetFile('z2.png'), icon: getAssetFile('hz2.png'), img: getAssetFile('imgz2.png')},
                    { name: '翻译转写',  aicon: getAssetFile('z3.png'), icon: getAssetFile('hz3.png'), img: getAssetFile('imgz3.png')},
                    { name: '分词标注',  aicon: getAssetFile('z4.png'), icon: getAssetFile('hz4.png'), img: getAssetFile('imgz4.png')},
                    { name: '问答标注',  aicon: getAssetFile('z5.png'), icon: getAssetFile('hz5.png'), img: getAssetFile('imgz5.png')},
                    { name: '关系抽取',  aicon: getAssetFile('z6.png'), icon: getAssetFile('hz6.png'), img: getAssetFile('imgz6.png')},
                    { name: '文本摘要',  aicon: getAssetFile('z7.png'), icon: getAssetFile('hz7.png'), img: getAssetFile('imgz7.png')},
                    { name: '拼写纠错',  aicon: getAssetFile('z8.png'), icon: getAssetFile('hz8.png'), img: getAssetFile('imgz8.png')},
                ]
            }
        ]
    },
    {
        name: '数据采集',
        children: [
            {
                name: '图像数据采集',
                children: [
                    { name: '实物采集',  aicon: getAssetFile('t1.png'), icon: getAssetFile('ht1.png'), img: getAssetFile('imgt1.png')},
                    { name: '路况采集',  aicon: getAssetFile('t2.png'), icon: getAssetFile('ht2.png'), img: getAssetFile('imgt2.png')},
                    { name: '场景采集',  aicon: getAssetFile('t3.png'), icon: getAssetFile('ht3.png'), img: getAssetFile('imgt3.png')},
                ]
            },
            {
                name: '视频数据采集',
                children: [
                    { name: '路况采集',  aicon: getAssetFile('s1.png'), icon: getAssetFile('hs1.png'), img: getAssetFile('imgsp1.png')},
                    { name: '富媒体采集',  aicon: getAssetFile('s2.png'), icon: getAssetFile('hs2.png'), img: getAssetFile('imgsp2.png')},
                    { name: '监控数据',  aicon: getAssetFile('s3.png'), icon: getAssetFile('hs3.png'), img: getAssetFile('imgsp3.png')},
                    { name: '影视采集',  aicon: getAssetFile('s4.png'), icon: getAssetFile('hs4.png'), img: getAssetFile('imgsp4.png')},
                    { name: '新闻采集',  aicon: getAssetFile('s5.png'), icon: getAssetFile('hs5.png'), img: getAssetFile('imgsp5.png')},
                ]
            },
            {
                name: '音频数据采集',
                children: [
                    { name: '语音采集',  aicon: getAssetFile('yp1.png'), icon: getAssetFile('hyp1.png'), img: getAssetFile('imgyp1.png')},
                    { name: '场景采集',  aicon: getAssetFile('yp2.png'), icon: getAssetFile('hyp2.png'), img: getAssetFile('imgyp2.png')},
                ]
            }
        ]
    },
])
let carouselHeight = ref('386px')
onMounted(()=>{
    setTimeout(() => {
        carouselHeight.value = 'auto'
    }, 5000);
})
</script>
<style lang="less" scoped>
    .product-content{
        .product-swiper{
            margin-top: 50px;
            
            .swiper-item{
                height: auto;
                text-align: center;
                img{
                    width: 100%;
                    border-radius: 10px;
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
            font-weight: 500;
            color: #595959;
            font-size: 22px;
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
        .marketing-img{
            vertical-align: top;
            width: auto;
            height: auto;
            max-height: 400px;
            max-width: 100%;
            object-fit: cover;
        }
        .bold{
            font-weight: 500;
        }
        .service-img{
            width: 100%;
            vertical-align: top;
            object-fit: cover;
        }
        .mgtop40{
            margin-top: 40px;
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
            margin-top: -34px;
        }
        .boldline{
            background-color: #000;
            height: 7px; width: 60px;
            border-radius: 5px;
            margin: 0 auto;
        }
        .m60{
            margin: 60px 0;
        }
        .mtop-20{
            margin-top: -20px;
        }

        .tab{
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 30px 0;
        }
        .tab-title{
            font-size: 20px;
            color: #666;
            margin: 0 15px;
            padding-bottom: 15px;
            cursor: pointer;
            text-align: center;
            position: relative;
            i{
                position: absolute;
                left: 50%;bottom: -10px;
                transform: translateX(-50%);
                color: #3361c7;
                font-size: 30px;
            }
        }
        .active{
            color: #3361c7;
        }
        .subtab{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 30px;
        }
        .sub-tab-title{
            max-width: 180px;
            padding: 6px 24px;
            border: 1px solid #3361c7;
            border-radius: 30px;
            text-align: center;
            margin: 20px 15px 25px;
            cursor: pointer;
            color: #3361c7;
            font-size: 18px;
        }
        .subactive{
            background-color: #3361c7;
            box-shadow: 0 3px 15px rgba(14,29,52,.06);
            color: #fff;
        }

        .icon-con{
            // text-align: center;
            display: flex;
            justify-content: center;
        }
        .icon-box{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            overflow-x: scroll;
            border-bottom: 2px solid #ccc;
            .imgbox{
                height: 50px;
            }
            &::-webkit-scrollbar{
                height: 0px;
                width:0;
                background-color: #ccc;
            }
        }
        .icon-item{
            text-align: center;
            min-width: 100px;
            margin: 0 15px;
            cursor: pointer;
            img{
                vertical-align: top;
                object-fit: cover;
            }
            p{
                font-size: 18px;
                color: #5c6874;
                padding: 22px 0;
                position: relative;
            }
        }
        .active-icon{
            p{
                color: #3361c7;
                position: relative;
                &::before{
                    content: '';
                    width: 100%;
                    height: 4px;
                    background-color: #3361c7;
                    position: absolute;
                    left:0;
                    bottom: 0px;
                    z-index: 2;
                }
            }
        }

        .feature{
            text-align: center;
            img{
                height: 60px;
                vertical-align: top;
                object-fit: cover;
            }
            p{
                font-size: 20px;
                font-weight: bolder;
                color: #333;
                margin: 20px 0;
            }
            div{
                font-size: 16px;
                color: #333;
                text-align: center;
            }
        }

        .process{
            background: #f5f7f9;
            padding: 40px 0 100px;
        }
        .process-box{
            padding: 40px;
            margin: 30px 0;
            border: 2px dashed #b1bed1;
            background-color: #fff;
            p{
                font-size: 24px;
                font-weight: 700;
                color: #3361c7;
                margin-bottom: 45px;
            }
            img{
                width: 100%;
                vertical-align: top;
            }
        }

        .product-swiper :deep(.el-carousel__arrow){
            // background: #fff;
            // color: #939393;
            background-color: rgba(0,0,0,0.3);
            width: 50px;
            height: 50px;
            font-size: 32px;
            &:hover{
                background-color: rgba(0,0,0,0.5);
            }
        }
    }
</style>
  