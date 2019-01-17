<template>
<div class="JS">
<div class="jss">
   <img src="../../img/js.jpg" alt="" class="p1">
   <div class="home">
       <img src="../../img/home.jpg" alt="" class="p2" @click="goHome">
   </div>
   <div class="mui-card">
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                <p>角山长城景区年卡</p>
                <span class="span1">￥15</span>起
                <div class="uzou">
                    <img src="../../img/uzou.jpg" alt="" class="p3">
                    <img src="../../img/tb.jpg" alt="" class="p4">
                    <div class="shop">
                        <p class="shop_p1">悠走专营</p>
                        <p class="shop_p2">类别：国内服务提供商</p>
                        <p class="shop_p2">工作时间：</p>
                    </div>
                </div>
            </div>
        </div>
   </div>
   <div class="mui-card">
        <div class="mui-card-header">
           <span>用户评论</span>
           <div class="Picture">
                <img src="../../img/pf.png" alt="">
                <img src="../../img/pf.png" alt="">
                <img src="../../img/pf.png" alt="">
                <img src="../../img/pf.png" alt="">
                <img src="../../img/pf.png" alt="">
                <span>5.0分</span>
           </div>
        </div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                <comment-box></comment-box>
            </div>
        </div>
        <div class="mui-card-footer">
           <a href="">查看更多评论</a>
        </div>
    </div>
    <div class="body">
        <div class="nav">
            <span>行程简介</span>  
            <span>产品详情</span>
            <span>费用说明</span>
            <span>预订须知</span>
        </div>   
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <span class="card">行程简介</span>
                    <p>角山长城年卡</p>
                </div>
            </div>
		</div>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                     <span class="card">产品详情</span>
                     <p class="title">景区游览时间：</p>
                     <p class="title">旺季：<span>7:00~17:00</span></p>
                     <p class="title">淡季：<span>9:00~16:30</span></p>
                     <p class="title">靓点: <span>2018年，您不仅仅可以在角山长城看到美丽的四季景色，还会看到角山长城景区的大变化。这里可以看到美丽的角山湖、花海、非遗文化体验区以及角山的祈福文化。 </span> </p>
                     <p class="title">交通：<span>您可以选择自驾，您也可以公交出行，到山海关东方宾馆下车，租自行车环保出行，骑行约20分钟左右；或者打车前往。</span></p>
                     <img src="../../img/d1.jpg" alt="" class="dd">
                     <img src="../../img/d2.jpg" alt="" class="dd">
                     <img src="../../img/d3.jpg" alt="" class="dd">
                     <img src="../../img/d4.jpg" alt="" class="dd">
                </div>
            </div>
		</div>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <span class="card">费用说明</span>
                    <b>费用包括：<span class="SPAN">角山长城景区门票</span></b><br>
                    <b>费用不包括：<span class="SPAN">角山索道票以及其他收费项目</span></b><br>
                    <b class="B">温馨提示</b>
                    <p>1. 在不能满足设备安全运行的恶劣天气，无法抗拒的自然灾害情况下（如雷电、雨雪、冰雹、大雾、暴雨、台风等），景区部分项目将临时关闭或部分关闭。</p>
                    <p>2. 景区活动内容如有变动，以当日公告为准。景区所有项目均会定期进行日检、周检、月检和年度检修，相关检修工作可能会造成部分项目运行时间的延迟或暂停对游客开放，详情以景区现场公告为准。</p>
                    <p>3. 护林防火期间角山景区关闭，年卡不能使用。</p>
                </div>
            </div>
		</div>
        <div class="mui-card Bottom">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <span class="card">预订须知</span>
                    <p>角山长城年卡原价78元/人</p>
                    <p>年卡价格说明：悠走网回馈秦皇岛市民，现<span>角山长城年卡促销价15元/人</span></p>
                    <p><span>优惠截止日期：2018年1月31日</span></p>
                    <p><span>年卡须知</span></p>
                    <p>1、仅限本人扫身份证入园使用，如有遗忘携带将无法入园;</p>
                    <p>2、年卡仅作为日场入园凭证，不包含景区内其它售票项目；凡公园举行文化活动，请按公园公示的时间段持票进园游览；</p>
                    <p>3、年卡2018年10.1日-10.5日期间进入景区需补交10元/人；</p>
                    <p>4、年卡仅限每天入园一次；</p>
                    <p>5、当日15:00之前购买次日生效；年卡有效期：自年卡开通365天内有效；</p>
                    <p>6、此年卡如有发现非本人使用，则注销该身份证所办角山长城年卡；</p>
                    <p>7、咨询电话：4000606936</p>
                    <p>8、年卡最终解释权归北京悠尚沃德信息技术有限公司；</p>
                    <p>9、营业时间：旺季：7:00-17:00<br>淡季：9:00-16:30</p>
                    <p><span>办理须知</span></p>
                    <p>1、渠道办理：您可以到指定代办点办理年卡</p>
                    <p>2、公司办理：山海关古城北路11-6，五佛山文化旅游开发有限公司</p>
                    <p>3、自主下单：uzou平台自主下单付款</p>
                </div>
            </div>
		</div>
    </div>
    <nav class="mui-bar mui-bar-tab">
    <a href="#tabbar" class="mui-tab-item mui-active">
       <span><img src="../../img/sc.png" alt="" class="Pic"> </span>
       <p class="total">收藏产品</p>
    </a>
    <a href="#" class="mui-tab-item">
      <span><img src="../../img/dp.png" alt="" class="Pic"></span>
      <p class="total">进入店铺</p>
    </a>
    <a href="#" class="mui-tab-item">
      <span><img src="../../img/kf.png" alt="" class="Pic"></span>
      <p class="total">联系客服</p>
    </a>
    <a href="#" class="mui-tab-item">
      <span><img src="../../img/dh.png" alt="" class="Pic"></span>
      <p class="total">联系卖家</p>
    </a>
    <a href="#" class="mui-tab-item">
      <span class="purchase">立即购买</span>
    </a>
  </nav>
