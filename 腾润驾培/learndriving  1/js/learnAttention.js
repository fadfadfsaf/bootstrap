$(function(){
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
    
    var video=$(".smallvideos").find("video");
    console.log(video);
    $.each(video,function(i,v){
        $(this).on("click",function(){
            var src=$(this).attr("src");
            
            $(".small>video").attr("src",src);
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