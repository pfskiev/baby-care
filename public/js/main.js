$(document).ready(function(){

    var $about = $('.dropdown-about'),
        $catalogue = $('.dropdown-catalogue');

    $('a.toggle-dropdown-catalogue').each(function(){
        $(this).hover(function() {
            $about.removeClass('on');
            $catalogue.each(function(){
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
            $about.removeClass('on');
            $catalogue.toggleClass('on');
        })
    });
    $('a.toggle-dropdown-about').each(function(){
        $(this).hover(function(){
            $catalogue.removeClass('on');
            $about.addClass('on');
            $about.each(function(){
                $(this).mouseleave(function(){
                    $(this).removeClass('on');
                });
            });
        });
    });
    $('a.toggle-nav').click(function() {
        $('.collapse-nav').toggleClass('on');
        if($catalogue.hasClass('on')){
            $catalogue.removeClass('on')
        }
    });
});