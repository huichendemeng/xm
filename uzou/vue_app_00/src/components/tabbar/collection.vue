<template>
<div class="collection">
   <span @click="collection1">产品收藏<i v-show="i1"></i></span>
   <span @click="collection2">店铺收藏<i v-show="i2"></i></span>
   <div class="collec">
     <div  class="dd" v-for="item in thing" :key="item.id">
        <div class="list">
            <img :src="item.pic" alt="">
        </div>
        <div class="Price">
            <p class="destail">{{item.place}}</p>
            <span class="C">{{item.cprice}}</span>
        </div>  
     </div>
   </div>
</div>
</template>
<script>
  export default{
      data(){
          return{
              i1:true,
              i2:false,
             //id:this.$route.query.id,
              thing:[],
              id:localStorage.getItem("id"),
              uid:sessionStorage.getItem("uid")
            }
      },
      methods:{
          collection1(){
                this.i1=true;
                this.i2=false
          },
          collection2(){
                this.i1=false;
                this.i2=true
          },
          coll(){
              console.log(this.id,this.uid)
               var url="http://127.0.0.1:3000/finishcollection?uid="+this.uid;
               this.$http.get(url).then(result=>{
                  this.thing=result.body;
              })
          }
      },
      created(){
          this.coll();
      }
  }
</script>
<style>
    .collection{
       margin-top:85px;
    }
    .collection>span{
      /* font-size:15px;
        text-align:center;    */ 
        display:inline-block;
         width:50%;
        text-align:center;
         position:relative;
        
    }
    .collection .collec{
        margin-top:10px;
    }
    .collection i{
        display:inline-block;
        width:100%;
        height:4px;
        background:#42D2A9;
        position:absolute;
        top:110%;
        left:0%;
        
    }
    .collection .collec{
        margin-top:10px;
        
    }
   .collection img{
    width:32%;
}
.collection .dd .list{
    position:relative;
    margin-top:10px;
    background:white;
}
.collection collection .dd{
    position:relative;
    
}
.collection .Price{
    position:absolute;
    top:10%;
    left:35%;
}
collection .intrb{
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
.collection .dd>.Price>.destail{
    font-size:14px;
    color:#444444;    
    margin-bottom:0;
    display:-webkit-box !important;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    overflow:hidden;
}
.collection .dd>.Price>.C{
    display:inline-block;
    width:78px;
    height:20px;
    border:1px solid #FF5454;
    text-align:center;
    line-height:20px;
    padding-top:1px;
    margin-top:10px;
}
</style>