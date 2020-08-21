$(document).ready(function(){

var word1 = [
	"dragons",
	"mermaids",
	"unicorns"
];

var randomWord1 = word1[Math.floor(Math.random()*word1.length)];

var word2 = [
  "floating",
  "deserted",
  "rotating"
];

var randomWord2 = word2[Math.floor(Math.random()*word2.length)];

var word3 = [
  "planet",
  "beach",
  "sanctuary"
];

var randomWord3 = word3[Math.floor(Math.random()*word3.length)];

$( ".word1" ).html(randomWord1);
$( ".word2" ).html(randomWord2);
$( ".word3" ).html(randomWord3);

});