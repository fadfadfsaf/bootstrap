$(window).scroll(function () {
    // 监视滚动条
    var s = $(window).scrollTop();
    console.log(s);
    if (s > 500) {
        $(".footer img").show(200)
    }
})