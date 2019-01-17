﻿const express=require('express');
const bodyParser=require('body-parser');
const user=require('./routes/user.js');
var app=express();
app.listen(3000,()=>{
	console.log('服务器创建成功');
});
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({
	extended:false
}));
app.use('/user',user);
