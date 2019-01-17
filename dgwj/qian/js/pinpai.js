
   $(function(){
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
        $.ajax({
            url:"http://127.0.0.1:3000/pinpai/pinpai",
            data:"",
            success:function(res){
                var pp=document.getElementsByClassName("pp_ppdan")[0]
                var frag=document.createDocumentFragment();
                var arr=["#","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","V","W","X","Y","Z"]
                    for(var i=1;i<=26;i++){
                        var div=document.createElement("div")
                        div.id="#dh"+[i]
                        var spanf1=document.createElement("span")
                        spanf1.innerHTML=arr[i-1]
                        div.appendChild(spanf1)
                        var spanf2=document.createElement("span")
                        for(var l=0;l<res.length;l++)
                        if(res[l].ptypeid==i){                          
                            var spanc=document.createElement("span")
                            var a=document.createElement("a")
                            a.innerHTML=res[l].ptitle;
                            a.href="#"
                            spanc.appendChild(a);
                            spanf2.appendChild(spanc);
                            div.appendChild(spanf2)
                        }
                        frag.appendChild(div)
                    }                  
                pp.appendChild(frag)    
            }
        })
        
    })
