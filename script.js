

// cache the DOM; HTML variables that store DOM elements get tagged with an underscore, woo!

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');


// functions :p


// opponent behavior/cosmos
function getComputerChoice(){
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() * 3);	
	// b/c there are three possible outcomes
	return choices[randomNumber];
}

function convertToWord(letter){
	if( letter === 'r' ) return 'Rock';
	if( letter === 'p' ) return 'Paper';
	return 'Scissors';
}

function win(user, compy){
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = convertToWord(user) + ' beats ' + convertToWord(compy) + '. You win!';
}

function lose(){
	console.log('lose');
}

function draw(){
	console.log('draw');
}


// user behavior/cosmos
function game(userChoice){
	const computerChoice = getComputerChoice();
	switch(userChoice + computerChoice){
		case 'rs':
		case 'pr':
		case 'sp':
			win(userChoice, computerChoice);
			break;
		case 'rp':
		case 'ps':
		case 'sr':
			lose(userChoice, computerChoice);
			break;
		case 'rr':
		case 'pp':
		case 'ss':
			draw(userChoice, computerChoice);
			break;
	}
}

function main(){	// get it all into its own little cosmos!

	rock_div.addEventListener('click', function(){
		game('r');
	})

	paper_div.addEventListener('click', function(){
		game('p');
	})

	scissors_div.addEventListener('click', function(){
		game('s');
	})
}

main();