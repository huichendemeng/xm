<template>
  <div class="qzAll">
      <div v-for="item in qzalllist" class="dd" @click="getDetails(item.id)" :key="item.id">
        <div class="list">
            <img :src="item.pic" alt="">
            <div class="intrb">{{item.sale}}</div>
        </div>
        <div class="Price">
            <p class="destail">{{item.title}}</p>
            <span class="C">{{item.price}}</span>
        </div>  
    </div>
  </div>
</template>
<script>
    export default{
        data(){
            return{
                qzalllist:[],
                id:[]
            }
        },
        methods:{
            getqzAll(){
                var url="http://127.0.0.1:3000/qzAll";
                this.$http.get(url).then(result=>{
                    this.qzalllist=result.body;
                })
            },
            getDetails(id){
                var url="http://127.0.0.1:3000/qzAll"
                this.$http.get(url).then(result=>{
                    this.id=result.body.id
                    console.log(id);
                    this.$router.push("/home/qianzheng/"+id)
                })   
            }
        },
        created() {
            this.getqzAll();
        },
    }
</script>
<style>
.qzAll{
    margin-top:85px;
    width:100%;
}
.qzAll .list{
    width:100%;
}
 .qzAll img{
    width:120px;
    height:90px;
}
.qzAll .dd{
    position:relative;
}
.qzAll .Price{
    position:absolute;
    top:10px;
    left:125px;
}
.qzAll .intrb{
  width:32%;
  height:25px;
  position:absolute;
  top:-45px;
  background:linear-gradient(to top,black,gray,transparent);
  color:white;
  font-size:14px;
  margin-top:110px;
  padding:0px;
  text-align:center;
  line-height:25px;
}
.qzAll>.dd>.Price>.destail{
    font-size:14px;
    color:#444444;    
    margin-bottom:0;
}
.qzAll>.dd>.Price>.C{
    display:inline-block;
    width:78px;
    height:20px;
    background:#FF5454;
    text-align:center;
    line-height:20px;
    padding-top:1px;
}
.qzAll>.dd>.Price>.F{
    display:inline-block;
    width:78px;
    height:20px;
    border:1px solid #FF5454;
     text-align:center;
    line-height:20px;
}
</style>