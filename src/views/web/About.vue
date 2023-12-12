<template>
    <div class="about-content">
        <div class="con">
            <p class="title" id="introduce">公司简介</p>
            <h3 class="subtitle">北京中动华科信息技术有限公司</h3>
            <p class="article">
                北京中动华科信息技术有限公司于2020年通过了ISO9001质量管理体系认证，是一家专业的数据标注服务提供商，致力于为客户提供高质量、高准确性的数据标注解决方案。公司拥有一支经验丰富、专业素质高的数据标注团队，具备丰富的行业经验和专业知识。
            </p>
            <p class="article">
                公司在北京及长春均设立了数据标注基地，充分发挥了东北高校资源丰富的优势，同东北大学，长春大学，长春工业大学，吉林省交通职业技术学院等学校建立了长期合作，人才储备丰富，打造了一支经验丰富、专业素质高的数据标注团队，具备丰富的行业经验和专业知识。
            </p>
            <img src="@/assets/img/company-license.jpg" alt="">
        </div>
        

        <div class="line" id="culture"></div>

        <div class="con">
        
            <el-row :gutter="20">
                <el-col :md="12" :sm="24">
                    <p class="subtitle">团队介绍</p>
                    <p class="article">
                        公司非常重视团队建设和人才培养，拥有一支技术精湛、经验丰富、结构合理的专业技术团队。公司核心技术团队共215人，其中数据标注员119人，质检以及数据验收员78人，项目经理18人，其中，专科生有34人，本科生共有123人，研究生共有41人，博士生共有17人。
                    </p>
                </el-col>
                <el-col :md="12" :sm="24">
                    <p class="subtitle">企业文化</p>
                    <ul class="culture">
                        <li><i class="fa fa-angle-right"></i>核心理念:创新发展、求真务实、追求卓越。</li>
                        <li><i class="fa fa-angle-right"></i>团队作风:自由开放、公平竞争、崇尚自我、职业约束。</li>
                        <li><i class="fa fa-angle-right"></i>发展使命:以技术为驱动，人才为核心，成为省内顶级高新技术企业。</li>
                        <li><i class="fa fa-angle-right"></i>企业精神:不断超越、追求完美。</li>
                    </ul>
                </el-col>
            </el-row>
        </div>

        <div class="line" id="honor"></div>

        <div class="con">
            <p class="subtitle" >企业荣誉</p>
            <p class="article">
                公司成立以来非常重视公司的管理能力，相继通过了质量管理体系、环境管理体系及安全管理体系认证，并且在国家重点支持的高新技术领域，持续进行研究开发与技术成果转化，形成企业核心自主知识产权，获得了高新技术企业认证。</p>
            <el-row justify="center" :gutter="48" class="honor">
                <el-col :sm="6" :xs="12">
                    <div class="honor-item">高企认证</div>
                </el-col>
                <el-col :sm="6" :xs="12">
                    <div class="honor-item">ISO9001</div>
                </el-col>
                <el-col :sm="6" :xs="12">
                    <div class="honor-item">ISO14001</div>
                </el-col>
                <el-col :sm="6" :xs="12">
                    <div class="honor-item">ISO18001</div>
                </el-col>
            </el-row>
        </div>

        <div class="line"></div>

        <div class="con">

            <p class="subtitle">核心能力</p>
            <p class="article">
                公司主要的核心能力体现在以下几个方面: 公司自成立以来，已开展业务项目涉及数据标注，数据采集，智能驾驶，智能科技，智慧汽车，智能家居以及新零售等领域。营销客服: 我们的营销客服产品是一种高效、智能的客户服务软件，旨在帮助企业提升客户满意度、提高服务质量、增加客户留存率。该产品通过人工智能技术，自动回答客户问题、提供个性化的建议和服务，为企业提供更加专业、高效、便捷的客服支持。
            </p>
        </div>

        <div class="line" id="recruit"></div>

        <div class="con">
                
            <p class="title">人才招聘</p>
            <div class="recruit">
                <p class="recruit-tab">招聘条件</p>
                （1）具有中华人民共和国国籍，遵纪守法，诚实守信，无违法，违规，违纪等不良记录；<br>
                （2）具有国家认可的专科及以上学历，主修软件工程，计算机科学与技术，信息系统与信息管理等相关专业者优先；<br>
                （3）具有良好的学习和研究分析能力，语言与文字表达能力、组织协调能力和团队合作意识，能够承担工作压力。<br>

                <p class="recruit-tab">招聘程序</p>
                包含报名、简历初选、笔试、面试、录用等环节。<br>
                （1）报名(智联/邮箱投递): 应聘者通过职位申请、填写简历发送至邮箱brrsxzb@jlbairong.com。<br>
                （2）简历初选: 对应聘者投递的简历进行资格审查，并确定参加笔试人员名单；<br>
                （3）面试+笔试: 简历初选通过人员将通知来本公司进行统一面试+笔试；<br>
                （4）复试: 初期通过的人员将择优组织进行复试。<br>
                （5）最终录用。<br>

                <p class="recruit-tab">薪资福利</p>
                （1）福利待遇: 五险一金、周末双休、带薪年假、年终奖、节假日福利；<br>
                （2）涨薪规定: 在合同期限内，结合年度考核情况公司将每年对员工薪资进行上浮调整；<br>
                （3）工作时间安排: 每周双休, 上班时间为早8:30——晚5:30;<br>
                （4）文化氛围: 公司定期组织文体活动、员工聚餐、外出旅游等活动，丰富员工生活；公司为员工举办生日祝福会等；<br>
                （5）专业的培训体系: 公司为员工提供畅通的职业发展通道及科学的培训体系，内部高管为员工提供各方面的培训；<br>
                【 电话 】0431-80534512<br>
                【 地址 】吉林省长春市南关区远大购物广场3栋B-Z3-2单元217室<br>
            </div>
        </div>
    </div>
