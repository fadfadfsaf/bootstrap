$(function () {
    $(".but>p").click(function () {
        console.log(this);
        $(this).addClass("bg").siblings().removeClass("bg")//点击绑定按钮
        $(".text>p").eq($(this).index()).fadeIn(200).siblings().fadeOut(200);//top信息
        $(".lis>ul").eq($(this).index()).fadeIn(200).siblings().fadeOut(200);//列表项内容
    })
})
//teb效果