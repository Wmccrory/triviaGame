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

//Question arrays// Format is [Question, correct answer, incorrect answer, incorrect answer, incorrect answer]
questionBank = [];
	questionBank[0] = ["Oracle paid Phantom Assassin to:", "Kill the enemies he foresaw killing him", "Spare his life after discovering the bounty on his head", "Be his bodyguard on the battlefield", "Kill the hero preventing his prophecy from being fulfilled"];
	questionBank[1] = ["Roshan always resurrects because:", "Cursed by the gods for killing a shopkeeper", "Dire imbues him with immortality", "Lots of practice, rest, exercise, and eating healthy", "His hate is too strong for the afterlife"];
	questionBank[2] = ["Before joining the war, Bristleback:", "Worked at a bar", "Was renowned for his skill on the battlefield", "Lived a quiet life in a cottage", "Was a feral beast hunted for his quills"];
	questionBank[3] = ["Tusk fights in the war because:", "Bet with a bartender to win free drinks", "The frozen north is at risk by the war of the ancients", "Supreme belief in the righteousness of radiant", "Corruption by the dire"];
	questionBank[4] = ["Timbersaw has been driven mad by:", "Evil plants killing everyone in his village", "Unreasonable demands by the owner of the sawmill he worked at", "The casualties of the war", "The taunting and bullying from Nature's Prophet"];
	questionBank[5] = ["The Ancients came to the planet after:", "Fighting inside the moon until it blew up", "Created by aliens to fight wars in space", "Protecting the universe from the ravages of beyond", "They've always been on the planet"];
	questionBank[6] = ["Rubick became Grand Magus by:", "Killing all other magus, making him the Grand by default", "Inherited the title from his father", "Centuries of study and practice", "Making the position up"];
	questionBank[7] = ["Invoker's magic relies on him:", "Knowing how to correctly pronounce words", "Maintaining a purity of will", "Never losing a fight", "Protecting powerful artifacts from thieves"];
	questionBank[8] = ["Alchemist once humiliated himself by:", "Blowing up a mountain when trying to turn it into gold", "Having a bathroom accident while giving a speech to academics", "Accidentally plagiarizing another scholar in his thesis", "Failing to transmute basic elements during his final testing"];
	questionBank[9] = ["In truth, Pugna is:", "A spoiled child", "The pure manifestation of evil", "The most powerful hero, sought after by both ancients", "Roshan's owner"];
	questionBank[10] = ["Anti-Mage:", "Really, REALLY hates magic", "Is a failed sorceror", "Attempts to consolidate magical power by slaying other magic users", "Preserves the magic reservoir the planet requires to exist"];
	questionBank[11] = ["Bloodseeker fights in the war because:", "His twin flayed gods always bleed and need blood transfusions", "He is a very thirsty vampire", "His purpose in life is to cause others pain", "He is a mercenary for the Dire"];
	questionBank[12] = ["Shadowfiend and DOOM teamed up to:", "Beat the shit out of Shadow Demon", "Magnify the Dire's effect on the planet", "Quell an insurrection in Hell", "Imbue a powerful demon with even more power"];
	questionBank[13] = ["Phoenix is:", "A sentient star who manifests as a bird", "A magical magician powered by solar energy", "A bored god", "A golem crafted from fire and wind"];
	questionBank[14] = ["Huskar was once almost martyred until:", "Dazzle cast shallow grave, which Huskar never forgave him for", "The gods determined he would be their emissary to the Ancients", "His body began to heal itself", "The Radiant intervened on his behalf"];
	questionBank[15] = ["Sniper was exiled from his village because:", "He was too good a shot", "He refused to follow orders", "Tradition dictated the firstborn son must always leave home", "He failed to protect against an incursion from the Dead God"];
	questionBank[16] = ["Abaddon got his powers by:", "Inhaling mystical vapors", "An ethereal being fused with his weapon", "Drinking magical elixer", "An unholy deal with Shadow Demon"];
	
questionPick = []; //Temporary array for current question

//soundbank//
var correctSoundArray = 
[
	"assets/sounds/correct/correcta.mp3",
	"assets/sounds/correct/correctb.mp3",
	"assets/sounds/correct/correctc.mp3",
	"assets/sounds/correct/correctd.mp3",
	"assets/sounds/correct/correcte.mp3",
	"assets/sounds/correct/correctf.mp3",
]

var incorrectSoundArray =
[
	"assets/sounds/incorrect/incorrecta.mp3",
	"assets/sounds/incorrect/incorrectb.mp3",
	"assets/sounds/incorrect/incorrectc.mp3",
	"assets/sounds/incorrect/incorrectd.mp3",
	"assets/sounds/incorrect/incorrecte.mp3",
	"assets/sounds/incorrect/incorrectf.mp3",
]

var questionSoundArray = 
[
	"assets/sounds/question/questiona.mp3",
	"assets/sounds/question/questionb.mp3",
	"assets/sounds/question/questionc.mp3",
	"assets/sounds/question/questiond.mp3",
	"assets/sounds/question/questione.mp3",
	"assets/sounds/question/questionf.mp3",
]

var unansweredSoundArray =
[
	"assets/sounds/unanswered/unanswereda.mp3",
	"assets/sounds/unanswered/unansweredb.mp3",
	"assets/sounds/unanswered/unansweredc.mp3",
	"assets/sounds/unanswered/unansweredd.mp3",
	"assets/sounds/unanswered/unanswerede.mp3",
	"assets/sounds/unanswered/unansweredf.mp3",
]

