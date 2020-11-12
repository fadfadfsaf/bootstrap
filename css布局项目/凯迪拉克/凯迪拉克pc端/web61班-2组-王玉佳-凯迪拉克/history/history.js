//点击开始探索跳转下一个界面
$(function () {
    $(".start").click(function () {//开始探索图片绑定点击效果
        $(".start").prevAll().fadeOut(600);//他的所有哥哥一秒钟内消失
        $(".start").fadeOut(600);//图片自己一秒内消失
        $(".contshow>img").fadeIn(600);//背景图片0.6秒内淡入
        $(".history00").fadeIn(3000);//汽车img3秒内淡入
        $(".textshow").children(".text:first").fadeIn(1000);//文字1秒内淡入
    })
})

$(function () {
    $(".focus span").each(function (index) {//遍历.focus的span标签。span是汽车图片下方小图标列表，加入形参index
        $(this).click(function () {
            //绑定单个span，点击效果
            console.log(this);
            $(".start").prevAll().fadeOut(600);//他的所有哥哥一秒钟内消失
            $(".start").fadeOut(600);//图片自己一秒内消失
            $(".contshow>img").fadeIn(600);//背景图片0.6秒内淡入

            // _______________________________
            var i = index * 87
            //设置变量i等于形参乘87("图标宽度")
            $("#bor").stop()
            //图标选择框停止动画
            $("#bor").animate({ "left": i + "px" }, 1000)
            //图标选择框向右滑动i的宽度，间隔1秒钟
            // _________________________
            var lis = $(".imgshow").children("ul").children("li")
            //设置变量lis等于汽车图片div的li
            var texts=$(".textshow").children(".text")
            //设置变量texts等于文字信息div的.text
            for(i=0;i<lis.length;i++){
            //设置一个循环
                $(lis[i]).fadeOut(20);//汽车图片0.2秒消失
                $(texts[i]).fadeOut(20);//文字信息0.2秒消失
            }
            $(lis[index]).fadeIn(3000);//第index个lis3秒内渐显
            $(texts[index]).fadeIn(1000);//第index个texts3秒内渐显
        })
    })
})
