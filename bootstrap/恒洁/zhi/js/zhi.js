// tab切换效果pc端
$(function(){
    $(".tab>ul").children("li").click(function(){
        $(this).addClass("so").siblings("li").removeClass("so");
    })
})

// tab切换效果移动端
$(function(){
    $("#title0>span").click(function(){
        var i=$(this).index();
        $(this).addClass("bg0").siblings("span").removeClass("bg0");
        $("#contents0>.tab-c1").eq(i).show(1).siblings(".tab-c1").hide(1);
    })
})