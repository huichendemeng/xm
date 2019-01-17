<template>
  <div class="update_upwd">
    <div class="U">
        <p>
            <b>当前密码</b>
            <input type="password" v-model="upwd" placeholder="请输入当前密码">
        </p>
        <hr>
        <p>
            <b>新密码</b>
            <input type="password" v-model="npwd" placeholder="请输入新密码">
        </p>
        <hr>
         <p>
            <b>确认密码</b>
            <input type="password" v-model="rpwd" placeholder="请确认新密码">
        </p>
        <hr>
    </div>
    <button @click="update_upwd">确认修改</button>
  </div>
</template>
<script>
import {Toast} from "mint-ui";
    export default{
        data(){
            return{
                uname:sessionStorage.getItem("uname"),
                upwd:"",
                rpwd:"",
                npwd:""
            }
        },
        methods:{
           update_upwd(){
                var reg2=/^\w{6,12}$/;
                var bool2=reg2.test(this.npwd)
                if(!bool2){Toast("新密码介于6~12之间")}
                else{
                    var url="http://localhost:3000/upwd"
                    this.$http.post(url,{uname:this.uname}).then(result=>{
                        var old=result.body[0].upwd;
                        if(this.upwd==old){
                            if(this.npwd!==this.rpwd){
                                Toast("请保持密码一致")
                            }
                            else{
                                var url="http://localhost:3000/update_upwd";
                                this.$http.post(url,{upwd:this.npwd,uname:this.uname}).then(result=>{
                                    Toast("修改成功");
                                    sessionStorage.clear();
                                    location.reload();
                                    this.$router.push('/home/login')
                                })          
                            }
                        }
                        else{Toast("旧密码错误，修改失败")}    
                    })
                }      
           }
        },
        created(){
           
        }
    }
</script>
<style>
.update_upwd{
  margin-top:85px;
  
}
.U{
    background:#fff;

}
.update_upwd p{
    margin-left:15px;
    padding:0;
    color:#505050;
}
.update_upwd p input{
    margin:0;
    font-size:10px;
    width:80%;
    border:0px !important;
}
.update_upwd>button{
   background:#337AB7;
   color:white;
   width:25%;
   position:relation;
   left:37%;
}
</style>