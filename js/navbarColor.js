var a = $("nav").offset().top;

$(document).scroll(function(){
    if($(this).scrollTop() > a)
    {   
       $('nav').css({"background":"rgba(34,34,39,0.7)"});
    } else {
       $('nav').css({"background":"transparent"});
    }
});