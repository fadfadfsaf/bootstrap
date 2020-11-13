$(function(){
    // ---------------------------------------------------------------------
    // 点击左侧导航切换右侧内容
    $("#leftT>ul>li").click(function(){
        var i=$(this).index();
        console.log(i);//测试通过index找到下标
        console.log($("#contentT").children("div").eq(i).html());//测试根据span下标找到对应的内容div
        $("#contentT>div").eq(i).show(0).siblings("div").hide(0);
    })
    // 点击smallshow切换视频
    $(".carVideoTitle>span").click(function(){
        var i=$(this).index();
        $(this).addClass("smallshow").siblings("span").removeClass("smallshow");//让当前span添加背景bg，其他的span删除背景bg
        $(".carVideoV").eq(i).show(0).siblings(".carVideoV").hide(0);
        console.log($(".carVideoV").eq(i).html());
    })
    // ---------------------------------------------------------------------------

    // 大车视频开始
    // ------------------------------------------------------------------------------
    // 点击smallshow切换视频
    $(".carVideoTitle1>span").click(function(){
        var i=$(this).index();
        $(this).addClass("bigshow").siblings("span").removeClass("bigshow");//让当前span添加背景bg，其他的span删除背景bg

        $(".carVideoV1").eq(i).show(0).siblings(".carVideoV1").hide(0);
    })
    // ------------------------------------------------------------------------------

})