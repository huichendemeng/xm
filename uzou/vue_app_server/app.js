const express=require("express");
const pool=require("./pool");
const bodyParser=require('body-parser');
const session = require('express-session');
var app=express();
const cors=require("cors");
app.use(cors({
  origin:["http://127.0.0.1:3001","http://localhost:3001"],
  credentials:true
}))
app.use(bodyParser.urlencoded({
	extended:false
}));
app.use(express.static(__dirname+"/public"));
app.listen(3000,(req,res)=>{
  console.log("ok");
});
app.get('/imageList',(req,res)=>{
  var obj=[
    {id:1,img_url:"http://127.0.0.1:3000/img/lb1.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/img/lb2.png"},
    {id:3,img_url:"http://127.0.0.1:3000/img/lb3.jpg"}
  ];
  res.send(obj);
  res.end();
})

app.get('/li',(req,res)=>{
  /*var shop=req.query.shop;
  var  vpic=req.query.vpic;
  var intr=req.query.intr;
  var pic=req.query.pic;*/
  var sql="select shop,vpic,intr,pic from shop";
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err)
   res.send(result)
   res.end();
  })
})
app.get('/recommend',(req,res)=>{
  var sql="select place,cprice,fprice,pic from recommend";
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
    res.send(result);
    res.end();
  })
})
app.get('/placelist',(req,res)=>{
  var pno=req.query.pno;//参数，当前页码
  var pageSize=req.query.pageSize;
  var sql="select count(id) as c from placelist";
  var obj={};//保存发送给客户端的数据
  var progress=0;
  pool.query(sql,(err,result)=>{
    if(err) console.log(err);
    var c = Math.ceil(result[0].c/pageSize);//所有查询返回的是数组
    obj.pageCount = c;
    progress+=50;
    if(progress==100){//两条sql语句都执行完成
      res.send(obj);
    }
  })
  //查找当前页内容
  var sql="select id,sale,place,cprice,fprice,pic from placelist limit ?,?";
  var offset=parseInt((pno-1)*pageSize);//计算分页偏移量
  pageSize = parseInt(pageSize)
  pool.query(sql,[offset,pageSize],(err,result)=>{
    if(err) console.log(err);
    obj.data=result;
    progress+=50;
    if(progress==100){
      res.send(obj);
    }   
 })
})
app.get('/destination',(req,res)=>{
  var sql="select place,pic from mudidi";
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
    res.send(result);
    res.end();
  })
})
app.get('/qzAll',(req,res)=>{
  var sql="select id,title,pic,sale,price from qianzheng";
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err)
    res.send(result);
    res.end()
  })
})
app.post('/signin',(req,res)=>{
  var uname=req.body.uname;
  var upwd=req.body.upwd;
  var sql ="select count(uid) as c from user where uname=?and upwd=?";
   pool.query(sql,[uname,upwd],(err,result)=>{
    if(err) console.log(err);
    if(result[0].c==0){
      res.send({code:-1,msg:"用户名或密码错误"});
      res.end();
    }
    else{res.send({code:1,msg:"登录成功"})}
   })
})
app.post('/xianshi',(req,res)=>{
  var uname=req.body.uname;
  var sql="select phone,gender,realname,email from user where uname=?";
  pool.query(sql,[uname],(err,result)=>{
    if(err) console.log(err);
    res.send(result);
  })
})
app.post('/update',(req,res)=>{
    var uname=req.body.uname;
    var phone=req.body.phone;
    var email=req.body.email;
    var upwd=req.body.upwd;
    var sql="update user set phone=?,email=? where uname=?";
    pool.query(sql,[phone,email,uname],(err,result)=>{
      if(err) console.log(err);
      res.send(result)
    })
})
app.post('/upwd',(req,res)=>{
  var uname=req.body.uname;
  var sql="select uid,upwd from user where uname=?";
  pool.query(sql,[uname],(err,result)=>{
    if(err) console.log(err);
    res.send(result)
  })  
})
app.post('/update_upwd',(req,res)=>{
  var upwd=req.body.upwd;
  var uname=req.body.uname;
  var sql="update user set upwd=? where uname=?";
  pool.query(sql,[upwd,uname],(err,result)=>{
    if(err) console.log(err);
    res.send(result)
  })
})
app.post('/reg',(req,res)=>{
   var uname=req.body.uname;
   var upwd=req.body.p;
   var phone=req.body.phone;
   console.log(uname,upwd,phone)
   var sql="insert into user (uname,upwd,phone) values (?,?,?)";
   pool.query(sql,[uname,upwd,phone],(err,result)=>{
     if(err) console.log(err)
     if(result.affectedRows>0){ 
       res.send({code:1,msg:"注册成功"});
     }else{res.send({code:0}); }
   })
})
app.post('/bm',(req,res)=>{
  var dom=req.body.dom.slice(1); 
  if(dom=="热门"){dom="欧洲"}
  if(dom=="国内"){dom="亚洲"}
  var sql="select id,place,pic from mudidi where zhou=?";
  pool.query(sql,[dom],(err,result)=>{
    if(err) console.log(err);
    res.send(result)
    res.end();
  })
})
app.post('/search',(req,res)=>{
   var text=req.body.text;
   var sql=`select id,pic,place,cprice,fprice,pic from recommend where  place like '%${text}%'`;
   pool.query(sql,[],(err,result)=>{
      if(err) console.log(err);
      res.send(result)
   })
})
app.get('/America',(req,res)=>{
  var sql="select id, place,cprice,pic,sale from America";
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
    res.send(result)
  })
})
app.get('/shopping',(req,res)=>{
  var sql="select place,cprice, pic,sale from shopping";
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
    res.send(result)
  })
})
app.post('/getId',(req,res)=>{
  var uname=req.body.uname;
  var sql=`select phone, IDcardnum from user where uname='${uname}'`;
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err)
    res.send(result);
  })
})
app.post('/shoucang',(req,res)=>{
  var id=req.body.id;
  var uid=req.body.uid;
  var cprice=req.body.cprice;
  var place=req.body.place;
  var pic=req.body.pic;
  var sql="insert into collection (id,uid,cprice,place,pic) values (?,?,?,?,?)";
  pool.query(sql,[id,uid,cprice,place,pic],(err,result)=>{
     if(err) console.log(err)
     res.send(result) 
  })
})
app.post('/iscollection',(req,res)=>{
   var id=req.body.id;
   var uid=req.body.uid;
   var sql="select id from collection where uid=? and id=?";
   pool.query(sql,[uid,id],(err,result)=>{
      if(err) console.log(err)
      if(result.length==0){res.send({code:1,msg:"收藏成功"})}
      else{
        res.send({code:-1,msg:"该地区已收藏"})
        res.end();
      }
	    console.log(result)
   })
})
app.get('/finishcollection',(req,res)=>{
  var uid=req.query.uid;
  var sql="select id,pic,cprice,place from collection where uid=?";
  pool.query(sql,[uid],(err,result)=>{
    if(err) console.log(err)
    res.send(result)
  })
})



