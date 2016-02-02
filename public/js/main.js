$(document).ready(function(){
    $('a.toggle-dropdown').each(function(){
        $(this).hover(function() {
            $('.dropdown').each(function(){

                var menu = $(this);
                menu.addClass('on');
                menu.remove();
                $('.wrapper-download').each(function(){
                    $(this).append(menu);
                    $(this).mouseleave(function(){
                        menu.removeClass('on');
                    });
                })
            })
        });
        $(this).click(function(){
            $('.dropdown').toggleClass('on');
        })
    });
    $('a.toggle-nav').click(function() {
        $('.collapse-nav').toggleClass('on');
        if($('.dropdown').hasClass('on')){
            $('.dropdown').removeClass('on')
        }
    });
});