$(window).on("scroll", function() {
    if($(window).scrollTop() > 30) {
        $(".header_nav").addClass("header_nav_active");
    } else {
       $(".header_nav").removeClass("header_nav_active");
    }

    if($(window).scrollTop() > 30) {
        $(".logo_box").addClass("logo_boxv2");
    } else {
       $(".logo_box").removeClass("logo_boxv2");
    }

    if($(window).scrollTop() > 30) {
        $(".option").addClass("optionv2");
    } else {
       $(".option").removeClass("optionv2");
    }

    if($(window).scrollTop() > 30) {
        $(".burger_line1").addClass("burger_line1v2");
    } else {
       $(".burger_line1").removeClass("burger_line1v2");
    }
});



$(document).ready(function(){
    $('.burger').click(function(){  
        $('.bl1').toggleClass('bl1v2');
        $('.bl2').toggleClass('bl2v2');
        $('.bl3').toggleClass('bl3v2');
        $('.sidenav').toggleClass('sidenav_active');        
    });

    $('.burger').click(function(){
        $('.menu').toggleClass('menuv2');
    });
});