</template>
<script setup>
import { reactive, onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vue-router';
    const route = useRoute()

    onMounted(()=>{
        console.log('mounted')
    })

    watch(
        ()=> route.hash,
        async (val)=>{
            console.log('hash:', val)
            if(!val)return;
            await nextTick()
            setTimeout(() => {
                // console.log(document.querySelector(val).offsetTop)
                window.scrollTo(0, document.querySelector(val).offsetTop - 80)
            }, 60);
        },
        {immediate: true}
    )
</script>
<style lang="less" scoped>
.about-content {
    
    text-align: center;
    .con{
        .max1280();
        .marginAuto();
    }
    .title {
        font-size: 32px;
        margin: 50px 0;
        font-weight: 500;
    }

    .subtitle {
        text-align: left;
        margin: 0 0 20px;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        color: #000;
        font-size: 24px;
        line-height: 24px;
    }

    .article {
        font-size: 15px;
        line-height: 1.8;
        margin-bottom: 20px;
        font-family: 'Roboto', sans-serif;
        text-align: left;
    }

    img {
        width: 70%;
        vertical-align: top;
    }

    .line {
        border-top: 1px solid #eee;
        margin: 50px 0;
    }

    .culture {
        text-align: left;
        padding-left: 12px;

        li {
            background: url(/src/assets/img/left.png) left -5px no-repeat;
            border-bottom: 1px solid #f3f3f3;
            padding: 10px 0 10px 40px;
            display: flex;
            list-style: 24px;
            i {
                line-height: 24px;
                font-size: 16px;
                font-weight: 300;
                color: rgb(37, 168, 180);
                margin-right: 8px;
            }
        }
    }
    .honor .el-col{
        margin-top: 12px;
    }
    .honor-item {
        border: solid 2px #eeeeee;
        border-radius: 2px;
        font-size: 24px;
        font-weight: 400;
    }

    .recruit{
        text-align: left;
        margin-bottom: 50px;
        line-height: 28px;
        .recruit-tab{
            color: #000;
            font-size: 16px;
            font-weight: 500;
            margin: 16px 0 8px 0;
        }
    }
}</style>
