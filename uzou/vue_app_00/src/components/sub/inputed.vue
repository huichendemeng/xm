<template>
<div class="sub_input">
    <div class="search" navbar-fixed-top>
        <img src="../../img/nav_searchicon@2x.png" alt="" class="s" @click="search">
        <input type="text" placeholder="请输入目的地 主题或关键字" v-model="text">
        <img src="../../img/unlogin@2x.png" alt="" class="person" @click="personal">
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
    </div>
</div>
</template>
<script>
    export default{
        data(){
            return{ text:"",
             img:false,
             uname:sessionStorage.getItem("uname"), 
             cl:false
            }
        },
        methods:{
             search(){
                this.$router.push({path:"/home/search",query:{text:this.text}})
                location.reload();
            },
             personal(){
                if(this.img==false){
                    this.img=true;
                }else{
                    this.img=false
                }    
            },
            LG(){
                this.$router.push("/home/login");
                this.img=false;
            },
            Per(){
                this.$router.push("/home/personal")
                this.img=false;
            },
        },
        mounted(){
            if(this.uname){
                this.uname=sessionStorage.getItem("uname")
            }     
        }
    }
</script>
<style>
    
</style>