var swiper = new Swiper('.swiper-container', {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,//点击焦点切换
    },
    // tab
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    observer: true,//修改swiper自己或子元素时，自动初始化swiper
    observeParents: true,//修改swiper的父元素时，自动初始化swiper
});
// swiper插件

$(function () {
    $.ajax({
        url: "http://www.qhdlink-student.top/student/coacha.php",
        type: "post",
        dataType: "json",
        data: {
            "username": "lyx", "userpwd": "12345678", "userclass": 61, "type": 2,
        },
        success: function (data) {
            console.log(data);
            // for (var i = 0; i < Object.keys(data).length; i++) {
            $.each(data, function (i, v) {
                console.log(i);
                var str1 = '';
                var str = '';
                if (i % 3 == 0) {
                    str1 += '<div class="right"></div>';
                    $(".contentses").append($(str1));

                    str += '<div class="right_1"><div class="right_img"><img src="http://www.qhdlink-student.top/' + data[i].path_coach + '"></div><div class="right_text"><h3>C1</h3><p>精英班/8:00~12:00 13:00~17:00</p><a href="">详细了解>></a></div><div class="right_button"><a href="" class="sign">网上报名</a></div></div>';
                    $(".right:last-child").append($(str));
                } else {
                    str += '<div class="right_1"><div class="right_img"><img src="http://www.qhdlink-student.top/' + data[i].path_coach + '"></div><div class="right_text"><h3>C1</h3><p>精英班/8:00~12:00 13:00~17:00</p><a href="">详细了解>></a></div><div class="right_button"><a href="" class="sign">网上报名</a></div></div>';
                    $(".right:last-child").append($(str));
                }
            })
            for (var j = 1; j <= $(".right").length; j++) {
                var str2 = '';
                str2 += '<li>' + j + '</li>';
                $(".ul").append($(str2));
            }


            $(".right").eq(0).show()

            $(".ul>li").on("click", function () {
                var index = $(this).index();
                $(this).css({"background":"#fff","color":"#FF9914"}).siblings().css({"background":"#FF9914","color":"#fff"});
                $(".right").eq(index).show().siblings().hide();
            })
        }
    })
})