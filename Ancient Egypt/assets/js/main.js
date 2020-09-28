$(document).ready (function () {
	console.log ('hello')


	$('.btn-gods').click(function(){
		$('.item').addClass('hide');
		$('.item.gods').removeClass('hide');
	});

	$('.btn-values').click(function(){
		$('.item').addClass('hide');
		$('.item.values').removeClass('hide');
	});

	$('.btn-beliefs').click(function(){
		$('.item').addClass('hide');
		$('.item.beliefs').removeClass('hide');
	});

	$('.btn-rituals').click(function(){
		$('.item').addClass('hide');
		$('.item.rituals').removeClass('hide');
	});

	$('.btn-symbols').click(function(){
		$('.item').addClass('hide');
		$('.item.symbols').removeClass('hide');
	});

});

