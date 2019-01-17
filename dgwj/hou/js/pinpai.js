const express=require('express');
//引入mysql连接池
const pool=require('../pool.js');
//创建路由器
var router=express.Router();
router.get("/pinpai",(req,res)=>{
    var sql="select * from dgwj_pinpai"
    pool.query(sql,[],(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})
router.get("/spy",(req,res)=>{
    var spid=req.query.spid
    var sql="select * from dgwj_spy where sp_id=?"
    pool.query(sql,[spid],(err,result)=>{
        if(err) throw err
        res.send(result);
    })
})

module.exports=router;