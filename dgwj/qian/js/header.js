$(function(){
    $("<link rel='stylesheet' href='../css/header.css'>").appendTo("head");
    $.ajax({
        url:"/header.html",
        type:"get",
        success: function(res) {
            $(res).replaceAll("#header")
        }
    })

})
window.onload=function(){
    var $dianji=$(".yi5");
    var $yx=$(".yi52");
    var $a=0;
    $dianji.on("click",function(){     
        var dj=$(this);
        if($a!=1){
            dj.css("background-color","#bc0e5e")
            $yx.css("display","block")
            $a=1;
        }else{
            dj.css("background-color","")
            $yx.css("display","none")
            $a=0;  
        }     
    })
    var $san=$("#san");
    var $san2=$("#san2");
    $san.on("mouseenter","a",function(e){  
       var a=$(e.target)     //获取目标
       var mbid=a[0].id.slice(1) //获取目标ID值
       var $san2div=$("#san2>div")
       
       $san2.css("display","block")
    })
    $san.mouseleave(function(){
        $san2.css("display","none")
    })
    var $sousuo=$("#nav-header .er .er21 img")
    var $shuru=$("#nav-header .er .er21 input")
    var $img=$("#nav-header .er>img")
    var $a=$("#nav-header .er .er2>a")
    var $er=$("#nav-header .er")
    var a=1
    $sousuo.on("click",function(){
        var ss=$(this);
        if(a==1){    
            $shuru.css("display","inline-block")
            $img.css("display","none")
            $a  .css("display","none")
            a=0;
            $er.css("height","52.5px")
        }else{
            $shuru.css("display","none")
            $img.css("display","inline")
            $a.css("display","inline")
            a=1;
            $er.css("height","52.5px")
        }
    })
}


