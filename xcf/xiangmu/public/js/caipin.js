var as=document.getElementsByTagName("a")
console.log(as)
for(var a of as){
    a.onclick=function(){
        var a=this;
        var h1=document.getElementsByTagName("h1")[0]
        h1.innerHTML=a.innerHTML
        console.log(h1.innerHTML)
    }
}
 