$(function(){
    // tab切换效果，切换大车和小车视频界面
    $("#bigcar").click(function(){
        $(".big").show();
        $(".small").hide();
        $("#bigcar").css("background","#ffa311");
        $("#smallcar").css("background","#e0e0e0");
    })
    $("#smallcar").click(function(){
        $(".small").show();
        $(".big").hide();
        $("#smallcar").css("background","#ffa311");
        $("#bigcar").css("background","#e0e0e0");
    })
    
    // 
    var video=$(".smallvideos").find("video");//找到smallvideos下的所有video标记
    console.log(video);
    $.each(video,function(i,v){//遍历
        $(this).on("click",function(){//给每个video添加点击事件
            var src=$(this).attr("src");//设置一个变量src，获取所有video的sec路径
            
            $(".small>video").attr("src",src);
            //当点击video时，播放的div获取到点击的src属性；
            // 自动播放
            document.getElementsByClassName("main-video")[0].load();
            document.getElementsByClassName("main-video")[0].play();
        })
    })
    var videos=$(".bigvideos").find("video");
    console.log(video);
    $.each(videos,function(i,v){
        $(this).on("click",function(){
            var src=$(this).attr("src");
            
            $(".ss>video").attr("src",src);
            document.getElementsByClassName("main-video")[0].load();
            document.getElementsByClassName("main-video")[0].play();
        })
    })

    // 点击事件
    $("#three,#four").click(function(){
        $("#three").removeClass("three");
        $("#three").addClass("two");
        $("#four").removeClass("three");
        $("#four").addClass("one");
        $("#one").removeClass("one");
        $("#one").addClass("three");
        $("#two").removeClass("two");
        $("#two").addClass("three");
        $("#onepage").hide();
        $("#twopage").show();
    })
    $("#one,#two").click(function(){
        $("#one").removeClass("three");
        $("#one").addClass("one");
        $("#two").removeClass("three");
        $("#two").addClass("two");
        $("#three").removeClass("tow");
        $("#three").addClass("three");
        $("#four").removeClass("one");
        $("#four").addClass("three");
        $("#onepage").show();
        $("#twopage").hide();
    })
})