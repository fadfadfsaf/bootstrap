//轮播图--点击按钮
$(function(){
    $("#banner .prev").click(function(){
        //向左
        $("#contents").prepend($("#contents").children("img:last"));
        $("#contents").css("left","-1280px");
        $("#contents").animate({"left":"0px"},1000);
        })
    
      scrolls();

    $("#banner .next").click(function(){
        //向右
        $("#contents").animate({"left":"-1280px"},1000,function(){
            $("#contents").append($(this).children("img:first"));
            $(this).css("left","0px");
        })
    })
})

//自动播放banner图片
function scrolls(){
    $("#contents").animate({"left":"-1280px"},1000,function(){
        $("#contents").append($(this).children("img:first"));
        $(this).css("left","0px");
    })
}
i=setInterval("scrolls()",6000);