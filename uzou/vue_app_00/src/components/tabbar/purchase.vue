<template>
<div class="purchasing">
    <div v-for="item in list">
        <div class="pur">
            <div  class="dd">
                <div class="list">
                    <img :src="item.pic" alt="">
                </div>
                <div class="Price">
                    <p class="destail">{{item.place}}</p>
                <span class="C">{{item.cprice}}</span>
                </div>  
            </div>
        </div>
        <p class="before_purchase">{{item.place}}</p>
    </div>
    <div class="middle">
        <span class="person_count">出发人数：</span>
        <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
            <button class="mui-btn mui-btn-numbox-minus" type="button" @click="incream" >-</button>
            <input id="test" class="mui-input-numbox" type="number" value="1" v-model="val"/>
            <button class="mui-btn mui-btn-numbox-plus" type="button" @click="add" >+</button>
        </div>
    </div>
    <div class="xuanxiang">
        <span  class="person_count date">出发日期：</span>
         <b>{{date}}</b>
        <timer-box v-on:value="fromchild"></timer-box>
        <hr>
        <h4>实名认证信息</h4>
        <p>身份证号:{{ID}}</p>
        <p>手机号:{{phone}}</p>
        <p>
          是否有签证:
        </p>
        <span class="xiaoji">小计: <b>{{t}}</b></span>
        <a id="icon-phone"><span class="mui-icon mui-icon-phone">联系商家</span></a>
        <button class="button" @click="submit">立即预定</button>
    </div>
</div>
</template>
<script>
import cal from "../sub/cal.vue"
import {Toast} from "mint-ui"
  export default{
      data(){
          return{
              val:1,
              date:"",
              uname:sessionStorage.getItem("uname"),
              phone:"",
              ID:"",
              id:this.$route.query.id,
              list:[],
              cprice:"",
              total:""
            }
      },
      methods:{
           incream(){
               if(this.val>0){
              this.val--}   
            },
            add(){
                this.val++
            },
            value: function (value) {
        // childValue就是子组件传过来的值
                this.date= value
                console.log(this.date)
            },
            fromchild(data){
               this.date=data
            },
            getID(){
                var url="http://127.0.0.1:3000/getID";
                this.$http.post(url,{uname:this.uname}).then(result=>{
                    this.phone=result.body[0].phone
                    this.ID=result.body[0].IDcardnum
                })
            },
            cont(){
                var url="http://127.0.0.1:3000/collection";
                this.$http.post(url,{id:this.id}).then(result=>{
                    this.list=result.body;
                    var tt=result.body[0].cprice
                    var cprice=tt.slice(1,5)  
                    this.cprice=cprice
                    // console.log(this.cprice)
                })
            },
            submit(){
                if(this.date==""){Toast("请选择出发日期")}
                else{
                    this.$router.push({path:"/home/pay",query:{id:this.id,val:this.val}})
                     console.log(this.id,this.val)               
                }
            },     
      },
      created(){
          this.getID();
          this.cont();
         
      },
      components:{
           "timer-box":cal
      },
      computed:{
          t:function(){
              var str=this.cprice
              var dd=str*this.val
              return dd
          }
      }
  }
</script>
<style>
   .purchasing{
       margin-top:85px;
    }
  .purchasing span{
      
        display:inline-block;
         width:50%;
        text-align:center;
         position:relative;
        
    }
    .purchasing .pur{
        margin-top:10px;
        background:white;
    }
   .purchasing img{
    width:32%;
}
.purchasing>.dd>.list{
    position:relative;
}
.purchasing  .dd{
    position:relative;
}
.purchasing .Price{
    position:absolute;
    top:10%;
    left:35%;
}
.purchasing .dd>.Price>.destail{
    font-size:14px;
    color:#444444;    
    margin-bottom:0;
    display:-webkit-box !important;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    overflow:hidden;
}
.purchasing .dd>.Price>.C{
    display:inline-block;
    width:78px;
    height:20px;
    font-weight:bold;
    line-height:20px;
    padding-top:1px;
    margin-top:10px;
}
.purchasing .before_purchase{
   font-size:16px;
   font-weight:bold;
   color:orange;
   margin:15px 10px;
}
.purchasing .person_count{
    color:#42D2A9;
    font-weight:bold;
    margin-left:-10px;
}
.purchasing .mui-numbox{
 margin-left:0px;
}
.purchasing .xuanxiang{
    margin-top:20px;
}
.page-datetime {
    margin-top: 5px;
   
}
.purchasing .xiaoji{
    color:orange;
    font-weight:bold;
    margin-left:-10%;
    margin-bottom:8px;
}
.purchasing .button{
    width:100%;
    background:#42D2A9;
    color:white;
}
.purchasing .mui-icon-phone{
    font-size:16px !important;
    margin-left:10%;
}

</style>