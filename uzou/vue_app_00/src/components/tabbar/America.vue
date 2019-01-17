<template>
  <div class="America">
    <div v-for="item in America" class="dd" @click="Amer(item.id)" :key="item.id">
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
  export default {
     data(){
       return {
         America:[],
         id:[]
       }
     },
     methods:{
         america(){
             var url="http://127.0.0.1:3000/America";
             this.$http.get(url).then(result=>{
                 this.America=result.body   
             })
         },
         Amer(id){
             var url="http://127.0.0.1:3000/America";
             this.$http.get(url).then(result=>{
                 this.id=result.body.id;
                 console.log(id)
                 this.$router.push("/home/Amer/"+id)
             })
         }
        
     },
     created(){
       this.america()
     },
     mounted() {
      
     }
   }
</script>
<style>
.America img{
    width:32%;
}
.America>.dd>.list{
    position:relative;
    margin:5px 5px;
    background:white;
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
.America>.dd>.Price>.destail{
    font-size:14px;
    color:#444444;    
    margin-bottom:0;
    display:-webkit-box !important;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    overflow:hidden;
}
.America>.dd>.Price>.C{
    display:inline-block;
    width:78px;
    height:20px;
    background:#FF5454;
    text-align:center;
    line-height:20px;
    padding-top:1px;
    margin-top:5%;
}
.America{
    margin-bottom:60px;
    margin-top:85px;
}
.hide{
    display:none;
}
</style>