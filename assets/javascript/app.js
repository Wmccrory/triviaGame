//QUESTIONS OF THE VOID//////////////////////////////////////////////

//Variable Bank///////////////////////////////////////////////////////

var gameStarted = false; //Checking if game has started
var answerPicked = true;
var correctAnswer; //Correct answer variable to compare for condition checking

var answerChecker; //Pulling ID of clicked element
var answerCheckerText; //Converting ID into string to check against correct answer

var questionNumber; //Determines which question to pull from questionBank array
//var anserPicker; temporary variable plucking answers out of the array

var right = 0;
var wrong = 0;
var unanswered = 0;

var seconds = 15; //Timing increment mechanisms.
var intervalId; //Trigger of timing increment.  1000 = 1 second

//Question arrays//
questionBank = [];
	questionBank[0] = ["Question A", "Correct Answer", "Incorrect Answer A", "Incorrect Answer B", "Incorrect Answer C"];
	questionBank[1] = ["Question B", "Correct Answer", "Incorrect Answer A", "Incorrect Answer B", "Incorrect Answer C"];
	questionBank[2] = ["Question C", "Correct Answer", "Incorrect Answer A", "Incorrect Answer B", "Incorrect Answer C"];
	questionBank[3] = ["Question D", "Correct Answer", "Incorrect Answer A", "Incorrect Answer B", "Incorrect Answer C"];
	questionBank[4] = ["Question E", "Correct Answer", "Incorrect Answer A", "Incorrect Answer B", "Incorrect Answer C"];
	questionBank[5] = ["Question F", "Correct Answer", "Incorrect Answer A", "Incorrect Answer B", "Incorrect Answer C"];
	questionBank[6] = ["Question G", "Correct Answer", "Incorrect Answer A", "Incorrect Answer B", "Incorrect Answer C"];
	questionBank[7] = ["Question H", "Correct Answer", "Incorrect Answer A", "Incorrect Answer B", "Incorrect Answer C"];
	questionBank[8] = ["Question I", "Correct Answer", "Incorrect Answer A", "Incorrect Answer B", "Incorrect Answer C"];
	questionBank[9] = ["Question J", "Correct Answer", "Incorrect Answer A", "Incorrect Answer B", "Incorrect Answer C"];
	questionBank[10] = ["Question K", "Correct Answer", "Incorrect Answer A", "Incorrect Answer B", "Incorrect Answer C"];
	questionBank[11] = ["Question L", "Correct Answer", "Incorrect Answer A", "Incorrect Answer B", "Incorrect Answer C"];
	questionBank[12] = ["Question M", "Correct Answer", "Incorrect Answer A", "Incorrect Answer B", "Incorrect Answer C"];
	questionBank[13] = ["Question N", "Correct Answer", "Incorrect Answer A", "Incorrect Answer B", "Incorrect Answer C"];
	questionBank[14] = ["Question O", "Correct Answer", "Incorrect Answer A", "Incorrect Answer B", "Incorrect Answer C"];
	questionBank[15] = ["Question P", "Correct Answer", "Incorrect Answer A", "Incorrect Answer B", "Incorrect Answer C"];


questionPick = []; //Temporary array for current question

//soundbank//
var startSound = new Audio("assets/sounds/start.mp3");
var welcomeSound = new Audio("assets/sounds/welcome.mp3");
var themeSound = new Audio("assets/sounds/theme.mp3");
var correctSound = new Audio("assets/sounds/correct.mp3");
var incorrectSound = new Audio("assets/sounds/incorrect.mp3");
var unansweredSound = new Audio("assets/sounds/unanswered.mp3");

//Element mechanics///////////////////////////////////////////////////

//Get current question//
function questionGet() 
{
	answerPicked = false;
	questionNumber = Math.floor(Math.random() * questionBank.length);
	questionPick = questionBank[questionNumber];
	questionBank.splice(questionNumber, 1);
	$("#questionText").text(questionPick[0]);
	questionPick.splice(questionPick[0], 1);
	correctAnswer = questionPick[0].toString();

	var answerPicker = Math.floor(Math.random() * questionPick.length);
	$("#answeratext").text(questionPick[answerPicker]);
	questionPick.splice(answerPicker, 1);

	var answerPicker = Math.floor(Math.random() * questionPick.length);
	$("#answerbtext").text(questionPick[answerPicker]);
	questionPick.splice(answerPicker, 1);

	var answerPicker = Math.floor(Math.random() * questionPick.length);
	$("#answerctext").text(questionPick[answerPicker]);
	questionPick.splice(answerPicker, 1);

	var answerPicker = Math.floor(Math.random() * questionPick.length);
	$("#answerdtext").text(questionPick[answerPicker]);
	questionPick.splice(answerPicker, 1);

	countDown()
}

