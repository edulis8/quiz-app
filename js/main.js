$(document).ready(function() {
	
	var questions = [
		{
			question: "What is the botanical name of the goldenberry plant?",
			answers: ["Physalis peruviana", "Physalis alkekengi", "Physalis philadelphica",
			 "Physalis pubescens"],
			placeNumber: 0,
			correct: 0
		},
		{
			question: "Where is the goldenberry from?",
			answers: ["South Africa", "Hawaii", "South America", "India"],
			placeNumber: 1,
			correct: 2
		},
		{
			question: "Where are most goldenberries imported inot the U.S. from?",
			answers: ["Peru", "Colombia", "New Zealand", "Turkey"],
			placeNumber: 2,
			correct: 1
		},
		{
			question: "What are goldenberries most closely related to?",
			answers: ["Tomatillos", "Gooseberries", "Tomatoes", "Blueberries"],
			placeNumber: 3,
			correct: 0
		},
	]

// global variables

var numberCorrect= 0;
var currentQuestion= 0;

//event listeners

$('button#submit').click(function(event) {
	if(currentQuestion < 4){
		checkCorrectness();
		postNewTotal();
		currentQuestion++;
		nextQuestion();
	}
	console.log(currentQuestion)
});

$('button#retry').click(function(event) {
	/* Act on the event */
	numberCorrect=0;
	currentQuestion=0;
	retry();
});



//functions

function checkCorrectness(){

	var answer = $("input[type='radio']:checked").val();
	var correctAnswer = questions[currentQuestion].correct;

	

	if(answer == correctAnswer){
		numberCorrect++;
		//console.log(numberCorrect);
	}
}

function postNewTotal(){
	$('span#num-correct').html(numberCorrect);

}

function nextQuestion(){

	if(currentQuestion < 4){
	
		$('div#answerholder'+currentQuestion).hide(); //if current question is 1, hides #answerholder1
		$('div#answerholder'+(currentQuestion+1)).show(); //shows #answerholder2
	}

	else{
		$('div#answerholder'+currentQuestion).hide(); 
		$('span#finalnumber').html(numberCorrect);
		$('#final-div').show();
	}
}

function retry(){
	$('#final-div').hide();
	$('div#answerholder1').show();


}



});