<template>
  <div class="update">
    <div class="U">
        <p>
            <b>用户名</b>
            <input type="text" v-model="uname" disabled>
        </p>
        <hr>
        <p>
            <b>手机号</b>
            <input type="text" v-model="phone">
        </p>
        <hr>
        <p>
            <b>邮箱</b>
            <input type="text" placeholder="邮箱" v-model="email">
        </p>
        <hr>
        <p>
            <b>生日</b>
            <input type="text" placeholder="年/月/日">
        </p>
        <hr>
        <p>
            <b>性别</b>
            <input type="text" v-model="gender">
        </p>
        <hr>
        <p>
            <b>国家</b>
            <input type="text">
        </p>
        <hr>
        <p>
            <b>真实姓名</b>
            <input type="text" v-model="realname">
        </p>
        <hr>
        <p>
            <b>身份证号</b>
            <input type="text">
        </p>
    </div>
    <button @click="update">保存</button>
  </div>
</template>
<script>
import {Toast} from "mint-ui";
    export default{
        data(){
            return{
                uname:sessionStorage.getItem("uname"),
                phone:"",
                realname:"",
                email:"",
                gender:"",
            }
        },
        methods:{
            xs(){
                var url="http://localhost:3000/xianshi";
                this.$http.post(url,{uname:this.uname}).then(result=>{
                    this.phone=result.body[0].phone;
                    this.email=result.body[0].email;
                    this.gender=result.body[0].gender;
                    this.realname=result.body[0].realname
                })
            },
            update(){  
                var reg=/^\d{11}$/;
                var bool=reg.test(this.phone);
                if(!bool){Toast("请输入11位手机号码")}
                else{
                    var url="http://localhost:3000/update";
                    this.$http.post(url,{uname:this.uname,phone:this.phone,email:this.email}).then(result=>{
                        Toast("修改成功")   
                        this.$router.push('/home/personal')  
                    })
                }
            }
        },
        created(){
            this.xs();
        }
    }
</script>
<style>
.update{
  margin-top:85px;
  
}
.U{
    background:#fff;

}
.update p{
    margin-left:15px;
    padding:0;
    color:#505050;
}
.update p input{
    margin:0;
    font-size:10px;
    width:80%;
    border:0px !important;
}
.update>button{
   background:#337AB7;
   color:white;
   width:25%;
   position:relation;
   left:37%;
}
</style>