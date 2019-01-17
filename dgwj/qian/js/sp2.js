$(function(){
    $("<link rel='stylesheet' href='../css/sp2.css'>").appendTo("head");
    $.ajax({
        url: "/sp2.html",
        type: "get",
        success: function (res) {
            $(res).replaceAll("#sp2")
        }
    })
})