      var iszhuce=false;
      function chaname(){
          var xhr=createXhr();
          xhr.onreadystatechange=function(){
              if(xhr.readyState==4&&xhr.status==200){
                  var res=xhr.responseText;
                  if(res=="1"){
                      $("yanzheng").innerHTML="用户名已存在";
                      iszhuce=false;
                  }else if (res=="2")
                  {
					  $("yanzheng").innerHTML="用户名为空";
                      iszhuce=false;
				  }else{
                      $("yanzheng").innerHTML="用户名可用";
                      iszhuce=true;
                  }
              }
          }
          var xname=$('xname').value;
          xhr.open("get","/user/chaname?xname="+xname,true);
          xhr.send(null);
			}
      function quemima(){
				var xpwd=$("xpwd").value;
				var upwd=$("upwd").value;
				if(xpwd==upwd){
          $("queren").innerHTML="密码一致";
        }else{
					 $("queren").innerHTML="请重新确认密码是否一致";		
				}
			}
      function zhuce(){
          if(iszhuce==true){
              var xhr=createXhr();
              xhr.onreadystatechange=function(){
                  if(xhr.readyState==4&&xhr.status==200){
                      var res=xhr.responseText;
                      alert(res);
                  }
              }
              xhr.open("post","/user/zhuce",true);
              xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
              var xname=$("xname").value;
              var xpwd=$("xpwd").value;
              var url="xname="+xname+"&xpwd="+xpwd;
              xhr.send(url);
					}else{	
              alert("请检查注册信息");
          }
      }
