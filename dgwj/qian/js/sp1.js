    $("<link rel='stylesheet' href='../css/sp1.css'>").appendTo("head");
    $.ajax({
        url:"/sp1.html",
        type:"get",
        success: function(res) {
            $(res).replaceAll("#sp1")
    }
})