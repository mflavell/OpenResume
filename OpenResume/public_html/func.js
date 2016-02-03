/* 
 * This is the business end.
 */

$( window ).resize(function() {
    if($(window).width() != width && $(window).height() != height){
        location.reload();
    }
});

function loadtext() {
    $('#content').hide();
    $('#content_text1').hide();
    $('#content_text2').hide();
    $('#content_text3').hide();
    $('#content_text4').hide();
    document.title = title;
    document.getElementById("title").innerHTML=title;
    document.getElementById("sub_title").innerHTML=sub_title;
    document.getElementById("menu_1").innerHTML=menu_1;
    document.getElementById("menu_2").innerHTML=menu_2;
    document.getElementById("menu_3").innerHTML=menu_3;
    document.getElementById("menu_4").innerHTML=menu_4;
    document.getElementById("content_text1").innerHTML=text_1;
    document.getElementById("content_text2").innerHTML=text_2;
    document.getElementById("content_text3").innerHTML=text_3;
    document.getElementById("content_text4").innerHTML=text_4;
    document.getElementById("contact").innerHTML=contact;
    document.getElementById("dash").innerHTML=dash;
}

var lastitem="";

function movemenu(item) {
    if (($(window).width()<1000)) {
        vertical();
    } else {
        horizontal();
    }
    if (lastitem!="") {
        $("#content_text"+lastitem).fadeOut(function() {
             $("#content_text"+item).fadeIn();
        });
    } else {
         $("#content").fadeIn(3000);
         $("#content_text"+item).fadeIn();
    }   
   
    lastitem=item;
};  

function vertical() {
    //var winwidth = $(window).width();
    //var moveme=Math.round(winwidth-150);
    //$(".title_menu").animate({top:'50px'});
    //$(".img-me").animate({top:'-200px'});
    //$(".contact").animate({left: '200px'});
 }

function horizontal() {
    var winwidth = $(window).width();
    var moveme=Math.round(winwidth-150);
    $(".title_menu").animate({left: '200px', top:'100px'});
    $(".img-me").animate({left: '-'+moveme+'px', top:'210px'});
    $(".contact").animate({left: '200px', top:'380px'});
    $(".dash").animate({ top:'100px'});
}