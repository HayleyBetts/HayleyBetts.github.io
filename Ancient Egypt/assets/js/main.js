$(document).ready (function () {
	console.log ('hello')


	$('.btn-Home').click(function(){
		$('.nav').toggleClass('active');
	});


	$('.btn-Religion').click(function(){
		$('.item').addClass('hide');
		$('.item.Religion').removeClass('hide');
	});

	$('.btn-Symbols').click(function(){
		$('.item').addClass('hide');
		$('.item.Symbols').removeClass('hide');
	});

	$('.btn-Rituals').click(function(){
		$('.item').addClass('hide');
		$('.item.Rituals').removeClass('hide');
	});

	$('.btn-Pharaohs').click(function(){
		$('.item').addClass('hide');
		$('.item.Pharaohs').removeClass('hide');
	});

	$('.btn-Egyptianlife').click(function(){
		$('.item').addClass('hide');
		$('.item.Egyptianlife').removeClass('hide');
	});

	$('.btn-Reset').click(function(){
		$('.item').removeClass('hide');
	});

	$('.btn-nav').click(function(){
		$('.item').addClass('hide');
		$('.item.Egyptianlife').removeClass('hide');
	});

});

