const express=require("express");
var router=express.Router();
var pool=require("../pool.js");
/*登陆*/
router.post("/denglu",(req,res)=>{
    var xname=req.body.xname;
    var xpwd=req.body.xpwd;
    if(xname=='' || xpwd==''){
        res.send("用户名或密码不能为空");
        return;
    }
    var sql='SELECT * FROM xia_user WHERE xname=? and xpwd=?';	
    pool.query(sql,[xname,xpwd],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send("登录成功");
        }else{
            res.send("用户名或密码错误");
        }
    });
});
/*查询用户名是否可用*/
router.get('/chaname',(req,res)=>{
    var xname=req.query.xname;
    if(xname==''){
        res.send("2");
        return;
    }
    var sql="SELECT * FROM xia_user WHERE xname=?";
    pool.query(sql,[xname],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send('1');
        }else{
            res.send('0');
        }
    });
});

//7.注册
router.post('/zhuce',(req,res)=>{
    var xname=req.body.xname;
    if(xname==''){
        res.send("用户名称不存在");
        return;
    }
    var xpwd=req.body.xpwd;
    if(xpwd==''){
        res.send("用户密码不存在");
        return;
    }
    var sql="INSERT INTO xia_user VALUES (null,?,?,null,null,null)";
    pool.query(sql,[xname,xpwd],(err,result)=>{
        if(err) throw err;
        res.send("注册成功！");

    });
});
module.exports=router;