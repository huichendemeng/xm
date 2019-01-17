const express=require('express');
//引入mysql连接池
const pool=require('../pool.js');
//创建路由器
var router=express.Router();

//在路由器下添加路由


//1、登录
router.post('/getUser',function(req,res) {
    var obj = req.body;
    var $uname=obj.uname;
    var $upwd=obj.upwd;
    var sql = 'select * from dgwj_user where uname=? and upwd=?';
    console.log($uname)
    console.log($upwd)
    pool.query(sql,[$uname,$upwd],(err, result)=>{
        if (err) throw err;
        if(result.length>0){
            res.send("1");
        }else{
            res.send("0");
        }
    });
});

//查询是否有此用户
router.post('/searchUser',function(req,res) {
    //浏览器发送的数据
    var obj = req.body;
    var $uname=obj.uname;
    var sql = 'select * from dgwj_user where uname=?';
    pool.query(sql,[$uname],(err,result)=>{
        if (err) throw err;
        if(result.length > 0)
            res.send("1");
        else
            res.send("0");
    });
});
//查询是否有此手机号
router.post('/searchPhone',function(req,res) {
    //浏览器发送的数据
    var obj = req.body;
    var $phone=obj.phone;
    var sql = 'select * from dgwj_user where phone=?';
    pool.query(sql,[$phone],(err, result)=>{
        if (err) throw err;
        if(result.length > 0)
            res.send("1");
        else
            res.send("0");
    });
});
//查询是否有此邮箱
router.post('/searchEmail',function(req,res) {
    //浏览器发送的数据
    var obj = req.body;
    var $email=obj.email;
    var sql = 'select * from dgwj_user where email=? ';
    pool.query(sql,[$email],(err, result)=>{
        if (err) throw err;
        if(result.length > 0)
            res.send("1");
        else
            res.send("0");
    });
});

//3、注册
router.post('/register',function(req,res) {
    var obj = req.body;
    var $uname=obj.uname;
    if($uname == ""){
        res.send("用户名不能为空");
        return;
    }
    var $upwd=obj.upwd;
    var $phone=obj.phone;
    var $email=obj.email;
    var $userName=obj.userName;
    var $sex = obj.sex;
    var $remark=obj.remark;
    var sql = 'insert into dgwj_user values(null,?,?,?,?,?,?,?)';
    pool.query(sql,[$uname,$upwd,$phone,$email,$userName,$sex,$remark],(err, result)=>{
        if (err) throw err;
        console.log(result.affectedRows);
        if(result.affectedRows>0){
            res.send("1");
        }else{
            res.send("0");
        }
});
});




//路由器导出
module.exports=router;