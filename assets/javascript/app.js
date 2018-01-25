//QUESTIONS OF THE LICH//////////////////////////////////////////////

//Slide mechanics///////////////////////////////////////////////////

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

//test button//

$("#button").on("click", function() {
	slideOut()
});

$("#buttonIn").on("click", function() {
	slideIn()
});