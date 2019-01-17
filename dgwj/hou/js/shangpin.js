const express=require("express")
const pool=require("../pool.js")
var router=express.Router();

router.get("/tehui",(req,res)=>{
    var sql="select * from dgwj_tehui"
	pool.query(sql,[],(err,result)=>{
		if(err)throw err
		res.send(result)
	})
})
router.get("/spy",(req,res)=>{
	var spid=req.query.spid;
   var sql="select * from dgwj_spy where spid=?"
   pool.query(sql,[spid],(err,result)=>{
		if(err)throw err
		res.send(result)
   })
})
module.exports=router