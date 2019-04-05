$(document).ready(function(){
     $('.slider_1').addClass('slider_click_1');
     $('.slider_2').removeClass('slider_click_2');
     $('.slider_3').removeClass('slider_click_3');
     $('#slider_content_2').addClass('slider_content_none_2');
     $('#slider_content_3').addClass('slider_content_none_3');
     $('#slider_content_1').removeClass('slider_content_none_1'); 
});



$('#slide_1').click(function(event) {
     $('.slider_1').addClass('slider_click_1');
     $('.slider_1').fadeIn(500);
     $('.slider_2').removeClass('slider_click_2');
     $('.slider_3').removeClass('slider_click_3');
     $('#slider_content_2').addClass('slider_content_none_2');
     $('#slider_content_3').addClass('slider_content_none_3');
     $('#slider_content_1').removeClass('slider_content_none_1');
});

$('#slide_2').click(function(event) {
     $('.slider_2').addClass('slider_click_2');
        $('.slider_1').removeClass('slider_click_1');
           $('.slider_3').removeClass('slider_click_3');
            $('#slider_content_1').addClass('slider_content_none_1');
            $('#slider_content_3').addClass('slider_content_none_3');
            $('#slider_content_2').removeClass('slider_content_none_2');

});

$('#slide_3').click(function(event) {
     $('.slider_3').addClass('slider_click_3');
        $('.slider_1').removeClass('slider_click_1');
           $('.slider_2').removeClass('slider_click_2');
            $('#slider_content_1').addClass('slider_content_none_1');
            $('#slider_content_2').addClass('slider_content_none_2');
            $('#slider_content_3').removeClass('slider_content_none_3');
});


