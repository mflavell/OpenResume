/* 
 * This is the business end.
 */

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
    var winwidth = $(window).width();
    var moveme=Math.round(winwidth-150);
    $(".title_menu").animate({left: '200px', top:'100px'});
    $(".img-me").animate({left: '-'+moveme+'px', top:'210px'});
    $(".contact").animate({left: '200px', top:'380px'});
    if (winwidth>1300) {
        $(".dash").animate({left: '1150px', top:'100px'});
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

