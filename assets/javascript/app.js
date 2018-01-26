//QUESTIONS OF THE LICH//////////////////////////////////////////////

//Variable Bank///////////////////////////////////////////////////////

//soundbank//
var startSound = new Audio("assets/sounds/start.mp3");
var welcomeSound = new Audio("assets/sounds/welcome.mp3");
var themeSound = new Audio("assets/sounds/theme.mp3");

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
function welcome() {
	welcomeSound.play();
	$("#welcome").fadeIn(2500);
	setTimeout(function () {
		// themeSound.play()
	}, 7000);
}

//Mute Button
function muteSound() {
	welcomeSound.muted=true;
	themeSound.muted=true;
	startSound.muted=true;
}

//function fadeOut {
function fadeWelcome() {
	$("#startGame").html("<h3>Get Ready</h3>");
	setTimeout(function() {
		themeSound.play();
		$("#welcome").fadeOut(500);
		$("#question").animate({left: '0%'}, 1000);
		setTimeout(function() {
			$("#question").animate({left: '-100%'}, 1000);	
		}, 2000);
		setTimeout(function() {
			$("#question").html("<h1>Starring Faceless Void!</h1>");
			$('#quizmaster').animate({right: '0%'}, 950); 
			$("#question").animate({left: '0%'}, 1000);
			$("#answera").animate({left: '0%'}, 1000)
		}, 3500);
		setTimeout(function() {
			slideOut()
		}, 6000);
	}, 3000);
}

//test button//
$("#muteButton").on("click", function() {
	muteSound()
});

$("#buttonIn").on("click", function() {
	fade()
	slideIn()
});

//Game progression////////////////////////////////////////////////
window.onload = function() {
	welcome()

$("#startGame").on("click", function() {
	startSound.play();
	fadeWelcome()
});
}//End of game progression