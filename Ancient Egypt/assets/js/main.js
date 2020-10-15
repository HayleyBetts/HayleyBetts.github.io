$(document).ready (function () {
	console.log ('hello')

	$(".home").click(function () {
 	 $(".home").addClass("hide");
  	$(".page").removeClass("hide");
	});

/*
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
*/

	$('.Click-reset').click(function(){
		$('.item').removeClass('hide');
		$('.caption').addClass('hide');
	});

	$('.btn-nav').click(function(){
		$('.item').addClass('hide');
		$('.item.Egyptianlife').removeClass('hide');
	});

	/*Symbols*/

$(".btn-Symbols").click(function () {
  $(".item").addClass("hide");
  $(".caption").addClass("hide");

  $(".item").removeClass("samesize");

  $(".item.Symbols").removeClass("hide");
  $(".item.Symbols .caption").removeClass("hide");

  $(".item.Symbols").addClass("samesize");
});

/*Symbols*/

/*Religion*/

$(".btn-Religion").click(function () {
  $(".item").addClass("hide");
  $(".caption").addClass("hide");

  $(".item").removeClass("samesize");

  $(".item.Religion").removeClass("hide");
  $(".item.Religion .caption").removeClass("hide");

  $(".item.Religion").addClass("samesize");
});



/*Religion*/

/*Rituals*/

$(".btn-Rituals").click(function () {
  $(".item").addClass("hide");
  $(".caption").addClass("hide");

  $(".item").removeClass("samesize");

  $(".item.Rituals").removeClass("hide");
  $(".item.Rituals .caption").removeClass("hide");

  $(".item.Rituals").addClass("samesize");
});


/*Rituals*/

/*EgyptianLife*/

$(".btn-Egyptianlife").click(function () {
  $(".item").addClass("hide");
  $(".caption").addClass("hide");

 $(".item").removeClass("samesize");

  $(".item.Egyptianlife").removeClass("hide");
  $(".item.Egyptianlife .caption").removeClass("hide");

  $(".item.Egyptianlife").addClass("samesize");
});

/*EgyptianLife*/

/*Pharaohs*/


$(".btn-Pharaohs").click(function () {
  $(".item").addClass("hide");
  $(".caption").addClass("hide");

  $(".item").removeClass("samesize");

  $(".item.Pharaohs").removeClass("hide");
  $(".item.Pharaohs .caption").removeClass("hide");

  $(".item.Pharaohs").addClass("samesize");
});

/*Pharaohs*/


$(".btn-Book").click(function () {
  $(".caption").addClass("hide");
  $(".item").addClass("hide");


  $(".About.Book").removeClass("hide");
  $(".About.Book .caption").removeClass("hide");

});

});

