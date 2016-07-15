$(document).ready(function(){
	$('.attack').fadeIn('fast');
	$('#close-all').hide();

		/*первый открыть*/
		/*неготов
		$('#attack1').on('click',this,function(){
			$(this).html('Раздел не готов');
			$(this).delay(1000).animate({opacity: 0}, function() {
				$(this).animate( {opacity: 1});
				$(this).html('Разрушение родного мира');
			});
			
		});
		/неготов*/
		
		/*открыть*/
		$('#attack1').on('click',this,function(){
			$('.attack').fadeOut(250);
			$('html').animate({opacity: 0}, function() {
				$(this).css({'background-image':'url(img/red.jpg)'}).animate( {opacity: 1});
				$('h1').html('Разрушение родного мира').fadeIn(2000);
				/*$('h1').fadeIn(2000);*/
				$('#home-world').fadeIn(2000);
				$('#home-world').find('.block-name').delay(500).fadeIn(2000);
				$('#home-world').find('.block-name').addClass('close');
				$('#home-world').find('h2').addClass('close');
				$('.back').delay(1000).fadeIn(1500);
			});
		});
		//*открыть*/
		
		/*закрыть*/
		$('.back').on('click',this,function(){
			$('.back').fadeOut(250);
			$('#home-world').find('.block-name').addClass('close').removeClass('open');
			$('#home-world').find('h2').removeClass('open').addClass('close');
			$('.inside').fadeOut('fast');
			$('#home-world').fadeOut('fast');
			$('#close-all').fadeOut(250);
			$('h1').fadeOut(250);
			$('html').animate({opacity: 0}, function() {
				$(this).css({'background-image':'url(img/riftred.jpg)'}).animate( {opacity: 1});
				$('.attack').fadeIn(250);
				$('h1').html('Кор Скринер');
			});
		});
		/*/закрыть*/
		
		/*/первый*/
	
	
	
		/*второй*/
		
		/*неготов
		$('#attack2').on('click',this,function(){
			$(this).html('Раздел не готов');
			$(this).delay(1000).animate({opacity: 0}, function() {
				$(this).animate( {opacity: 1});
				$(this).html('Вторжение в Азерот');
			});
			
		});
		/неготов*/
		
		/*открыть*/
		$('#attack2').on('click',this,function(){
			$('.attack').fadeOut(250);
			$('html').animate({opacity: 0}, function() {
				$(this).css({'background-image':'url(img/red.jpg)'}).animate( {opacity: 1});
				$('h1').html('Вторжение в Азерот');
				$('h1').fadeIn(2000);
				$('#azeroth').find('.block-name').delay(500).fadeIn(2000);
				$('#azeroth').find('.block-name').addClass('close');
				$('#azeroth').find('h2').addClass('close');
				$('.back').delay(1000).fadeIn(1500);
			});
		});
		/*/открыть*/
		/*закрыть*/
		$('.back').on('click',this,function(){
			$('.back').fadeOut(250);
			$('#azeroth').find('.block-name').addClass('close');
			$('#azeroth').find('.block-name').removeClass('open');
			$('#azeroth').find('h2').addClass('close');
			$('.inside').fadeOut('fast');
			$('#azeroth').fadeOut('fast');
			$('#close-all').fadeOut(250);
			$('h1').fadeOut(250);
			$('html').animate({opacity: 0}, function() {
				$(this).css({'background-image':'url(img/riftred.jpg)'}).animate( {opacity: 1});
				$('.attack').fadeIn(250);
				$('h1').html('Кор Скринер');
			});
		});
		/*/закрыть*/
		/*/второй*/
	
	
		/*третий*/
		/*открыть*/
		$('#attack3').on('click',this,function(){
			$('.attack').fadeOut(250);
			$('html').animate({opacity: 0}, function() {
				$(this).css({'background-image':'url(img/red.jpg)'}).animate( {opacity: 1});
				$('h1').html('Осада Оргриммара');
				$('h1').fadeIn(2000);
				$('#horde').find('.block-name').delay(500).fadeIn(2000);
				$('#horde').find('.block-name').addClass('close');
				$('#horde').find('h2').addClass('close');
				$('.back').delay(1000).fadeIn(1500);
			});
		});
		/*/открыть*/
		/*закрыть*/
		$('.back').on('click',this,function(){
			$('.back').fadeOut(250);
			$('#azeroth').find('.block-name').addClass('close');
			$('#azeroth').find('.block-name').removeClass('open');
			$('#azeroth').find('h2').addClass('close');
			$('#horde').slideUp(500);
			$('#close-all').fadeOut(250);
			$('h1').fadeOut(250);
			$('html').animate({opacity: 0}, function() {
				$(this).css({'background-image':'url(img/riftred.jpg)'}).animate( {opacity: 1});
				$('.attack').fadeIn('fast');
				$('h1').html('Кор Скринер');
			});
		});
		/*/закрыть*/
		/*/третий*/






/*третий внутренний*/
	$('.horde').on('click','h2',function(){
		//$(this).parent().toggleClass('block-name-open', 'block-name-close');
		$(this).next().fadeIn(500);
		$(this).addClass('open');
		$(this).removeClass('close');
		$(this).parent().addClass('open');
		$(this).parent().removeClass('close');
		$('#close-all').fadeIn(1000);
		$(this).html('Закрыть');
	});
	
	
	$('.horde').on('click','.open',function(){
		//$(this).parent().toggleClass('block-name-close', 'block-name-open');
		$(this).next().fadeOut(500);
		$(this).addClass('close');
		$(this).removeClass('open');
		$(this).parent().addClass('close');
		$(this).parent().removeClass( 'open');
		$(this).html('Открыть');		
	});
/*третий внутренний*/	
	

	$('.block-name').on('click','h2',function(){
		//$(this).parent().toggleClass('block-name-open', 'block-name-close');
		$(this).next().fadeIn(500);
		$(this).addClass('open');
		$(this).removeClass('close');
		//$(this).attr("id", "open-close").html('Закрыть');
		$(this).parent().addClass('open');
		$(this).parent().removeClass('close');
		$('#close-all').fadeIn(1000);
		
	});
	
	$('.block-name').on('click','.open',function(){
		//$(this).parent().toggleClass('block-name-close', 'block-name-open');
		$(this).next().fadeOut(500);
		$(this).addClass('close');
		$(this).removeClass('open');
		//$(this).attr("id", "open-close").html('Открыть');
		$(this).parent().addClass('close');
		$(this).parent().removeClass( 'open');
	});
});