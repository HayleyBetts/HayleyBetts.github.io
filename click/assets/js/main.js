$(document).ready (function () {
	console.log ('hello world')

	$('.btn-box').click(function(){
		$('.box').addClass('active')
	});

	$('.btn-slide').click(function(){
		$('.slide').addClass('active')
	});

	$('.box').click(function(){
		$(this).toggleClass('active')
	});

	$('.btn-red').click(function(){
		$('.item').addClass('hide');
		$('.item.red').removeClass('hide');
	});

	$('.btn-shape').click(function(){
		$('.item').addClass('hide');
		$('.item.shape').removeClass('hide');
	});

	$('.btn-scan').click(function(){
		$('.item').addClass('hide');
		$('.item.scan').removeClass('hide');
	});


	$('.btn-reset').click(function(){
		$('.item').removeClass('hide');
	});


});