/**
 * Created by 我是李振虎 on 2016/11/14.
 */



//navWidth
$(function(){
    $('#nav_in .nav_in .nav_list >ul >li div').css('width',$(window).width());
})

//banner
$(function(){
    $('#nav_in .nav_list >ul >li').mouseover(function(){
        $(this).children('div').fadeIn(0);
    })
    $('#nav_in .nav_list >ul >li').mouseout(function(){
        $(this).children('div').fadeOut(0);
    })
})


//nav
$(function(){
    $(window).scroll(function(){
        var otop=$('body').scrollTop();
        if(otop>165){
            if($('#nav_in').css('position')!='fixed'){
                $('#nav_in').css({'position':'fixed','height':'60px'}).addClass('donghua');
            }
            $('#nav_in .nav_list').addClass('add');
            $('#nav_in .nav_list >ul .none').hide();
            $('#nav_in .src').hide();
            $('#nav_in .nav_in').addClass('nav_in2')
        }else{
            $('#nav_in').css({'position':'relative','height':'190px'}).removeClass('donghua');
            $('#nav_in .nav_list').removeClass('add');
            $('#nav_in .nav_list >ul .none').show();
            $('#nav_in .src').show();
            $('#nav_in .nav_in').removeClass('nav_in2');
        }
    })
})

//gettop
$(function(){
    $('#gettop').click(function(){
        $('body').animate({'scrollTop':'0'},500);
    })
})