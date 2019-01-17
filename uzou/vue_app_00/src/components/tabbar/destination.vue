<template>
  <div class="destination">
     <div class="Left">
        <ul>
            <li @click="text($event)"><span class="SX">|</span>热门</li>
            <li @click="text($event)"><span class="SX">|</span>北美洲</li>
            <li @click="text($event)"><span class="SX">|</span>欧洲</li>
            <li @click="text($event)"><span class="SX">|</span>国内</li>
        </ul>
     </div>
     <div class="Right">
        <span class="sx">|</span>
        <b>{{this.dom.slice(1)}}</b>
        <div class="List" v-for="item in List" :key="item.id" @click="getAmerica(item.id)">
           <img :src="item.pic" alt="">
           <div class="Intr">{{item.place}}</div>
        </div>
     </div>
  </div>
</template>
<script>
export default{
    data(){
        return{
            List:[],
            dom:" 目的地",
            id:[]
        }
    },
    methods:{
        getList(){
            var url="http://localhost:3000/destination"
            this.$http.get(url,).then(result=>{
            this.List=result.body;
           })
        },
        text(e){
            var dom=e.target.innerText;
            this.dom=dom;
            var url="http://localhost:3000/bm";
            this.$http.post(url,{dom:this.dom}).then(result=>{
                this.List=result.body;   
            });
        },
        getAmerica(id){
             var url="http://localhost:3000/bm";
            this.$http.post(url,{dom:this.dom}).then(result=>{
                this.id=result.body.id; 
                console.log(id);
                if(id==1){
                   this.$router.push("/home/America")
                }
            });
        }   
    },
    created() {
       this.getList()
    },
}
</script>
<style>
.destination{
    margin-top:85px;
    background:white;
}
.destination>.Left{
    float:left;
    width:25%;
    height:100%;
    padding:0;
}
.destination>.Left>ul>li{
    margin-top:10px;
    width:100%;
    text-align:center;
    padding:10px 0;
    color:#505050;
}
.destination>.Left>ul>li .SX{
    color:#fff;
    font-size:44px;
    margin-top:-4px;
    float:left;
    font-weight:bold;
    margin-left:-4%;
}

.destination>.Left>ul>li:hover .SX{
   color:#42D2A8;
}
.destination>.Left>ul{
    list-style:none;
    padding:0;
    margin:0;
}
.destination:after{
    content:'';
    display:block;
    clear:both;
}
.destination>.Right{
    width:65%;
    float:right;
    margin:0px 15px;
}
.destination>.Right>.sx{
    color:#F5C746;
    padding-right:5px;
    font-size:20px;
    font-weight:bold;
}
.destination>.Right>.List{
     border:0px solid;
    box-shadow:1px -1px 1px  gray;
     position:relative;
     width:100%;
     margin-top:10px;
}
.destination>.Right>.List img{
    width:100%;
}
.destination>.Right>.List>.Intr{
  width:100%;
  height:30px;
  position:absolute;
  bottom:0%;
  background:linear-gradient(to top,black,gray,transparent);
  color:white;
  font-size:16px;
  padding:0px;
  line-height:30px;
  text-align:left;
}
</style>