//Check picked answer against correct answer
function answerCheck() {
	answerCheckerText = $("#" + answerChecker).text().trim();
}

//Timing Mechanisms
function countDown ()
{
	clearInterval(intervalId);
	intervalId = setInterval(decrement, 1000);
}

function decrement ()
{
	seconds--;
	$("#timerBody").html(seconds);
	if (seconds === 0)
	{
		answerPicked = true;
		clearInterval(intervalId);
		unanswered++;
		seconds = 15;
		$("#timerBody").html("");
		$("#quizmaster").append("<div class = 'scoreButtonUnanswered'>");
		$(".scoreButtonUnanswered").animate({opacity:0.7},600);
		unansweredSound.play()
		if (unanswered === 6)
		{
			console.log("Out of time");
			return;
		}
		else
		{
			setTimeout(function ()
				{
					slideOut()
					setTimeout(function ()
					{	
					questionGet()
					}, 1000);
					slideIn()
				}, 2000);
		}
	}
}

//Slide Out//
function slideOut() 
{
	$('.content').animate({left: '-100%'}, 1000);
	$('.contentAnswer').animate({left: '-100%'}, 1000);
	$('#quizmaster').animate({right: '-100%'}, 1000); 
}

//Slide in//
function slideIn() {
	$('.content').animate({left: '0%'}, 1000);
	$('.contentAnswer').animate({left: '0%'}, 1000);
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

//Welcome sequence
function fadeWelcome() {
	gameStarted = true;
	$("#startGame").html("<h3>Get Ready</h3>");
	setTimeout(function() 
	{
		themeSound.play();
		$("#welcome").fadeOut(500);
		$("#question").animate({left: '0%'}, 1000);
		
		setTimeout(function() 
		{
			$("#question").animate({left: '-100%'}, 1000);	
		}, 2500);
		
		setTimeout(function() 
		{
			$("#questionText").text("Starring Faceless Void!");
			$("#answerb").html("<h1>And You!</h1");
			$('#quizmaster').animate({right: '0%'}, 950); 
			$("#question").animate({left: '0%'}, 1000);
			$("#answerb").animate({left: '0%'}, 1000)
		}, 3500);
		
		setTimeout(function() 
		{
			slideOut()
		}, 6500);

		setTimeout(function() 
		{
			$("#answerb").html("<h2 id='answerbtext'>Answer B</h2");
			questionGet()
			answerPicked = false;
			slideIn()
			countDown()
		}, 7500);
	}, 3000);
}

//Mute Button
function muteSound() {
	welcomeSound.muted=true;
	themeSound.muted=true;
	startSound.muted=true;
	correctSound.muted=true;
	incorrectSound.muted=true;
	unansweredSound.muted=true;
}

//mute button//
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

//Selecting an answer/////////////////////////////////////////////
$(".contentAnswer").on("click", function () {
	if (!answerPicked) 
	{
		clearInterval(intervalId);
		seconds = 15;
		$("#timerBody").html("");

		answerPicked = true;
		answerChecker = $(this).attr("id");
		answerCheck()
		if (answerCheckerText == correctAnswer) 
		{
			right++;
			correctSound.play();
			$("#quizmaster").append("<div class = 'scoreButtonRight'>");
			$(".scoreButtonRight").animate({opacity:0.7},600);
		}
		else
		{
			wrong++
			incorrectSound.play();
			$("#quizmaster").append("<div class = 'scoreButtonWrong'>");
			$(".scoreButtonWrong").animate({opacity:0.7},600);
		}
		if (right === 6 || wrong === 6)
		{
			setTimeout(function ()
			{
				console.log("Game Over");
				slideOut()
			}, 2000);
		}
		else
		{
			setTimeout(function ()
			{
				slideOut()
				setTimeout(function ()
				{	
				questionGet()
				}, 1000);
				slideIn()
			}, 2000);
		}
	}
});
}//End of game progression

//Test stuff