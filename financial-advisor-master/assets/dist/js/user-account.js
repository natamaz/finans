$(document).ready(function(){
    //open/close sidebar
    $('.toggle-menu').on('click', function(){
        $('.sidebar').addClass('show');
    });
    $('.closeSidebar').on('click', function(){
        $('.sidebar').removeClass('show');
    });

    //open tooltip
    $('.tooltip').on('click', function(ev){
        $(this).toggleClass('active');
        $(this).parent().parent().find('.tooltip_hidden').toggleClass('active');
    });

    $(document).mouseup(function(e){
        var el = $('.tooltip_hidden.active');
        if (!el.is(e.target) && el.has(e.target).length === 0) {
            el.removeClass('active');
            $('.tooltip').removeClass('active');
        }
    });

    $('.toggle_heading .arrow').on('click', function(){
        $(this).parent().toggleClass('show');
        $(this).parent().parent().find('.toggle_body').toggleClass('show');
    })


    $('.close-tooltip').on('click', function(){
        $(this).parent().removeClass('active');
        $(this).parent().parent().find('.tooltip').removeClass('active');
    });

});