<template>
  <div class="All">
    <p>出行必备</p>
    <hr>
    <mt-button  size="small" @click="qzall">签证</mt-button>
    <mt-button  size="small">全球WIFI</mt-button>
    <p>出行方式</p>
    <hr>
     <mt-button  size="small">当地拼团</mt-button>
    <mt-button  size="small">私家团</mt-button>
    <p>户外运动</p>
    <hr>
    <mt-button  size="small">徒步</mt-button>
    <mt-button  size="small">高尔夫</mt-button>
    <mt-button  size="small">潜水</mt-button>
    <mt-button  size="small">游艇/帆船</mt-button>
    <mt-button  size="small">骑行</mt-button>
    <mt-button  size="small">垂钓</mt-button>
    <mt-button  size="small">高空项目</mt-button>
    <mt-button  size="small">冰雪项目</mt-button>
    <p>休闲享乐</p>
    <hr>
    <mt-button  size="small">亲子</mt-button>
    <mt-button  size="small">情侣蜜月</mt-button>
    <mt-button  size="small">自然风光</mt-button>
    <mt-button  size="small">城市观光</mt-button>
    <mt-button  size="small">历史遗迹</mt-button>
    <mt-button  size="small">主题乐园</mt-button>
    <mt-button  size="small">温泉/SPA</mt-button>
    <mt-button  size="small">购物</mt-button>
    <mt-button  size="small">摄影</mt-button>
    <mt-button  size="small">酒庄</mt-button>
    <mt-button  size="small">门票</mt-button>
    <p>活动项目</p>
    <hr>
    <mt-button  size="small">赛事</mt-button>
    <mt-button  size="small">演出</mt-button>
    <mt-button  size="small">展览</mt-button>
    <mt-button  size="small">颁奖典礼</mt-button>
    <mt-button  size="small">节日庆典</mt-button>
    <mt-button  size="small">课程</mt-button>
    <mt-button  size="small">会展</mt-button>
    <mt-button  size="small">博物馆</mt-button>
    <p>文化体验</p>
    <hr>
    <mt-button  size="small">传统文化</mt-button>
    <mt-button  size="small">现代文化</mt-button>
    <mt-button  size="small">宗教文化</mt-button>
     <p>住宿</p>
    <hr>
    <mt-button  size="small">住宿</mt-button>
  </div>
</template>
<script>
    export default{
        data(){
            return{}
        },
        methods:{
            qzall(){
                this.$router.push("/home/qzall")
            }
        }
    }
</script>
<style>
    .All{
        margin-top:85px;
        background:white;
    }
    .All>.mint-button{
        width:75px;
        height:35px;
        margin:5px 5px;
        background:white;
    }
     .All>p{
         color:#505050;
         font-weight:bold;
         padding:0;
         margin:0;
         margin-top:15px;
     }
     .All>hr{
       color:#ccc;
    }
</style>