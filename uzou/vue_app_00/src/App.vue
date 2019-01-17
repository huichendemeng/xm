<template>
<div class="app-container">
  <!-- 头部 -->
  <mt-header fixed title="悠走旅行"></mt-header>
  <header id="header"  class="mui-bar mui-bar-transparent">
    <!-- 搜索 -->
  <search></search>
  <!--
      <div class="search" navbar-fixed-top>
          <img src="./img/nav_searchicon@2x.png" alt="" class="s" @click="search">
          <input type="text" placeholder="请输入目的地 主题或关键字" v-model="text">
          <img src="./img/unlogin@2x.png" alt="" class="person" @click="personal">
      </div>
      <div class="NAVBAR" v-show="img">
        <div class="sj"></div>
        <div class="cont">
          <ul>
            <li @click="Per" v-if="uname">{{uname}}的悠走</li>
            <li @click="LG" v-else>登录/注册</li>
            <li>悠走客服</li>
            <li>个人中心</li>
            <li>回到首页</li>
          </ul>
        </div>
      </div>-->
  </header>
   <router-view></router-view>
   <!-- tabbar -->
  <nav class="mui-bar mui-bar-tab">
    <router-link to="/home"  class="mui-tab-item mui-active">
       <span><img src="./img/myhome.png" alt="" class="Pic"> </span>
       <p class="total">首页</p>
    </router-link> 
    <router-link to="/home/destination"  class="mui-tab-item">
      <span><img src="./img/destination.png" alt="" class="Pic"></span>
      <p class="total">目的地</p>
   </router-link>
    <router-link to="/home/personal" class="mui-tab-item">
      <span><img src="./img/mycenter.png" alt="" class="Pic"></span>
      <p class="total">我</p>
    </router-link>
  </nav>
</div>
</template>
<script>
import inputed from "./components/sub/inputed";
  export default{
    data(){
      return{
        img:false,
        uname:sessionStorage.getItem("uname"),      
      }
    },
    methods:{ 
     /* LG(){
        this.$router.push("/home/login");
        this.img=false;
      },
      Per(){
        this.$router.push("/home/personal")
        this.img=false;
      },*/
    },
    mounted(){
      
      /*console.log(1232);
      this.uname=sessionStorage.getItem("uname");
      console.log(this.uname);*/
    },
    created() {
    },
    components:{
       "search":inputed
    }
  }
</script>
<style>
#header{
  width:100%;
  margin:0;
  padding:0
}
.search{
   margin-top:40px;
   height:45px;
   background:white;
   border:1px solid white; 
   position:relative;
}
.search>input{
  margin-top:5px;
  margin-left:-15px;
  height:35px !important;
  width:87% !important;
  font-size:14px;
  border:1px solid #ccc;
  padding-left:30px !important;
}
.search .person{
  width:32px;
  height:32px;
  float:right;
  margin-top:7px;
  margin-right:5px;
}
.search .s{
   width:20px;
   height:22px;
   position:relative;
  top:5px;
  left:10px;
}
.Pic{
  width:26px;
  height:25px;
}
.app-container{
  margin-bottom:60px;
  position:relative;
}
.app-container nav a>span>img{
  margin-bottom:-5px;
}
.app-container nav a>.total{
  margin:0;
  padding:0
}
.app-container .NAVBAR{
  position:relative;
 
}
.app-container .NAVBAR .cont{
  position:absolute;
   background:black;
  opacity:0.8;
  top:10%;
  right:0%;
  border-radius:10px;
}
.app-container .sj{
  border-top: 8px solid transparent;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid black;
  width:16px;
  height:16px;
  position:absolute;
  margin-top:-16px;
  right:5%;
  z-index:100
}
.app-container .NAVBAR>.cont>ul{
  list-style:none;
  color:white;
  font-size:14px;
  font-weight:bold;
  margin:0;
  padding:0;
}
.app-container .NAVBAR>.cont>ul>li{
  border-bottom:1px solid gray;
  margin:5px 5px;
  padding:1px 5px;
}
</style>