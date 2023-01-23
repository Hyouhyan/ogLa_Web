var headerHeight = $('header').outerHeight();

$(function() {
    const hum = $('#hamburger');
    const nav = $('.main-nav');
    const snav = $('.nav');
    hum.on('click', function(){
        nav.toggleClass('toggle');
        hum.toggleClass('toggle');
        console.log("hum clicked");
    });
    snav.on('click', function(){
        nav.toggleClass('toggle');
        hum.toggleClass('toggle');
        console.log("snav clicked");
    });
});

$('a[href^="#"]').click(
    function() {
        var href= $(this).attr("href");
        var target = $(href);
        var position = target.offset().top - headerHeight;

        $('body,html').stop().animate({scrollTop:position}, 300);
  
        return false;
    }
);