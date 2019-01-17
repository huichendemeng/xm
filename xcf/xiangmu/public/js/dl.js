function denglu(){
			var xhr=createXhr();
			xhr.onreadystatechange=function(){
				if (xhr.readyState==4&&xhr.status==200)
				{
					var res=xhr.responseText;
					alert(res);
				}
			
			}
			
			xhr.open("post","/user/denglu",true);
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			var xname=$("xname").value;
			var xpwd=$("xpwd").value;
			var str="xname="+xname+"&xpwd="+xpwd;
			xhr.send(str);
		}