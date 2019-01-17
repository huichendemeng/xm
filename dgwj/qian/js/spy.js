$(function(){
    var str=location.search.slice(1)
    var div=$(".img_ll")
    var divimg=$(".img_ll img")

    $.ajax({
        url:"/header.html",
        type:"get",
        success: function(res) {
            $(res).replaceAll("#header")
        }
    })
    $.ajax({
        url:"/footer.html",
        type:"get",
        success: function(res) {
            $(res).replaceAll("#footer")
        }
    })
    $(".jrgwc").on("click",function(){
        alert("加入成功")
    })
    $(".wxfx").on("click",function(){
        alert("分享成功")
    })
    $.ajax({
        
        url:"http://127.0.0.1:3000/pinpai/spy",
        data:str,
        type:"get",
        datatype:"json",
        success:function(res){
            $(".spy_title span").html(res[0].sp_title);
            $(".spyssz_money span").html(res[0].sp_title);
            $(".guanyu a").html(res[0].sp_titlegy);
            $(".sp_shui div:first-child").html(res[0].sp_titlejc)
            $(".sp_shui div:last-child").html("增值税 "+res[0].sp_shuizhi+" €")
            $(".sp_jg s").html(res[0].sp_yuanjia+" €")
            $(".sp_jg div:nth-child(2)").html(res[0].sp_xianjia+" €")
            $(".you_gm div:nth-child(1)").html(res[0].sp_xianjia+" €")
            $(".spjj_title1 h2").html(res[0].sp_jjtitle)
            var ul1=$(".jjxq_nr ul")
            var ast1=res[0].sp_jjnei.split(",")
            for( var key in ast1){
                var li=document.createElement("li")
                li.innerHTML=ast1[key]
                ul1.append(li)
            }
            var ul2=$(".jjxq_wr ul")
            var ast2=res[0].sp_jjwai.split(",")
            for( var key in ast2){
                var li=document.createElement("li")
                li.innerHTML=ast2[key]
                ul2.append(li)
            }
            $(".jjxq_chima").html(res[0].sp_cmsm)
            $(".jjxq_zl").html(res[0].sp_jz)
            $(".jjxq_ena").html("EAN: "+res[0].sp_ena)
            var imgarr=res[0].sp_spimg.split(",")
            for(var key in imgarr){
                var img=document.createElement("img")
                img.setAttribute("src",imgarr[key])
                div.append(img)
            }
            var imgs=document.querySelectorAll(".img_ll img");
            
            var spimg=document.querySelector(".sppic");
            var jian=document.querySelector(".sppic_jian");
            spimg.setAttribute("src",imgs[0].src)
            jian.setAttribute("src",imgs[0].src)
            for(var img of imgs){
                img.onclick=function(){
                  var img=this;
                  spimg.setAttribute("src",img.src)
                  
                }
              }
            
        }
        
    })
    
})