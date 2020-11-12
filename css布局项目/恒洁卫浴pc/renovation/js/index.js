$(function () {
    $('.aa').mouseenter(function () {
        $('.dh').show(100);
    })
    $('.aa').mouseleave(function () {
        $('.dh').hide(100);
    })
    $(".lia").mouseenter(function () {
        $(this).children(".ula").slideDown(200);
        $(this).children(".ula").addClass("bg");
        $(".onav").addClass("bga");
        $(".logogg").attr("src", "../img/3f8b47bb-22a3-49bf-818e-8fe2060f30fc.png");
    })
    $(".lia").mouseleave(function () {
        $(this).children(".ula").slideUp(200);
        $(this).children(".ula").removeClass("bg");
        $(".onav").removeClass("bga");
        $(".logogg").attr("src", "../img/1778907b-e12a-4968-92c4-5f57f4ea3726.png");
    })
    $(".lib").mouseenter(function () {
        $(this).children("ul").slideDown(200);
        $(this).children("ul").addClass("bg");
        $(".onav").addClass("bga");
        $(".logogg").attr("src", "../img/3f8b47bb-22a3-49bf-818e-8fe2060f30fc.png");
    })
    $(".lib").mouseleave(function () {
        $(this).children("ul").slideUp(200);
        $(this).children("ul").removeClass("bg");
        $(".onav").removeClass("bga");
        $(".logogg").attr("src", "../img/1778907b-e12a-4968-92c4-5f57f4ea3726.png");
    })
    $(".lic").mouseenter(function () {
        $(this).children("ul").slideDown(200);
        $(this).children("ul").addClass("bg");
        $(".onav").addClass("bga");
        $(".logogg").attr("src", "../img/3f8b47bb-22a3-49bf-818e-8fe2060f30fc.png");
    })
    $(".lic").mouseleave(function () {
        $(this).children("ul").slideUp(200);
        $(this).children("ul").removeClass("bg");
        $(".onav").removeClass("bga");
        $(".logogg").attr("src", "../img/1778907b-e12a-4968-92c4-5f57f4ea3726.png");
    })
    $(".zhu").mouseenter(function () {
        $(this).next(".zhu2").slideDown(100);
    })
    $(".zhu").mouseleave(function () {
        $(this).next(".zhu2").slideUp(100);
    })
})