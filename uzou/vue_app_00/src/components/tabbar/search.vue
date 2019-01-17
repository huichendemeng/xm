<template>
<div class="explore">
    <div class="dd" v-for="item in placelist" :key="item.id">
        <div class="list">
            <img :src="item.pic" alt="">
            <div class="intrb">至美旅行</div>
        </div>
        <div class="Price">
            <p class="destail">{{item.place}}</p>
            <span class="C">{{item.cprice}}</span>
            <span class="F" v-show="item.fprice">{{item.fprice}}</span>
        </div>  
    </div>
    <h4 v-show="gengduo">没有更多数据</h4>
</div>
</template>
<script>
export default{
    data(){
        return{ 
           placelist:"",
           text:this.$route.query.text,
           isnull:true,
           gengduo:false
        }
    },
    methods:{
         get_content(){
            var url="http://localhost:3000/search";
            this.$http.post(url,{text:this.text}).then(result=>{
                console.log(result.body)
                if(result.body==""){this.gengduo=true}
                else{
                    this.placelist=result.body
                }
            })       
         },    
    },
    created(){
         this.get_content();
      
    }
}
</script>
<style>
.explore{
    margin-top:85px;
}
.explore img{
    width:32%;
}
.explore>.dd>.list{
    position:relative;
}
.explore .dd{
    position:relative;
}
.explore .Price{
    position:absolute;
    top:15%;
    left:35%;
}
.explore .intrb{
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
.explore>.dd>.Price>.destail{
    font-size:14px;
    color:#444444;    
    margin-bottom:0;
}
.explore>.dd>.Price>.C{
    display:inline-block;
    width:78px;
    height:20px;
    background:#FF5454;
    text-align:center;
    line-height:20px;
    padding-top:1px;
}
.explore>.dd>.Price>.F{
    display:inline-block;
    width:78px;
    height:20px;
    border:1px solid #FF5454;
     text-align:center;
    line-height:20px;
    font-size:14px;
}
</style>