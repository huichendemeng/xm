<template>
  <div class="pay">
      <p class="pay_title">我的订单</p>
      <ul>
          <li @click="li1">全部<i class="i" v-show="i1"></i></li>
          <li @click="li2">待付款<i class="i" v-show="i2"></i></li>
          <li @click="li3">分笔付款<i class="i" v-show="i3"></i></li>
          <li @click="li4">已付款<i class="i" v-show="i4"></i></li>
          <li @click="li5">已完成<i class="i" v-show="i5"></i></li>
      </ul> 
      <div class="pur" v-for="item in place" :key="item.id">
        <div  class="dd">
            <div class="list">
                <img :src="item.pic" alt="">
            </div>
            <div class="Price">
                <p class="destail">{{item.place}}</p>
                <span class="C">{{item.cprice}}</span>
            </div> 
            <div class="middle">
               <span class="person_count">出发人数：<b>{{val}}</b></span>
               <span class="person_count zj">总计：<b>{{heji}}</b></span>
            </div>
        </div>
      </div> 
       <h4 class="h4">请等待商家电话，与商家联系确认行程后再付款</h4>
       <span class="heji">合计:<b></b></span>
       <button class="paynow">立即付款</button>
  </div>
</template>
<script>
    export default{
        data(){
            return{i1:false,i2:true,i3:false,i4:false,i5:false,val:1,id:this.$route.query.id,val:this.$route.query.val,place:[],cprice:""}
        },
        methods:{
            li1(){this.i1=true; this.i2=false;this.i3=false;this.i4=false;this.i5=false},
            li2(){this.i2=true;this.i3=false;this.i4=false;this.i5=false;this.i1=false;},
            li3(){this.i3=true; this.i2=false;this.i4=false;this.i5=false;this.i1=false;},
            li4(){this.i4=true; this.i2=false;this.i3=false;this.i1=false;this.i5=false},
            li5(){this.i5=true; this.i2=false;this.i3=false;this.i4=false;this.i1=false},
            pay(){
                var url="http://127.0.0.1:3000/collection";
                this.$http.post(url,{id:this.id}).then(result=>{
                    this.place=result.body;
                     var cprice=result.body[0].cprice.slice(1,5)
                     this.cprice=cprice;    
                })
            }
          },
        created(){
            this.pay()
        },
        computed:{
            heji:function(){
                var str=this.cprice;
                var hj=this.val*str
                return  hj;     
            }
        }
    }
</script>
<style>
    .pay{
        margin-top:85px;
    }
    .pay .pay_title{
        color:white;
        background:#42D2A9;
        width:100%;
        padding:10px 0px;
        text-align:center;
        font-size:16px;
        font-weight:bold;
    }
    .pay ul {
        display:flex;
        list-style:none;
        margin:0;
        justify-content:space-around;
        background:white;
        color:#505050;
        font-size:14px;
        padding:0px 0px;
        margin-top:-3%;
    }
    .pay ul li{
        width:20%;
        text-align:center;
        margin-top:8px;
    }
    .i{
        display:block;
        width:100%;
        height:3px;
        background:#42D2A9;
        
    }
    .pay img{
    width:32%;
    }
    .pay .dd .list{
        position:relative;
    }
    .dd{
        position:relative;
    }
    .Price{
        position:absolute;
        top:10%;
        left:35%;
    }
    .pay .dd .Price .destail{
        font-size:14px;
        color:#444444;    
        margin-bottom:0;
        display:-webkit-box !important;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:1;
        overflow:hidden;
        margin-top:8px;
        margin-bottom:5px;
    }

    .pay .person_count{
        font-size:14px;
    }
    .pay dd{
        position:relative;
    }
    .pay .middle{
        display:inline-block;
        width:60%;
        position:absolute;
        top:70%;
        left:35%;

    }
    .pay .mui-numbox{
        height:25%;
    }
    .pay .heji{
        color:orange;
        font-size:16px;
        font-weight:bold;
        position:fixed;
        bottom:10%;
        left:3%;
    }
    .pay .paynow{
        position:fixed;
        bottom:9%;
        right:3%;
    }
    .pay .h4{
        font-size:16px;
        position:fixed;
        bottom:15%;
        right:3%;
    }
    .pay .zj{
        margin-left:15%;
    }
</style>