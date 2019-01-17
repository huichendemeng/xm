<template>
<div class="shopping">
    <div class="zhimei">
        <div class="LEFT">
          <img src="../../img/zhimei.png" alt="">
        </div>
        <div class="RIGHT">
           <p class="zm">至美旅行</p>
           <p class="zm1">类别：海外服务提供商</p>
           <p class="zm1">等级：<img src="../../img/tb.jpg" alt=""></p>
        </div>
    </div>
    <div class="dd" v-for="item in shopping" :key="item.id">
        <div class="list">
            <img :src="item.pic" alt="">
            <div class="intrb">{{item.sale}}</div>
        </div>
        <div class="Price">
            <p class="destail">{{item.place}}</p>
            <span class="C">{{item.cprice}}</span>
        </div>  
    </div>
</div>
</template>
<script>
    export default{
        data(){
            return{
                shopping:[]
            }
        },
        methods:{
            getshopping(){
                var url="http://127.0.0.1:3000/shopping";
                this.$http.get(url).then(result=>{
                    console.log(result)
                    this.shopping=result.body;
                })
            }
        },
        created(){
            this.getshopping()
        }
    }
</script>
<style>
.shopping img{
    width:32%;
}
.shopping>.zhimei{
    display:flex;
    background:#42D2A9;
    position:fixed;
    top:0%;
    width:100%;
    z-index:999;
}
.shopping>.zhimei>.LEFT{
    margin:5% 5%;
}
.shopping>.zhimei>.LEFT>img{
    width:70px;
    height:70px;
}
.shopping>.zhimei>.RIGHT{
    margin:3% 3%;
}
.shopping>.zhimei>.RIGHT>p>img{
    width:14px;
    height:14px;
}
.shopping>.zhimei>.RIGHT>.zm{
    color:white ;
    font-size:18px;
    font-weight:bold;
}
.shopping>.zhimei>.RIGHT>.zm1{
    color:white;
}
.shopping .dd>.list{
    position:relative;
}
.shopping .dd{
    position:relative;
}
.shopping .Price{
    position:absolute;
    top:10%;
    left:35%;
}
.shopping .intrb{
  width:32%;
  height:25px;
  position:absolute;
  top:70%;
  background:linear-gradient(to top,black,gray,transparent);
  color:white;
  font-size:14px;
  padding:0px;
  text-align:center;
  line-height:25px;
}
.shopping .dd>.Price>.destail{
    font-size:14px;
    color:#444444;    
    margin-bottom:0;
    display:-webkit-box !important;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    overflow:hidden;
}
.shopping>.dd>.Price>.C{
    display:inline-block;
    width:78px;
    height:20px;
    background:#FF5454;
    text-align:center;
    line-height:20px;
    padding-top:1px;
}
.shopping{
    margin-bottom:60px;
    margin-top:115px;
}
.hide{
    display:none;
}
</style>