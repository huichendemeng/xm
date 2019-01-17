$(function(){
    $("<link rel='stylesheet' href='../css/lefttab.css'>").appendTo("head");
    $.ajax({
        url:"/lefttab.html",
        type:"get",
        success: function(res) {
            $(res).replaceAll("#lefttab")
        }
    })

})