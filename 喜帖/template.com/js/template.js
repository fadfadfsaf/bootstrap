
$(function () {
    var i = 1;
    if (i >= 0) {
        // 文字滚动出现
        $(".step1 h1").animate({opacity: "1",fontSize: "60px"}, 500, function () { })
        $(".step1 h1").animate({fontSize: "48px" }, 500, function () { })
        $(".step1 .alls").animate({ opacity: "1", }, 1000, function () { })
        $(".step1 .all").animate({  opacity: "1",    left: "0px",  }, 500, function () { })
        $(".step1 .ad").animate({   opacity: "1",   left: "0px",   }, 500, function () { })
    }
    $(window).scroll(function () {
        // 监视滚动条
        var s = $(window).scrollTop();
        console.log(s);
        if (s > 1000) {
            $(".footer img").show(200)
        }
    })
    $(".step2>div").mouseenter(function(){
        $(this).children("div").animate({ left: "0%",}, 500, function () { })
        $(this).children("img").animate({ left: "180px",}, 500, function () { })
    })
    $(".step2>div").mouseleave(function(){
        $(this).children("div").animate({ left: "-80%",}, 500, function () { })
        $(this).children("img").animate({ left: "0px",}, 500, function () { })
    })
})