var startSound = new Audio("assets/sounds/start.mp3");
var welcomeSound = new Audio("assets/sounds/welcome.mp3");
var themeSound = new Audio("assets/sounds/theme.mp3");
var faceintroSound = new Audio("assets/sounds/faceIntro.mp3");
var correctSound;
var incorrectSound;
var unansweredSound;
var questionSound;
var muteSound = false;

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
	if (answerCheckerText == correctAnswer) 
		{
			right++;
			correctSoundPlayer()
			$("#quizmaster").append("<div class = 'scoreButtonRight'>");
			$(".scoreButtonRight").animate({opacity:0.7},600);
		}
		else
		{
			wrong++
			incorrectSoundPlayer()
			$("#quizmaster").append("<div class = 'scoreButtonWrong'>");
			$(".scoreButtonWrong").animate({opacity:0.7},600);
		}
		if (right === 6 || wrong === 6)
		{
			setTimeout(function ()
			{
				console.log("Game Over");
				slideOut()
				endingSequence()
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
			setTimeout(function ()
			{
				questionSoundPlayer()
			}, 4000);
		}
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
			$("#questionText").text("Out of time!");
			$("#answeratext").text("Times Up! Times Up! Times Up! Times Up! Times Up! Times Up! Times Up!");
			$("#answerbtext").text("Times Up! Times Up! Times Up! Times Up! Times Up! Times Up! Times Up!");
			$("#answerctext").text("Times Up! Times Up! Times Up! Times Up! Times Up! Times Up! Times Up!");
			$("#answerdtext").text("Times Up! Times Up! Times Up! Times Up! Times Up! Times Up! Times Up!");
		$("#quizmaster").append("<div class = 'scoreButtonUnanswered'>");
		$(".scoreButtonUnanswered").animate({opacity:0.7},600);
		unansweredSoundPlayer()
		if (unanswered === 6)
		{
			setTimeout(function ()
			{
				console.log("Game Over");
				slideOut()
				endingSequence()
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
			setTimeout(function ()
				{
				questionSoundPlayer()
				},4000);
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
	}, 7000);
}

//Welcome sequence//
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
			faceintroSound.play()
		}, 4000);
		
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

//End Sequence//
function endingSequence() {
	slideOut()
	setTimeout(function ()
	{
		$("#questionText").text("Your time is.. up!");
		$('.content').animate({left: '0%'}, 1000);
	}, 2000);

	setTimeout(function ()
	{
		$("#answeratext").text("CORRECT: ");
		$("#quizmaster").html("<img src='assets/images/voidportrait.gif' alt='Faceless Void portrait' />");
		for (i = 0; i < right; i++) {
			$("#answera").append("<div class = 'scoreButtonRight'>");
			$(".scoreButtonRight").animate({opacity:0.7},100);
		}
		$('#answera').animate({left: '0%'}, 1000);
		$('#quizmaster').animate({right: '0%'}, 950); 
	}, 3000);

	setTimeout(function ()
	{
		$("#answerbtext").text("INCORRECT: ");
		for (i = 0; i < wrong; i++) {
			$("#answerb").append("<div class = 'scoreButtonWrong'>");
			$(".scoreButtonWrong").animate({opacity:0.7},100);
		}
		$('#answerb').animate({left: '0%'}, 1000);
	}, 3500);

	setTimeout(function ()
	{
		faceintroSound.play()
		$("#answerctext").text("UNANSWERED: ");
		for (i = 0; i < unanswered; i++) {
			$("#answerc").append("<div class = 'scoreButtonUnanswered'>");
			$(".scoreButtonUnanswered").animate({opacity:0.7},100);
		}
		$('#answerc').animate({left: '0%'}, 1000);
	}, 4000);

	setTimeout(function ()
	{
		slideOut()
		$("#exitSequenceBody").fadeIn(3000);
		$("#exitSequenceText").addClass("transform");
	}, 10000);
}

 ////////////////////////
//Sound Player Functions
function correctSoundPlayer()
{	var j = Math.floor(Math.random() * correctSoundArray.length)
	correctSound = new Audio(correctSoundArray[j]);
	correctSound.play();
	correctSoundArray.splice(j, 1);
}

function incorrectSoundPlayer()
{	var j = Math.floor(Math.random() * incorrectSoundArray.length)
	incorrectSound = new Audio(incorrectSoundArray[j]);
	incorrectSound.play();
	incorrectSoundArray.splice(j, 1);
}

function questionSoundPlayer()
{	var j = Math.floor(Math.random() * questionSoundArray.length)
	questionSound = new Audio(questionSoundArray[j]);
	questionSound.play();
	questionSoundArray.splice(j, 1);
}

function unansweredSoundPlayer()
{	var j = Math.floor(Math.random() * unansweredSoundArray.length)
	unansweredSound = new Audio(unansweredSoundArray[j]);
	unansweredSound.play();
	unansweredSoundArray.splice(j, 1);
}

//Mute Button
function workPlease() 
{
// 	welcomeSound.muted=true;
	themeSound.muted = true;
// 	startSound.muted=true;
	muteSound = true;
}

//mute button//
$("#muteButton").on("click", function() {
	workPlease()
});

///////////////////////////////////////////////////////////////////
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
	}
});

//Refreshes game after completion////////////////////////////////
$("#exitSequenceBody").on("click", function () {
	window.location.reload();
});
}//End of game progression

//Test stuff