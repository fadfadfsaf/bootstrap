// 顶部
$(function () {
    $(".button_1").mouseenter(function () {//鼠标滑入明星系列
        $(".header").addClass("show")//给header添加一个class名，显示为白色背景
        $("#img_pre").attr("src", "img/theme-dark-logo.png");//logo图片变更
        $(".headershow").slideDown(500)//明星系列下拉菜单
    })
    $(".button_1").mouseleave(function () {//鼠标滑出明星系列
        $(".header").removeClass("show")//给header删除class名
        $("#img_pre").attr("src", "img/theme-bright-logo.png");//logo图片变更
        $(".headershow").slideUp(20)//明星系列合上下拉菜单
    })
    $(".button_2").mouseenter(function () {//鼠标滑入产品一览
        $(".header").addClass("show")//给header添加一个class名
        $("#img_pre").attr("src", "img/theme-dark-logo.png");//logo图片变更
        $(".headershow1").slideDown(500)//产品一览下拉菜单
    })

    $(".button_2").mouseleave(function () {//鼠标滑出产品一览
        $(".header").removeClass("show")//给header删除class名
        $("#img_pre").attr("src", "img/theme-bright-logo.png");//logo图片变更
        $(".headershow1").slideUp(20)//产品一览合上下拉菜单
    })
    $(".button_3").mouseenter(function () {//鼠标滑入技术服务
        $(".header").addClass("show")////给header添加一个class名
        $("#img_pre").attr("src", "img/theme-dark-logo.png");//logo图片变更
        $(".headershow2").slideDown(500)///技术服务下拉菜单
    })
    $(".button_3").mouseleave(function () {//鼠标滑出技术服务
        $(".header").removeClass("show")//给header删除class名
        $("#img_pre").attr("src", "img/theme-bright-logo.png");//logo图片变更
        $(".headershow2").slideUp(20)//技术服务合上下拉菜单
    })
})

// 侧导航
$(function () {
    $(".menu").mouseenter(function () {
        $(this).children("div").eq(1).stop().slideDown(500).siblings().stop().slideUp(500)
    })
    $(".menu").mouseleave(function () {
        $(this).children("div").eq(1).stop().slideUp(500).siblings().stop().slideDown(500)
    })
    $(".li2").mouseenter(function () {
        $("#side").show()
    })
    $(".li2").mouseleave(function () {
        $("#side").hide()
    })
    $(".li3").mouseenter(function () {
        $("#wechat").show()
    })
    $(".li3").mouseleave(function () {
        $("#wechat").hide()
    })
})
// 监视滚动条
$(window).scroll(function () {
    var scroH = $(window).scrollTop();
    console.log(scroH);
    if (scroH > 100) {
        $(".go_top").show()
    } else {
        $(".go_top").hide()
    }
    if (scroH > 650) {
        $("div.nav").addClass("fixed")
        $("div.nav li").addClass("fixed0")
        $("div.nav img").addClass("fixed1")
    } else {
        $("div.nav").removeClass("fixed")
        $("div.nav li").removeClass("fixed0")
        $("div.nav img").removeClass("fixed1")
    }
})

// 导航变换图片
$(function () {
    $("div.nav li").mouseenter(function () {
        var i = $(this).index();
        $(this).children("a").children("img").attr("src", "img/product-series-0" + (i + 1) + "-on.png")
        // console.log($(this).children("a").children("img"));
        // console.log($(this).children("a").children("img").attr("src"));
        // console.log(i);
    })
    $("div.nav li").mouseleave(function () {
        var i = $(this).index();
        $(this).children("a").children("img").attr("src", "img/product-series-0" + (i + 1) + "-off.png")
    })
})

// 图片展开
$(function () {
    $(".banner_spread>div").mouseenter(function () {
        console.log(this);
        $(".banner_spread").slideUp(500)
        $(".banner_show img").eq($(this).index()).show(500).siblings().hide(500)
    })
    $(".banner_show img").mouseleave(function () {
        $(".banner_spread").show(500)
        $(this).hide(500)
    })
})

// $(function () {
//     $(".abouts span").mouseenter(function () { 
//         console.log(this);
//         $(this).removeClass("abouts_bg")
//     })
//     $(".abouts span").mouseleave(function () { 
//         console.log(this);
//         $(this).addClass("abouts_bg")
//     })
// })
$(function () {
    $(".abouts span").mouseenter(function () { 
        $(this).fadeOut(500)
    })
    $(".abouts span").mouseleave(function () { 
        $(this).fadeIn(500)
    })
})
//移动 ——————————————————————————————————————————————————————————————————————————————

$(function () {
    $(".img_0").click(function () {
        $(".show_0").slideDown(500)
    })
    $("#show11").click(function () {
        $(".show_0").slideUp(500)
    })
})
$(function () {
    $(".show_0 div").click(function () {
        $(this).siblings().toggle(500)
    })
})
