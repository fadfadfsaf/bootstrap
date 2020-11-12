$(function () {
    $.ajax({
        url: 'http://www.qhdlink-student.top/student/banner.php',
        dataType: 'html',
        type: 'post',
        data: 'username=hxh&userpwd=12345678&userclass=61&type=2',
        success: function (data) {
            var str = '';
            var obj = eval('(' + data + ')');
            console.log(obj);
            $.each(obj, function (i, v) {
                var b = '<div><img src="http://www.qhdlink-student.top/' + v.path_banner + '"></div>';
                str += b;
            })
            $("#sw").append($(str));
            $("#sw").children('div').addClass('swiper-slide');
        }
    })
})