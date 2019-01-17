<template>
<div class="Login">
  <div class="container">
    <input type="text" placeholder="邮箱或手机号" v-model="uname">
    <input type="password" placeholder="密码" v-model="upwd">
  </div>
  <p>没有账号?<span class="reg" @click="reg">请注册</span></p>
  <div class="container">
  <button @click.prevent="signin">登录</button>
  </div>
</div>
</template>
<script>
import {Toast} from 'mint-ui';
    export default{
        data(){
            return{
                uname:sessionStorage.getItem("uname"),
                upwd:"",
                uid:sessionStorage.getItem("uid")
            }
        },
        methods:{
            reg(){
                this.$router.push("/home/register")
            },
            signin(){  
                var url="http://127.0.0.1:3000/signin"
                this.$http.post(url,{uname:this.uname,upwd:this.upwd}).then(result=>{
                   if(result.body.code==-1){
                       Toast(result.body.msg);
                    }else{
                       Toast(result.body.msg);
                       sessionStorage.setItem("uname",this.uname)
                        var url1="http://127.0.0.1:3000/upwd";
                        this.$http.post(url1,{uname:this.uname}).then(result=>{
                            this.uid=result.body[0].uid;
                            console.log("uid是"+this.uid);
                            sessionStorage.setItem("uid",this.uid)
                        })
                       history.go(-1)  
                       //location.reload() 
                    }
                })
             }
      
        }
    }
</script>
<style>
    .Login input{
        border:2px solid #42D2A9 !important;
        border-radius:20px !important;
        width:85% !important;
        text-align:center;
    }
   .Login .container{
        margin-top:120px;
        text-align:center;
    }
    .Login button{
        width:80px !important;
        background:#42D2A9 !important;
        color:white !important;
        font-size:16px !important;
        border:0px solid;
        border-radius:20px !important;
        margin-top:-95px;
    }
    .Login>p{
        font-weight:bold;
        margin-left:35px;
    }
    .Login .reg{
        color:#42D2A9
    } 
</style>