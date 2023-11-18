
$(window).scroll(function(){
    if ($(window).scrollTop() >= 695) {
        $('nav').addClass('fixed-navbar');
        $('nav div').addClass('visible-title');
    }
    else {
        $('nav').removeClass('fixed-navbar');
        $('nav div').removeClass('visible-title');
    }
});