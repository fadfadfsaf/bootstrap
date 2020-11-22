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
            // each遍历data数据
            $.each(data, function (i, v) {
                console.log(i);
                var str1 = '';
                var str = '';
                // i是data内容下标，每三个内容称为一个分界点;添加一个div类名为right
                if (i % 3 == 0) {
                    str1 += '<div class="right"></div>';
                    $(".contentses").append($(str1));

                    str += '<div class="right_1"><div class="right_img"><img src="http://www.qhdlink-student.top/' + data[i].path_coach + '"></div><div class="right_text"><h3>C1</h3><p>精英班/8:00~12:00 13:00~17:00</p><a href="">详细了解>></a></div><div class="right_button"><a href="" class="sign">网上报名</a></div></div>';
                    $(".right:last-child").append($(str));
                    // 否则只添加内容，不添加div节点
                } else {
                    str += '<div class="right_1"><div class="right_img"><img src="http://www.qhdlink-student.top/' + data[i].path_coach + '"></div><div class="right_text"><h3>C1</h3><p>精英班/8:00~12:00 13:00~17:00</p><a href="">详细了解>></a></div><div class="right_button"><a href="" class="sign">网上报名</a></div></div>';
                    $(".right:last-child").append($(str));
                }
            })
            // 找到right节点。遍历它并且用下标作为页码，添加到ul里
            for (var j = 1; j <= $(".right").length; j++) {
                var str2 = '';
                str2 += '<li>' + j + '</li>';
                $(".ul").append($(str2));
            }

            // 所有的right页面都隐藏（css设置）
            // 设置第一个right显示出来
            $(".right").eq(0).show()

            // 点击页码事件，tab切换效果
            $(".ul>li").on("click", function () {
                // 找到每个li的下标
                var index = $(this).index();
                // 它的背景颜色和字体颜色发生变化
                // 他的兄弟背景颜色和字体颜色变化
                $(this).css({ "background": "#fff", "color": "#FF9914" }).siblings().css({ "background": "#FF9914", "color": "#fff" });
                // 点击哪个li。下标为几的right显示。其他right消失
                $(".right").eq(index).show().siblings().hide();
            })
        }
    })
})