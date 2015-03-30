/* Qianglong Mo 2014 (Sumi Interactive) */

$(function (){
    $(window).stellar();

    // jump to target
    $('.target1').click(function (){
        jumpToTarget('.section-01', '.section-title-01');
    });
    $('.target2').click(function (){
        jumpToTarget('.section-02', '.section-title-02');
    });
    $('.target3').click(function (){
        jumpToTarget('.section-03', '.section-title-03');
    });

    function jumpToTarget(section, sectionTitle){
        $('html,body').animate({scrollTop:$(section).offset().top - 18}, 800);

        setTimeout(function (){
            $(sectionTitle).addClass('animated bounceInLeft');
            setTimeout(function (){
                $(sectionTitle).removeClass('animated bounceInLeft');
            }, 1000);
        }, 400);
    }

});