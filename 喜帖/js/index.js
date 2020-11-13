$(function () {
    var i = 1;
    if (i >= 0) {
        $(".banner h1").show(1000)
        // 文字滚动出现
    }

    $(window).scroll(function () {
        // 监视滚动条
        var s = $(window).scrollTop();
        console.log(s);
        if (s > 20) {
            // header效果
            $(".header1").fadeIn(200)
            $(".header1").fadeIn(200).stop()
            // 移动
            $(".header2").addClass("low")

        } else {
            $(".header1").fadeOut(200)
            $(".header1").fadeOut(200).stop()
            // 移动
            $(".header2").removeClass("low")
        }
        if (s > 450) {
            // div依次向上出现
            $(".content .div1").animate({ top: "0px", }, 500, function () {
                $(this).next().animate({ top: "0px", }, 500, function () {
                    $(this).next().animate({ top: "0px", }, 500, function () {
                        $(this).next().animate({ top: "0px", }, 500, function () { })
                    })
                })
            })
        }
        if (s > 700) {
            $(".content1 img").show(500)
        }
        if (s > 1200) {
            // div依次向上出现
            $(".content2 .div1").animate({ top: "0px", }, 500, function () {
                $(this).next().animate({ top: "0px", }, 500, function () {
                    $(this).next().animate({ top: "0px", }, 500, function () {
                        $(this).next().animate({ top: "0px", }, 500, function () { })
                    })
                })
            })
        }
        if (s > 1600) {
            $(".content3 h1").show(500)
        }
        if (s > 2000) {
            $(".content3 img").animate({ top: "0px", }, 500, function () { })
            $(".content3 img").animate({ opacity: "1", }, 5, function () { })
        }
        if (s > 2200) {
            $(".footer img").show(200)
        }
    })
    //方法2设置css透明度_________________________________________________________

    // if (s > 10) {
    //     $(".header1").css({ opacity: "1" })
    // } else {
    //     $(".header1").css({ opacity: "0" })
    // }

    //方法3设置class________________________________________________________________

    // if ($(window).scrollTop() > 0) {
    // }
    // $(window).scroll(function () {
    //     if ($(window).scrollTop() >= 10) {
    //         $(".header").addClass("header1")
    //     } else {
    //         $(".header").removeClass("header1")
    //     }

    // ____________________________________________________
    $(".content img").mouseenter(function () {
        $(this).animate({ margin: "-5px 0px 5px" }, 200, function () { })
    })
    $(".content img").mouseleave(function () {
        $(this).animate({ margin: "5px 0px -5px" }, 200, function () { })
    })
    // ———————————————————————————————————————————————————————————————————
    $(".content2 img").mouseenter(function () {
        $(this).animate({ margin: "-5px 0px 5px" }, 200, function () { })
    })
    $(".content2 img").mouseleave(function () {
        $(this).animate({ margin: "5px 0px -5px" }, 200, function () { })
    })
    // ————————————————————————————————————————————————————————————————————
    $(".header2>.img1>img").click(function () {
        console.log(this);
        $(".header3").slideToggle(500)
       
    })
     // ——————————————————————————————————————————————————————————
    $(".content3>div>.img2").mouseenter(function () {
        $(".a0").show().stop()
        $(".a1").show().stop()
    })
    $(".content3>div>.img2").mouseleave(function () {
        $(".a0").hide().stop()
        $(".a1").hide().stop()
    })
})
