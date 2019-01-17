<template>
<div class="HomeContainer">
      <div class="app-home">
        <mt-swipe  :auto="2000">
            <mt-swipe-item v-for="item in list" :key="item.id">
              <img :src="item.img_url" alt="">
            </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="six">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li class="mui-table-view-cell mui-media mui-col-xs-3 ">
            <router-link to="/home/placelist">
              <img src="../../img/1.png" alt="">
              <div class="mui-media-body">当地拼团</div>
            </router-link>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-3">
              <a href="">
                <img src="../../img/2.png" alt="">
                <div class="mui-media-body">私家团</div>
              </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-3"><a href="#">
              <img src="../../img/3.png" alt="">
              <div class="mui-media-body">主题游</div></a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-3 "><a href="#">
                  <img src="../../img/4.png" alt="">
                  <div class="mui-media-body">亲子游</div></a></li>
          
          <li class="mui-table-view-cell mui-media mui-col-xs-3"><a href="#">
                  <img src="../../img/5.png" alt="">
                  <div class="mui-media-body">签证</div></a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-3 "><a href="#">
                  <img src="../../img/6.png" alt="">
                  <div class="mui-media-body">全球Wi-Fi</div></a></li>   
          <li class="mui-table-view-cell mui-media mui-col-xs-3 ">
          <a href="#">
            <img src="../../img/7.png" alt="">
            <div class="mui-media-body">住宿</div></a></li>   
          <li class="mui-table-view-cell mui-media mui-col-xs-3 ">
           <router-link to="/home/all">
            <img src="../../img/8.png" alt="">
            <div class="mui-media-body">全部</div>
           </router-link>
          </li>
        </ul> 
      </div>
      <router-link to="/home/js">
         <img src="../../img/js.png" alt="" class="js">  
      </router-link> 
      <div class="place"> 
        <div class="title">
            <p><img src="../../img/hotshop.png" alt=""></p>
            <p>优选来自世界各地的旅游商家 带来最原汁原味的旅游产品</p>
        </div>
        <ul class="shop_body">
         <li v-for="item in d" :key="item.id" :style="{ 'background-image': 'url(' + item.pic + ')','background-repeat':'no-repeat'}" class="blur">
              <img :src="item.vpic" alt="">
              <div class="travel">
                <span>{{item.shop}}</span>
                <p>{{item.intr}}</p>
              </div>
              <div class="mask">
                 <span>查看详情</span>
              </div>
          </li>
        </ul>
      </div>
      <div class="pic">
         <p>——————&nbsp;&nbsp;&nbsp;&nbsp;<img src="../../img/moreicon.png" alt="">更多精彩推荐&nbsp;&nbsp;&nbsp;&nbsp;———————</p>
      </div>
      <div class="intrAll">
        <div class="intr blur" v-for="item in recommend" :key="item.id" :style="{ 'background-image': 'url(' + item.pic + ')','background-repeat':'no-repeat'}"> 
              <div class="price">
                <span class="cprice">{{item.cprice}}</span>
                <span class="fprice">{{item.fprice}}</span>
              </div>  
             <div class="bottom">
                <p>{{item.place}}</p>
             </div>
        </div>
      </div>
</div>
</template>
<script>
  export default{
     data(){
       return{
         list:[],
         d:[],
         recommend:[],
         }
       },
     methods:{
       getImage(){
        var url="http://127.0.0.1:3000/imagelist";
        this.$http.get(url).then(result=>{
          this.list=result.body;
        })
       },
       getData(){
         var url="http://127.0.0.1:3000/li";
         this.$http.get(url).then(result=>{
           this.d=result.body
          
         })
       },
       getRecommend(){
         var url="http://127.0.0.1:3000/recommend";
         this.$http.get(url).then(result=>{
           this.recommend=result.body;
         })
       },
       fixed(){

       }
     },
     created(){
       this.getImage();
        this.getData();
        this.getRecommend();
     }
  }
</script>
<style>
 .app-home{
     height:235px;
   }
   .mint-swipe{
     margin-top:80px;
   }
  .app-home img{
     width:100%;
     height:80%;
  }
  .six ul li a img{
    width:50px;
    height:50px;
  }
  .six ul li .mui-media-body{
    font-size:14px !important;
  }
  .js{
    width:100%;
    height:100%;
  }
  .place{
    background:white;
  }
  .title{
    text-align:center;
    border:1px solid gray;
  }
  .title img{
    width:169px;
    height:20px;
    margin-top:5px;
  }
  .shop_body li::before{
    content:'';
    display:table;
  }
  .shop_body li>img{
    width:54px;
    height:54px;
    border:0;
    border-radius:50% 50%;
    margin:15px  25px;
  }
  .shop_body{
     list-style:none;
     margin:0;
     padding:0;
  }
  .shop_body>li{
    height:90px;
    margin-top:10px;
    margin-left:8px;
    margin-right:8px;
    color:white;
  }
  .travel{
     position:relative;
     top:-60px;
     margin-left:100px;
  }
  .travel>p{
    color:white;
  }
  .shop_body>li>.travel>span{
     font-size:14px;
     font-weight:bold;
     color:white;
   }
  .mask{
    width:90px;
    height:90px;
    background:black;
    opacity:0.7;
    text-align:center;
    line-height:90px;
    float:right;
    margin-top:-142px;
  }
  .mask>span{
    color:white;
    font-size:14px;
  }
.blur{
  background-size:100% 100%;
}
.intrAll{
  background:white;
  padding-right:8px;
  padding-left:8px;
}
.intr{
  width:100%;
  height:160px;
  border:1px solid #ccc;
  box-shadow:2px 2px 2px  #ccc;
  margin-top:10px;
  margin-bottom:11px;
}
.intr>.bottom{
  height:50px;
  background:linear-gradient(to top,black,gray,transparent);
  color:white;
  font-size:14px;
  margin-top:110px;
  padding:0px;
}
.bottom>p{
  color:white;
  padding:12px 2px;
 
}
.price>.cprice{
  display:inline-block;
  width:92px;
  height:32px;
  background:#EC7B1E;
  color:white;
  font-size:14px;
  text-align:center;
  line-height:32px;
  float:right;
  margin:45px 0px;
}
.price>.fprice{
  display:inline-block;
  width:92px;
  height:24px;
  color:#EC7B1E;
  font-size:14px;
  border:1px solid #EC7B1E;
  background:white;
  text-align:center;
  line-height:24px;  
  float:right;
  margin:77px -92px;
}
.pic{
  text-align:center;
}

.pic>p>img{
  position:relative;
  top:8px;
  margin-right:5px;
}

</style>
