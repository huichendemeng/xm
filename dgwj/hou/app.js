const express=require("express");
const pool=require("./pool");
const cors=require("cors")
const bodyParser=require("body-parser")
const sp=require("./js/shangpin")
const user=require("./js/user")
const pinpai=require("./js/pinpai")
var app=express()
app.listen(3000)

app.use(express.static("./public/img/sp"))
app.use(express.static("./../qian"))
app.use(express.static("./../qian/html"))
app.use(express.static("./../qian/css"))
app.use(express.static("./../qian/js"))
app.use(express.static("./../qian/images"))
app.use(express.static("./../qian/img"))
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(cors({
    origin:"http://127.0.0.1:6666",
    credentials:true
}))
app.get("/index",(req,res)=>{
    var s="6666"
    res.send(s)
})
app.use("/sp",sp);
app.use("/user",user);
app.use("/pinpai",pinpai);