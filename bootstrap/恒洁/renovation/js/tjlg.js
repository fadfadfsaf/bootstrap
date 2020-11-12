$(function(){
    showImg();
    showChange();
})
function showImg(){
    $('.cover').mouseover(function(){
        $(this).fadeTo(300,0);
    })
    $('.cover').mouseout(function(){
        $(this).fadeTo(300,0.8);
    })
    $('.cove').mouseover(function(){
        $(this).fadeTo(300,0);
    })
    $('.cove').mouseout(function(){
        $(this).fadeTo(300,0.8);
    })
}
var i=$('.bpc').children('li').index();
function showChange(){
    $('.bpc').children('li').click(function(){
        var i=$(this).index();
        console.log(i);
        $(".tab-contents").children("div").eq(i).show(500).siblings("div").hide(500);
        $('.a>.pc').eq(i).children('.cover').fadeTo(300,0).end().siblings('.pc').children('.cover').fadeTo(300,.8);

    })
    $('.bpc').children('li').click(function(){
        var i=$(this).index();
        console.log(i);
        $(".b").children("div").eq(i).show(500).siblings("div").hide(500);
        $('.a>.bc').eq(i).children('.cove').fadeTo(300,0).end().siblings('.bc').children('.cove').fadeTo(300,.8);

    })
    $('.lbtn').click(function(){
        $(".tab-contents").children("div").eq(i).show(1000).siblings("div").hide(1000);
        $('.a>.pc').eq(i).children('.cover').fadeTo(300,0).end().siblings('.pc').children('.cover').fadeTo(300,.8);
        i--;
    })
    $('.rbtn').click(function(){
        $(".tab-contents").children("div").eq(i).show(1000).siblings("div").hide(1000);
        $('.a>.pc').eq(i).children('.cover').fadeTo(300,0).end().siblings('.pc').children('.cover').fadeTo(300,.8);
        i++;
    })
    $('.a').children('div').click(function(){
        var i=$(this).index();
        $('.carousel-inner').children('div').eq(i).show(500).siblings('div').hide(500);
        $(".tab-contents").children("div").eq(i).show(500).siblings("div").hide(500);
        $('.a>.pc').eq(i).children('.cover').fadeTo(300,0).end().siblings('.bc').children('.cove').fadeTo(300,.8);
    })
    $('.a').children('div').click(function(){
        var i=$(this).index();
        $('.carousel-inner').children('div').eq(i).show(500).siblings('div').hide(500);
        $(".b").children("div").eq(i).show(500).siblings("div").hide(500);
        $('.a>.bc').eq(i).children('.cove').fadeTo(300,0).end().siblings('.bc').children('.cove').fadeTo(300,.8);
    })
    $("#left").click(function(){
        $('.contents').animate({'left':'-287.5px'},500,function(){
            $(this).append($(this).children('div:first'));
            $(this).css('left','0px');
            $(this).children('div:first').children('.cover').fadeTo(300,0).end().siblings('div').children('.cover').fadeTo(300,.8);
            $('.tab-contents').animate({'left':'-1000px'},500,function(){
                $(this).append($(this).children('div:first'));
                $(this).css('left','0px');
                $(".tab-contents").children("div").eq(i).show(1000).siblings("div").hide(1000);
                $('.carousel-inner').children('div').eq(i).show(500).siblings('div').hide(500);
            })
        })
        
    })
    $("#right").click(function(){
        $('.contents').prepend($('.contents').children('div:last'));
        $('.contents').css('left','-287.5px');
        $('.contents').animate({'left':'0px'},500)
        $('.contents>div:first').children('.cover').fadeTo(300,0).end().siblings('div').children('.cover').fadeTo(300,.8);
        $('.tab-contents').animate({'left':'0px'},500)
        $('.tab-contents').append($('.tab-contents').children('div:last'));
        $('.tab-contents').css('left','-10000px');
        $(".tab-contents").children("div").eq(i).show(1000).siblings("div").hide(1000);
        $('.carousel-inner').children('div').eq(i).show(500).siblings('div').hide(500);
        i++;
        
    })
}