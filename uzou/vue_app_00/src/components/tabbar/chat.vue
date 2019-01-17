<template>
<div class="chat">
   <img src="../../img/xy.jpg" alt="">
   <p>小悠</p>
   <span class="dh"></span>
   <p>请问有什么可以帮您的？</p>
   <p class="time">{{date}}</p>
   <div class="srk">
     <span class="zrg"></span>
     <p class="zrg1">转人工</p>
     <input type="text" placeholder="请简短描述您的问题">
     <span class="jh"></span>
   </div>
</div>
</template>
<script>
    export default{
        data(){
            return{
                date:"",
               
            }
        },
        methods:{
            getTime(){
                var time=new Date();
                this.date=time.toLocaleString()
            } 
        },
        created(){
            this.getTime()
        }
    }
</script>
<style>
    .chat{
       margin-top:100px;    
    }
    .chat .srk{
        width:100%;
        height:20px;
        display:flex;
        position:fixed;
        bottom:12%;
    }
    .chat .zrg1{
       position:absolute;
       top:23px;
       left:5px;
    }
    .time{
        text-align:center;
    }
    .chat .jh{
       display:block;
        width:45px;
        height:32px;
        background:url(../../img/icon.png);
        background-position:44% -1%;  
        background-size:345px;  
         margin-top:10px;
    }
    .chat .srk .zrg{
        display:block;
        width:45px;
        height:32px;
        background:url(../../img/icon.png);
        background-position:25% 18%;  
        background-size:345px;  
       
    }
    .chat .srk input{
        width:75%;
        margin:5px 10px;
        
    }
</style>