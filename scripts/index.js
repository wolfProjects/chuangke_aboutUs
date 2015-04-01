/* Qianglong Mo 2014 (Sumi Interactive) */

$(function (){
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
    }

    //  wow scroll animation
    new WOW({
        offset: 20
    }).init();
});