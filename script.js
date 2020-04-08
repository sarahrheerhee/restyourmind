console.log('hi');

$(document).ready(function() {

    // javascript goes here



$('#first').mouseover( function () {

   $(".danae").addClass("danae2");

});




$('#first').mouseleave( function () {

   $(".danae").removeClass("danae2");

});



$('#first').click( function () {

   window.location.href = "danae.html";

});


$('#second').mouseover( function () {

   $(".mile").addClass("mile2");

});




$('#second').mouseleave( function () {

   $(".mile").removeClass("mile2");

});




$('#third').mouseover( function () {

   $(".catso").addClass("catso2");

});




$('#third').mouseleave( function () {

   $(".catso").removeClass("catso2");

});


$('#third').click( function () {

   window.location.href = "catso.html";

});


$('#homemenu').mouseover( function () {

   $("#homemenu").addClass("menufill");
    $("#animatefill").css("width","100%")

});



$('#homemenu').mouseleave( function () {

   $("#homemenu").removeClass("menufill");
 $("#animatefill").css("width","0%")



});


$('#middlemenu').mouseover( function () {

   $("#middlemenu").addClass("menufill");
   $("#animatefill2").css("width","100%")

});



$('#middlemenu').mouseleave( function () {

   $("#middlemenu").removeClass("menufill");
    $("#animatefill2").css("width","0%")

});

$('#lastmenu').mouseover( function () {

   $("#lastmenu").addClass("menufill");
   $("#animatefill3").css("width","100%")

});

$('#lastmenu').mouseleave( function () {

   $("#lastmenu").removeClass("menufill");
   $("#animatefill3").css("width","0%")

});

$('#more').mouseover( function () {

   $("more").addClass("letterspacing");

});

$('#more').mouseover( function () {

   $("#more").removeClass("letterspacing");

});





$('#problem').click( function () {

   $("#problem").css("opacity","1");
   $("#solution").css("opacity",".2");
   $("#what").css("opacity",".2");
   $("#click").css("opacity","0");


});


$('#what').click( function () {

   $("#what").css("opacity","1");
   $("#solution").css("opacity",".2");
   $("#problem").css("opacity",".2");



});


$('#solution').click( function () {

   $("#solution").css("opacity","1");
   $("#what").css("opacity",".2");
   $("#problem").css("opacity",".2");
   $("#arrow3").css("opacity","1");


});




});




