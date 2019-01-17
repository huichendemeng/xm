<template>
  <div class="app-placelist">
    <div v-for="item in placelist" class="dd">
        <div class="list">
            <img :src="item.pic" alt="">
            <div class="intrb">{{item.sale}}</div>
        </div>
        <div class="Price">
            <p class="destail">{{item.place}}</p>
            <span class="C">{{item.cprice}}</span>
            <span class="F" v-show="item.fprice">{{item.fprice}}</span>
        </div>  
    </div>
    <mt-button type="primary" size="large" @click="getMore">加载更多 </mt-button>
    <div class="AllPlace" v-show="index">
        <div class="choose">
          <span>目的地筛选</span>
          <span class="x" @click="choose">关闭</span>
        </div>
        <div class="float">
           <div class="AllPlace_left">
               <ul>
                   <li>欧洲</li>
                   <li>北美洲</li>
               </ul>
           </div>
           <div class="AllPlace_right">
              <mt-button  size="small">美国</mt-button>
              <mt-button  size="small">法国</mt-button>
              <mt-button  size="small">瑞典</mt-button>
              <mt-button  size="small">意大利</mt-button>
              <mt-button  size="small">德国</mt-button>
              <mt-button  size="small">西班牙</mt-button>
              <mt-button  size="small">葡萄牙</mt-button>
              <mt-button  size="small">瑞士</mt-button>
              <mt-button  size="small">荷兰</mt-button>
              <mt-button  size="small">挪威</mt-button>
              <mt-button  size="small">丹麦</mt-button>
              <mt-button  size="small">奥地利</mt-button>
              <mt-button  size="small">比利时</mt-button>
              <mt-button  size="small">摩纳哥</mt-button>
              <mt-button  size="small">捷克</mt-button>
              <mt-button  size="small">卢森堡</mt-button>
              <mt-button  size="small">斯洛伐克</mt-button>
              <mt-button  size="small">匈牙利</mt-button>
              <mt-button  size="small">梵蒂冈</mt-button>
              <mt-button  size="small">安道尔</mt-button>
           </div>
        </div>
    </div>
    <div class="choose c1" @click="choose">选择目的地国家</div>
  </div>
</template>
<script>
  export default {
     data(){
       return {
         placelist:[],
         pageIndex:0,     //属性显示当前页数
         pageSize:5,       //页大小
         hasMore:true,     //是否存在下一页数据
         pageCount:2,//总页数 
         index:false
       }
     },
     methods:{
       getMore(){
         this.pageIndex++;
         this.hasMore = this.pageIndex <= this.pageCount;
         if(!this.hasMore){return}
        var url = "http://127.0.0.1:3000/placelist";
        url+="?pno="+this.pageIndex+"&pageSize="+this.pageSize;
        this.$http.get(url).then(result=>{
        //concat 接拼数组 将二个数组拼接新数组
            var rows = this.placelist.concat(result.body.data);
            this.placelist = rows;
        //保存总页数,动态赋值pageCount
            this.pageCount = result.body.pageCount
        })
       },
       choose(){
           if(this.index==false){
                this.index=true;
           }else{
               this.index=false
           }    
       }
     },
     created(){
       this.getMore();
     },
     mounted() {
      
     }
   }
</script>
<style>
.app-placelist img{
    width:32%;
}
.app-placelist>.dd>.list{
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
.intrb{
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
.app-placelist>.dd>.Price>.destail{
    font-size:14px;
    color:#444444;    
    margin-bottom:0;
    display:-webkit-box !important;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    overflow:hidden;
}
.app-placelist>.dd>.Price>.C{
    display:inline-block;
    width:78px;
    height:20px;
    background:#FF5454;
    text-align:center;
    line-height:20px;
    padding-top:1px;
}
.app-placelist>.dd>.Price>.F{
    display:inline-block;
    width:78px;
    height:20px;
    border:1px solid #FF5454;
     text-align:center;
    line-height:20px;
}
.app-placelist{
    margin-bottom:60px;
    margin-top:85px;
}
.app-placelist>.AllPlace{
 position:fixed;
 bottom:11%;
}
.app-placelist .choose{
    width:100%;
    height:40px;
    background:#27292E;
    text-align:center;
    line-height:40px;
    font-size:14px;
    color:white;
    
}
.c1{
  position:fixed;
 bottom:7%;
}
.x{
    float:right;
    padding-right:10px;
}
.app-placelist>.AllPlace{
    background:white;
}
.app-placelist>.AllPlace>.float>.AllPlace_left>ul{
    background:white;
    list-style:none;
   margin-left:0px;
    font-size:14px;
}
.app-placelist>.AllPlace>.float>.AllPlace_left>ul>li{
    margin-bottom:2px;
    font-size:16px;
}
.app-placelist>.AllPlace>.float>.AllPlace_right{
  margin-left:113px;
  margin-top:-70px;
  height:195px;
  overflow:auto;
  background:white;
  text-align:center;
}
.app-placelist>.mint-button{
  
}
.app-placelist>.AllPlace>.float>.AllPlace_right>.mint-button{
    margin:5px 5px;
    width:70px;
    height:35px;
}
.hide{
    display:none;
}
</style>