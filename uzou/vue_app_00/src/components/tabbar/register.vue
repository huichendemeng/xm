<template>
 <div class="reg">
    <form action="">
      <input type="text" placeholder="用户名" v-model="uname">
      <input type="text" placeholder="手机号" v-model="phone">
      <input type="text" placeholder="图形验证码" class="Input">
      <img src="../../img/yzm.jpg" alt="">
      <input type="text" placeholder="验证码" class="Input">
      <span class="yzm">获取验证码</span>
      <input type="text" placeholder="密码" v-model="p">
      <input type="text" placeholder="确认密码" v-model="rp">
    </form>
    <p>已有账号?<span class="L" @click="login">请登录</span></p>
    <input type="checkbox" :checked="check" @click="server"><label>同意服务条款和隐私政策</label>
    <button class="L" @click="reg">注册</button>
 </div>
</template>
<script>
import {Toast} from 'mint-ui';
    export default{
        data(){
            return{
                uname:"",
                phone:"",
                p:"",
                rp:"",
                check:false
            }
        },
        methods:{
            login(){
                this.$router.push("/home/login")
            },
            reg(){
                 var reg=/^\d{11}$/;
                 var bool1=reg.test(this.phone);
                 var reg2=/^\w{6,12}$/;
                 var bool2=reg2.test(this.p)
                if(this.uname.length<1||this.uname.length>10){
                    Toast("用户名必须为2~10位数字、字母");}   
                else  if(!bool1){Toast("请输入11位手机号码")}
                else  if(!bool2){Toast("密码长度6~12且至少包含一位字母")}
                else if(this.rp!==this.p){Toast("请保持密码一致")}
                else{
                var url="http://localhost:3000/reg"
                this.$http.post(url,{uname:this.uname,phone:this.phone,p:this.p}).then(result=>{
                    if(result.body.code==1)
                     Toast(result.body.msg)
                     this.$router.push('/home/login')
                })  }
            },
            server(){
                this.$router.push('/home/sub/server');
            }
        }
    }
</script>
<style>
.reg{
    margin-top:100px;
    text-align:center;
    
}
.reg>form>input{
    width:85%;
    border:0px;
    background:#EFEFF4;
    border-bottom:2px solid #42D2A9;
    font-size:14px;
}
.reg>form>.Input{
    width:62%;
}
.reg>form>.yzm{
    color:#505050;
    font-weight:bold;
}
.reg>p{
   font-size:15px;
   font-weight:bold;
}
.reg>p>span{
   font-size:15px;
   font-weight:bold;
   margin-left:5px;
}
.reg .L{
 color:#4FD5AF;
}
.reg label{
    color:#4FD5AF;
    font-size:14px;
    font-weight:bold;
}
.reg>.L{
    width:80%;
    background:#4FD5AF;
    color:white;
    font-weight:bold;
    border:0px;
    border-radius:20px;
    margin-top:10px;
}
</style>