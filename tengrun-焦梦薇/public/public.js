$(function(){
    $(".ul-li").on("click",function(event){
        $(this).children("ul").stop().slideToggle();
        event.stopPropagation(); 
    })
    
    $(document).on("click", function(){
        $(".ul-two").hide();
    });
    $(".nav-en").on("click",function(){
        $(".en-ul").slideToggle()
    })
    $(".en-li").on("click",function(){
        $(this).children("ul").slideToggle()
    })
})