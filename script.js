

// cache the DOM; HTML variables that store DOM elements get tagged with an underscore, woo!
const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');


// functions :p
function getComputerChoice(){
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function win(){
	console.log('win');
}

function lose(){
	console.log('lose');
}

function draw(){
	console.log('draw');
}

function game(userChoice){
	const computerChoice = getComputerChoice();
	switch(userChoice + computerChoice){
		case 'rs':
		case 'pr':
		case 'sp':
			win();
			break;
		case 'rp':
		case 'ps':
		case 'sr':
			lose();
			break;
		case 'rr':
		case 'pp':
		case 'ss':
			draw();
			break;
	}
}

function main(){	// get it all into its own little cosmos

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