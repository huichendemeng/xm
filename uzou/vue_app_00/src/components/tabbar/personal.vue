<template>
 <div class="personal">
    <div class="per" :class="bg==1?'bg':''">
        <div class="top">
            <div  @click="jump">
                <img src="../../img/gr.png" alt="">
                <p class="" v-if="uname">欢迎{{uname}}</p>
                <p class="" v-else>请登录</p>
            </div>
        </div>
        <div class="bottom">
        <p>我的订单<span>查看全部订单</span></p>
        <ul class="mui-table-view mui-grid-view mui-grid-9"> 
            <li class="mui-table-view-cell mui-media mui-col-xs-3">
                <a>
                    <img src="../../img/fk.png" alt="" @click="jumppay">
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3">
                <a href="#">
                     <img src="../../img/fbfk.png" alt="">
                  
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3">
                <a href="#">
                   <img src="../../img/wfk.png" alt="">
                
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3">
                <a href="#">
                    <img src="../../img/ywc.png" alt="">
                </a>
            </li>
        </ul>
        <ul class="mui-table-view mui-grid-view mui-grid-9"> 
            <li class="mui-table-view-cell mui-media mui-col-xs-4" @click="dl($event)">
                <a>
                    <img src="../../img/wdsc.png" alt="" id="1">
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4" @click="dl($event)">
                <a href="#">
                      <img src="../../img/tksp.png" alt="" id="2">
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4" @click="dl($event)">
                <a>
                  <img src="../../img/sz.png" alt="" id="3">
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4" @click="dl($event)">
                <a href="#">
                    <img src="../../img/xj.png" alt="" id="4">
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4" @click="dl($event)">
                <a href="#">
                    <img src="../../img/ts.png" alt="" id="5">
                </a>
            </li> 
            <li class="mui-table-view-cell mui-media mui-col-xs-4" @click="dl($event)">
                <a href="#">
                   <img src="../../img/pj.png" alt="" id="6">
                </a>
            </li> 
        </ul> 
        </div>
    </div>
    <div v-show="alert" class="alert">
            <p>消息提示</p>
            <hr>
            <div>请先登录</div>
            <p class="c" @click="x">确定</p>
    </div>
 </div>
</template>
<script>
    import {Toast} from 'mint-ui';
    export default{
        data(){
            return{
                uname:sessionStorage.getItem("uname"),
                alert:false,
                bg:0
            }
        },
        methods:{
            jump(){
                if(!this.uname){
                this.$router.push("/home/login")}
                else{this.$router.push("/home/setting")}
            },
            dl(e){
                if(!this.uname){
                   this.alert=true;
                   this.bg=1;
                }
                else{
                    var el=e.target.id
                  if(el==1){this.$router.push("/home/setting/collection")}
                  if(el==3){this.$router.push("/home/setting")}
                }
            },
            x(){this.bg=0; this.alert=false;},
            jumppay(){
                if(!this.uname){Toast("请先登录！")}
                else{
                   this.$router.push("/home/pay")
                }
            }
        }
    }
</script>
<style>
.personal{
    margin-top:85px;
}
.bg{
    width:100%;
    height:100%;
    background:black;
    opacity:0.3;
}
.personal .per .top {
   background:url(../../img/bg.png);
   background-size:100%;
   height:300px;
   position:relative;
}
.per .top img{
    width:94px;
    height:94px;
    position:absolute;
    top:50%;
    left:50%;
    margin-left:-47px;
    margin-top:-85px;
}
.personal .per .top p{
    color:white;
    font-weight:bold;
    position:absolute;
    top:50%;
    left:50%;
    margin-left:-25px;
    margin-top:22px;
    font-size:16px;
}
.personal>.per>.bottom{
    width:100%;
}
.personal>.per>.bottom>:first-child{
   color:gray;
   background:white;
   margin:0;padding:5px;
}
.personal>.per>.bottom>:first-child>span{
    float:right;
    font-size:12px;
}
.personal>.per>.bottom>ul{
    width:100%;
    background:white;
}
.personal .bottom .mui-grid-view.mui-grid-9 .mui-table-view-cell{
    padding:0px 5px;
}
.personal .alert{
    background:white;
    width:75%;
    position:absolute;
    top:25%;
    left:13%;
    border:1px solid white;
    border-radius:10px;
}
.personal .alert>p{
    font-size:16px;
    color:#505050;
    margin-top:5px;
    margin-left:10px;
}
.personal .alert>div{
    text-align:center;
    padding:10px 0px;
}
.personal .alert>.c{
    margin-left:80%;
}
</style>