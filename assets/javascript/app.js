//QUESTIONS OF THE LICH//////////////////////////////////////////////

//Element mechanics///////////////////////////////////////////////////

//Slide Out//
function slideOut() {
	$('.content').animate({left: '-100%'}, 1000);
	$('#quizmaster').animate({right: '-100%'}, 1000); 
}

//Slide in//
function slideIn() {
	$('.content').animate({left: '0%'}, 1000);
	$('#quizmaster').animate({right: '0%'}, 950); 
}

//Fade In
function unfade() {
	$("#welcome").fadeIn(2500);
}

//function fadeOut {
function fade() {	
	$("#welcome").fadeOut(500);
}

//test button//

$("#button").on("click", function() {
	unfade()
	slideOut()
});

$("#buttonIn").on("click", function() {
	fade()
	slideIn()
});

window.onload = function() {
	unfade()
}