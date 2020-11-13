$(function () {
    $(".video>div>span").click(function(){
        $(".video").hide(500);
    })


    $(window).scroll(function () {
        // 监视滚动条
        var s = $(window).scrollTop();
        console.log(s);
        if (s > 400) {
            $(".footer img").show(200)
        }
    })

    // $(".imgs a").mouseenter(function () {
    //     $(this).animate({ margin: "-5px 0px 5px" }, 200, function () { })
    // })
    // $(".imgs a").mouseleave(function () {
    //     $(this).animate({ margin: "5px 0px -5px" }, 200, function () { })
    // })
    // $(".imges a").mouseenter(function () {
    //     $(this).animate({ margin: "-5px 0px 5px" }, 200, function () { })
    // })
    // $(".imges a").mouseleave(function () {
    //     $(this).animate({ margin: "5px 0px -5px" }, 200, function () { })
    // })

})