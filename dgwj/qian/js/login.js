
$("#uname").focus(function () {
    $("#h_name").removeClass("visi_hidden");
});

$("#upwd").focus(function () {
    $("#h_pwd").removeClass("visi_hidden");
});
function getUname() {
    //获取输入用户名称
    var uname=$("#uname").val();
    var upwd=$("#upwd").val();
    console.log(uname,upwd);
    if(uname == ""){
        $("#h_name").children().find("span").attr("style","color:red;").html("请输入用户名！");
        return;
    }
    if(upwd == ""){
        $("#h_pwd").children().find("span").attr("style","color:red;").html("请输入密码！");
        return;
    }
   $.ajax({
       url:"http://127.0.0.1:3000/user/getUser",
       type:"post",
       data:"uname="+uname+"&upwd="+upwd,
       dataType:"json",
       success:function(res){
        if( res==1){
            alert("登录成功，点击确定后3s回到首页")
            setTimeout(() => {
                window.location = "http://127.0.0.1:3000/index.html";
            },3000);
        }else{
            alert("登录失败,请查看用户名或密码是否正确")
        }
       },
   })
}
