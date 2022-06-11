$(document).ready(function(){

    //lock,unlock body на телефоне
    var $docEl = $('html, body'),
    $wrap = $('body'),
    scrollTop;

    $.lockBody = function() {
        if(window.pageYOffset) {
        scrollTop = window.pageYOffset;
        
        $wrap.css({
            top: - (scrollTop)
        });
        }

        $docEl.css({
            height: "100%",
            overflow: "hidden"
        });
    }

    $.unlockBody = function() {
        $docEl.css({
            height: "",
            overflow: ""
        });

        $wrap.css({
            top: ''
        });

        window.scrollTo(0, scrollTop);
        window.setTimeout(function () {
            scrollTop = null;
        }, 0);

    }

    //call me back popup
    $('.open-signIn').on("click",function(){
        $('.overlay-signIn').addClass('active');

        if($(window).width() < 768) {   
            $.lockBody();
        }else{
            $('body').css('overflow', 'hidden');
        }
    });
    $('.overlay-signIn .closeBtn, .overlay-signIn .close').on("click",function(){
        $('.overlay-signIn').removeClass('active');
        if($(window).width() < 768) {   
            $.unlockBody();
        }else{
            $('body').css('overflow', 'inherit');
        }
    });

    //проверка формы
    $("form input, textarea").on("change input keyup paste", function() {
        $(this).parent().find(":invalid").length ? ($(this).parent().removeClass("valid"),
        $(this).parent().addClass("invalid")) : ($(this).parent().removeClass("invalid"),
        $(this).parent().addClass("valid"))
    });
    $("form input, textarea").on("invalid", function(event) {
        event.preventDefault();
        $(this).parent().addClass('invalid');
    });

});



