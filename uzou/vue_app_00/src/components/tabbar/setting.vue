<template>
 <div class="setting">
    <ul class="mui-table-view mui-table-view-chevron">
        <li class="mui-table-view-cell">
            <router-link to="/home/setting/update" class="mui-navigate-right">
            个人资料修改
            </router-link>
        </li>
        <li class="mui-table-view-cell">
        <router-link to="/home/setting/update_upwd" class="mui-navigate-right">
            修改密码
        </router-link>
        </li>
        <li class="mui-table-view-cell">
            <a href="" class="mui-navigate-right">关于我们</a>
        </li>      
    </ul>
    <div class="quit" @click="quit">退出登录</div>
 </div>
</template>
<script>
    export default{
        data(){
            return{}
        },
        methods:{
            quit(){
                 sessionStorage.clear();
                 this.$router.push("/home")
                 location.reload();
            }
        }
    }
</script>
<style>
    .setting{
        margin-top:85px;
        margin-bottom:60px;
    }
    .setting>.quit{
        background:#42D2A9;
        width:100%;
        color:white;
        font-weight:bold;
        text-align:center;
        padding:10px 5px;
         position:fixed;
        bottom:7%;
    }
    .setting li{
        font-size:14px;
        color:#505050;
    }
    
</style>