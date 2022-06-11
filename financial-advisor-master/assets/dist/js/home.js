$(document).ready(function(){
    //scroll to id
    function handler(event) {
        $('.overlay-signIn').removeClass('active');
        if($(window).width() < 768) {   
            $.unlockBody();
        }else{
            $('body').css('overflow', 'inherit');
        }
        
        // var hash = event.target.hash;
        var hash = $(this).attr("href");
        if (hash) {
        event.preventDefault();
        if ($(hash).length) {
            var offset = $(hash).offset().top - 100;
            $('html, body').stop().animate({scrollTop: offset},'slow');
        }else{
        }
        }
    }
    $('.scrollLink').on( "click", handler );

});