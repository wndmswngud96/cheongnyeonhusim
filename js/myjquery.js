$(function(){
    $(".tap>li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
    });
});

