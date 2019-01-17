<template>
  <div class="qianzheng">
    <div class="qz">
        <img :src="qianzhenginfo[id-1].pic" class="p1">
        <div class="home" @click="goHome">
            <img src="../../img/home.jpg" alt="" class="p2">
        </div>
    </div>
    <div class="Australia">
       <p class="Place">{{qianzhenginfo[id-1].title}}</p>
       <p class="PRICE">{{qianzhenginfo[id-1].price}}</p>
       <p class="Desc">澳大利亚个人旅游 一年单次 一年多次 停留期90天/次</p>
    </div>
    <div class="middle">
        <span class="person_count">人数</span>
        <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
            <button class="mui-btn mui-btn-numbox-minus" type="button" @click="incream" >-</button>
            <input id="test" class="mui-input-numbox" type="number" value="1" v-model="val"/>
            <button class="mui-btn mui-btn-numbox-plus" type="button" @click="add" >+</button>
        </div>
    </div>
    <div class="Bottom">
       <div class="b_left">
          <img src="../../img/ast.jpg" alt="">
       </div>
       <div class="b_right">
         <p class="ast">艾斯途</p>
         <p>类别:国内服务提供商</p>
         <p>
           <span class="rank">等级</span>
           <img src="../../img/tb.jpg" alt="" class="tb">
         </p>
       </div>
    </div>
    <div class="fk">
        <b class="qianzheng_b" @click="toggle(1)">预订须知</b>
        <div v-show="show===1">
            <div class="ydxz">
            <p>1. 在办理签证期间，我司可能会根据您的材料情况要求增补其他材料、担保金或予以劝退；使馆也可能会针对您的实际情况，要求增补其他材料，或延长签证受理时间（此情况由使馆决定，我司无法干预）。使馆也可能因内部原因导致延迟出签，本网相关的受理时间信息仅供参考，非法定承诺。</p>
            <p>2. 请您理解提供完整材料并不能作为获得签证的保证，最终签证结果将由申请国使馆决定。</p>
            <p>3. 澳大利亚签证为电子签证，出行时请务必携带获签解释信，否则将影响您的出行。</p>
            <p>4. 中华人民共和国公安部已确认，持澳大利亚无贴纸签证者不可经陆路或者水路口岸经澳门特别行政区，由澳门或香港搭乘航班赴澳。
            <p>5. 使馆在审查签证时，可根据个人情况要求提供以上没有提及的其他补充资料，申请人被通知补充其他资料并不表示其签证就能够确保自动颁发。</p>
            <p>6. 澳大利亚领馆将于2016年02月08日-02月12日闭馆。</p>
            </div>
        </div>
    </div>
    <div class="fk">
        <b class="qianzheng_b" @click="toggle(2)">所需材料</b>
        <div class="sxcl" v-show="show===2">
        <img src="../../img/sxcl.jpg" alt="">
        <img src="../../img/ssss.jpg" alt="">
        <img src="../../img/eeee.jpg" alt="">
        <img src="../../img/dddd.jpg" alt="">
        </div>
    </div>
    <div class="fk">
        <b class="qianzheng_b" @click="toggle(3)">费用说明</b>
        <div class="fysm" v-show="show===3">
        <p>不含：快递费，及其他未提及费用。拒签费用不退。</p>
        </div>
    </div>
    <div class="fk">
        <b class="qianzheng_b" @click="toggle(4)">常见问题</b>
        <div class="cjwt" v-show="show===4">
        </div>
    </div>
    <div class="Tool">
        <img src="../../img/lx.png" alt="" class="lx">
        <img src="../../img/dianpu.png" alt="" class="dianpu">
        <span class="Purchase">立即购买</span>
    </div>
 </div>
</template>
<script>
    export default{
        data(){
            return{
                val:1,
                qianzhenginfo:[{pic:''},{pic:''},{pic:''},{pic:''},{pic:''},{pic:''},{pic:''},{pic:''},{pic:''},{pic:''},{pic:''}],
                id:"",
                show:''
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
            goHome(){
                this.$router.push("/home")
            },
            getqzinfo(){
                 this.id=this.$route.params.id;
                 //console.log(this.id)
                // console.log(id);
                this.$http.get("http://127.0.0.1:3000/qzAll?id="+this.id).then(result=>{
                    this.qianzhenginfo=result.body         
                })
            },
            toggle(index){
                if(this.show===index){
                    this.show=false;
                }else{this.show=index}
            }     
        },
        created() {
           this.getqzinfo()
        }
    }
</script>
<style>
    .qianzheng{
        margin-top:85px;
       
    }
     .qianzheng>.qz>.p1{
        height:100%;
        width:100%;
    }
    .qianzheng>.qz>.home{
       opacity:0.9 !important;
        background:#46D3AA;
        margin-top:-270px;
    }
    .qianzheng>.qz>.home>.p2{
        width:30px;
        height:30px;
    }
    .qianzheng>.Australia{
        background:#fff;
        padding:15px 10px;
    }
    .qianzheng>.Australia>.Place{
        color:#46D3AA;
        font-size:18px;
        font-weight:bold;
        margin:0;
    }
    .qianzheng>.Australia>.PRICE{
         color:#FF6537;
         font-size:14px;
        font-weight:bold;
         margin:0;
    }
    .qianzheng>.Australia>.Desc{
        color:#505050;
        font-weight:bold;
        font-size:10px;
         margin:0;
    }
     .qianzheng>.middle{
       background:white;
       margin-top:5px;
       padding:5px 0px;
    }
    .qianzheng>.middle>.person_count{
        font-size:15px;
        font-weight:bold;
        margin-left:20px;
    }
     .qianzheng>.middle>.mui-numbox{
       margin-left:40px;
    }
    .qianzheng>.Bottom{
        display:flex;
        margin-top:5px;
        background:white;
    }
    .qianzheng .qianzheng_b{
        display:block;
        padding:7px 5px;
        width:100%;
        font-size:14px;
        color:#505050;
        background:#42D2A9;
        border-bottom:1px solid white;
    }
    .qianzheng>.Bottom>.b_left{
       text-align:center;
        width:35%;
        margin:15px 5px;
    }
    .qianzheng>.Bottom>.b_left>img{  
        width:100%;

    }
    .qianzheng>.Bottom>.b_right{

    }
    .qianzheng>.Bottom>.b_right>p>img{
        width:20px;
        height:20px;
    }
    .qianzheng>.Bottom>.b_right>.ast{
        color:#6DDCBD;
        font-weight:bold;
        font-size:15px;
        margin:5px 0px;
    }
     .qianzheng>.Bottom>.b_right>p{
         color:#505050;
     }
    .qianzheng>.Bottom>.b_right>p>.rank{
        color:#505050;
        font-size:15px;
        margin:5px 0px;
    }
    .qianzheng>.Bottom>.b_right>p>.tb{
       margin:-4px 10px;
    }
    .qianzheng .sxcl>img{
        width:100%;
    }
    .qianzheng>.Tool{
        background:#000;
        padding:5px 5px;
    }
    .qianzheng>.Tool>.lx{
      width:40px;
      height:35px;
      margin-right:25px;
      margin-left:10px;

    }
    .qianzheng>.Tool>.dianpu{
      width:25px;
      height:35px;

    }
    .qianzheng>.Tool>.Purchase{
        text-align:center;
        padding:15px 0px;
        margin:-5px -5px;
       width:65%;
       float:right;
        background:orange;
        color:white;
        font-weight:bold;
        font-size:20px;
    }
</style>