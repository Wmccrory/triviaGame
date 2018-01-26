//QUESTIONS OF THE LICH//////////////////////////////////////////////

//Variable Bank///////////////////////////////////////////////////////
var gameStarted = false;
var correctAnswer;

//Question arrays//
questionBank = [];
	questionBank[0] = ["Question A", "Correct Answer", "Incorrect Answer A", "Incorrect Answer B", "Incorrect Answer C"];
	questionBank[1] = ["Question B", "Correct Answer", "Incorrect Answer A", "Incorrect Answer B", "Incorrect Answer C"];
	questionBank[2] = ["Question C", "Correct Answer", "Incorrect Answer A", "Incorrect Answer B", "Incorrect Answer C"];
questionPick = [];
//soundbank//
var startSound = new Audio("assets/sounds/start.mp3");
var welcomeSound = new Audio("assets/sounds/welcome.mp3");
var themeSound = new Audio("assets/sounds/theme.mp3");

//Element mechanics///////////////////////////////////////////////////

//Get current question//
function questionGet() {
	var questionNumber = Math.floor(Math.random() * questionBank.length);
	var questionPick = questionBank[questionNumber];
	questionBank.splice(questionNumber, 1);
	$("#questionText").text(questionPick[0]);
	questionPick.splice(questionPick[0], 1);
	correctAnswer = questionPick[0];

	var answerPicker = Math.floor(Math.random() * questionPick.length);
	console.log(answerPicker);
	$("#answeratext").text(questionPick[answerPicker]);
	questionPick.splice(answerPicker, 1);

	var answerPicker = Math.floor(Math.random() * questionPick.length);
	console.log(answerPicker);
	$("#answerbtext").text(questionPick[answerPicker]);
	questionPick.splice(answerPicker, 1);

	var answerPicker = Math.floor(Math.random() * questionPick.length);
	console.log(answerPicker);
	$("#answerctext").text(questionPick[answerPicker]);
	questionPick.splice(answerPicker, 1);

	var answerPicker = Math.floor(Math.random() * questionPick.length);
	console.log(answerPicker);
	$("#answerdtext").text(questionPick[answerPicker]);
	questionPick.splice(answerPicker, 1);

	console.log(correctAnswer);
	console.log(questionNumber);
	console.log(questionPick);
	console.log(questionBank);
}


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

//Welcome sequence
function fadeWelcome() {
	gameStarted = true;
	$("#startGame").html("<h3>Get Ready</h3>");
	setTimeout(function() {
		themeSound.play();
		$("#welcome").fadeOut(500);
		$("#question").animate({left: '0%'}, 1000);
		
		setTimeout(function() {
			$("#question").animate({left: '-100%'}, 1000);	
		}, 2500);
		
		setTimeout(function() {
			$("#questionText").text("Starring Faceless Void!");
			$("#answerb").html("<h1>And You!</h1");
			$('#quizmaster').animate({right: '0%'}, 950); 
			$("#question").animate({left: '0%'}, 1000);
			$("#answerb").animate({left: '0%'}, 1000)
		}, 3500);
		
		setTimeout(function() {
			slideOut()
		}, 6500);

		setTimeout(function() {
			$("#answerb").html("<h2 id='answerbtext'>Answer B</h2");
			questionGet()
			slideIn()
		}, 7500);
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
	if (!gameStarted) 
	{
	startSound.play();
	fadeWelcome()
	}
});
}//End of game progression

//Test stuff
$("#slideButton").on("click", function () {
	questionGet()
})