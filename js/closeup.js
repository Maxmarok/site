$(document).ready(function(){
 
    // hide #back-top first
    $("#back-top").hide();
 
    // fade in #back-top
    $(function () {
		$(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
 
        // scroll body to 0px on click
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
		
		// close all blocks
		$('#close-all a').click(function () {
			$('.block-name').removeClass('open').addClass('close');
			$('.block-name').find('h2').removeClass('open').addClass('close');
			$('.block-name').find('h2#open-close').html('Close title');
			$('.inside').fadeOut(500);
			$('#close-all').fadeOut(1000);
            return false;
        });
    });
 
});