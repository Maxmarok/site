$(document).ready(function(){
	$('.stack-block').fadeIn();
	$('#close-all').hide();
	
	/*first block*/
		$('#block1').on('click',this,function(){
			$('.stack-block').fadeOut();
			$('h1').show();
			$('html').fadeOut(function() {
				$(this).fadeIn();
				$('h1').html('First block title').show();
				$('#first-block').show();
				$('#first-block').find('.block-name').addClass('close').fadeIn();
				$('#first-block').find('.block-name').children('h2').addClass('close');
				$('.back').fadeIn(500);
			});
		});
	/*first block*/
	
	
	/*second block*/
		$('#block2').on('click',this,function(){
			$('.stack-block').fadeOut();
			$('h1').show();
			$('html').fadeOut(function() {
				$(this).fadeIn();
				$('h1').html('Second block title').show();
				$('#second-block').show();
				$('#second-block').find('.block-name').addClass('close').fadeIn();
				$('#second-block').find('.block-name').children('h2').addClass('close');
				$('.back').fadeIn(500);
				
				
			});
		});
	/*second block*/
	
	/*third block*/
		$('#block3').on('click',this,function(){
			$('.stack-block').fadeOut();
			$('h1').show();
			$('html').fadeOut(function() {
				$(this).fadeIn();
				$('h1').html('Third block title').show();
				$('#third-block').show();
				$('#third-block').find('.block-name').addClass('close').fadeIn();
				$('#third-block').find('.block-name').children('h2').addClass('close');
				$('.back').fadeIn(500);
			});
		});
		
	/*third block*/
	
	/*back button*/
	$('.back').on('click',this,function(){
			var audio = document.getElementsByTagName("audio")[0];
			audio.play();
			
			$('html').css({'overflow':'hidden'});
			$(this).hide();
			
			$('#page-preloader').find('.gray-mask').show();
			$('#page-preloader').fadeIn('fast');
			
			$('.content').delay(500).hide(function() {
				
				$('.content-block').find('.block-name').addClass('close').removeClass('open');
				$('.content-block').find('h2').removeClass('open').addClass('close');
				$('.content-block').hide();
				
				$('.inside').hide();
				$('#close-all').hide();
				
				$('h1').hide();
				$(this).show();
				
				$('h1').html('Epic Title').show();
				$('.stack-block').show();
				
				$(document).ready(function(){
					$('#page-preloader').find('.gray-mask').fadeOut(1000);
					$('#page-preloader').delay(1000).fadeOut('slow');
		
					$('html').css({'overflow':'auto'});
				});
			});
			
			
		});
	
	/*back button*/
	
	/*open-close*/
	$('.block-name').on('click','h2',function(){
		$(this).next().fadeIn();
		$(this).addClass('open').removeClass('close');
		$(this).parent().addClass('open').removeClass('close');
		$(this).parent().find('#open-close').html('Open title');
		$('#close-all').fadeIn(500);
	});
	
	$('.block-name').on('click','.open',function(){
		$(this).next().fadeOut();
		$(this).addClass('close').removeClass('open');
		$(this).parent().addClass('close').removeClass( 'open');
		$(this).parent().find('#open-close').html('Close title');
	});
	/*open-close*/
});