</div>
</div>
</template>
<script>
 import comment from "../sub/comment.vue"
    export default{
        data(){
            return{}
        },
        methods:{
          goHome(){
              this.$router.push("/home")
          }
        },
        components:{
            "comment-box":comment
        }
    }
</script>
<style>
    .jss>.p1{
        height:211px;
        width:100%;
    }
     .JS .home{
        background:black;
        width:30px;
        height:30px;
        border:0px;
        border-radius:50%;
        opacity:0.7;
        float:right;
        margin-top:-210px;
        margin-right:10px;
        
    }
   .JS  .mui-card{
        margin:5px 5px !important;

    }
   .JS .jss>.home>.p2{
        width:30px;
        height:30px;
    }
    .jss .span1{
        color:#FF7E14;
    }
    .jss .uzou{
        background:#E3FFF7;
        height:68px;
        margin:0px -15px;
        margin-bottom:-15px;
        padding:0
    }
    .jss .uzou .p3{
        width:50px;
        height:50px;
        border:1px solid #ccc;
        border-radius:50%;
        margin:10px;
    }
    .jss .uzou .p4{
        width:15px;
        height:15px;
        float:right;
        margin-top:5px;
    }
    .jss .shop p{
        margin:0;
       padding:0
    }
   .JS .shop{
       margin:-73px 80px;
    }
   .JS .jss .shop .shop_p1{
        font-size:15px;
        font-weight:bold;
        color:gray;
    }
    .JS .jss .mui-card-header img{
        width:14px;
        height:14px;
        padding:0;
        margin:0;
    }
   .JS  .jss .mui-card-header>span{
         font-size:14px;
         color:#42D2A9;
         font-weight:bold;
     }
     .jss .mui-card-header>.Picture{
         width:120px;
     }
    .JS .mui-card-footer>a{
         display:inline-block;
         width:125px;
         height:30px;
         margin:0 auto;
         border:1px solid #42D2A9;
         border-radius:5px;
         text-decoration:black;
         padding:5px 5px;
         color:black;
         text-align:center;
     }
     .jss .body>.nav{
         height:44px;
         border-bottom:1px solid #ccc;
         margin-top:10px;
         background:white;
         text-align:center;
         line-height:44px;
     }
      .jss .body>.nav>span{
         color:#505050;
         margin-top:10px;
         font-size:15px;
         margin:0px 15px;
     }
    .JS  .mui-card .mui-card-content-inner>.card{
         display:block;
         height:30px;
         width:86px;
         color:white;
         background:#42D2A9;
         text-align:center;
         line-height:30px;
         border:0px solid ;
         border-radius:20px;
         margin:0px -27px;
         margin-top:-5px;
         font-size:15px;
     }
     .JS .mui-card .mui-card-content-inner>p{
         color:#505050;
         margin-top:10px;
     }
     .JS .mui-card .mui-card-content-inner>.title{
         font-size:14px;
         color:#E36C09;
         margin-top:10px;
         border:0;
         text-align:left;
     }
    .JS  .mui-card-content-inner>.title>span{
         font-size:14px;
         color:#505050;
         margin-top:10px;
         border:0;
         text-align:left;
     }
    .JS .mui-card-content-inner>.dd{
        width:46%;
        margin:5px 5px;
    }
   .JS .Bottom span{
        font-size:14px;
        color:red;
    }
    .JS .Bottom .card>p{
        font-size:14px;
        color:#505050;
    }
    .JS .SPAN{
        font-weight:normal;
    }
    .JS .B{
        color:orange;
    }
    
    .jss>nav{
         margin-bottom:50px;
    }
    .jss>nav>a .total{
        color:#505050;
        font-size:14px;
    }
    .jss>nav>a .purchase{
        display:block;
        width:100%;
        height:50px;
        line-height:50px;
        color:white;
        background:linear-gradient(to top,#FF812E,#FF7448)
    }
    .JS{
        margin-top:85px;
        margin-bottom:100px;
    }
</style>