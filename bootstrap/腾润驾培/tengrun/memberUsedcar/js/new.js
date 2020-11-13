$(function(){
    $.ajax({
        url: "http://www.qhdlink-student.top/student/newsa.php",
        data:{ "username":"xb","userpwd":12345678,"userclass":61,"type":2},
        type: "post",
        dataType: "json",
        success: function(obj) {
            console.log(obj);
            var str = "";
            $.each(obj, function(k, v) {
                console.log(v);
                str += '<p>'+v.title_news+'[<a href="new_info.html?id='+v.id_news+'">'+v.time_news+'</a>]</p>';
            })
            $(".contents_a").append($(str));
        }
    })
})