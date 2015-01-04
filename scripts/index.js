/* Qianglong Mo 2014 (Sumi Interactive) */

$(function (){
    $(window).stellar();

    // jump to target
    $('.target1').click(function (){
        $('html,body').animate({scrollTop:$('.section-01').offset().top - 18}, 800);
    });
    $('.target2').click(function (){
        $('html,body').animate({scrollTop:$('.section-02').offset().top - 18}, 800);
    });
    $('.target3').click(function (){
        $('html,body').animate({scrollTop:$('.section-03').offset().top - 18}, 800);
    });
});