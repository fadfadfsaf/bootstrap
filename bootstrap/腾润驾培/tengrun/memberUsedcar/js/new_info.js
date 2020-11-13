$(function(){
    var str=location.search;
    console.log(str);
    var str1=str.substr(4,str.length);
    console.log(str1);
    $.ajax({
        url: "http://www.qhdlink-student.top/student/newsinfo.php",
        data:{ "username":"xb","userpwd":12345678,"userclass":61,"type":2,"m":str1},
        type: "post",
        dataType: "json",
        success: function(obj) {
            console.log(obj);
            var str = "";
            $.each(obj, function(k, v) {
                console.log(v);
              str+='<h3><span>'+v.id_news+':</span>'+v.title_news+'</h3><p>'+v.time_news+'</p><p>'+v.info_news+'</p>';
            })
            $(".contents_b").append($(str));
        }
    })
})