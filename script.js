
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

// return human-readable strings in place of variables/letters
function convertToWord(letter){
	if( letter === 'r' ) return 'Rock';
	if( letter === 'p' ) return 'Paper';
	return 'Scissors';
}


// winning conditions + behavior
function win(user, compy){
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	const user_div = document.getElementById(user);

	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(compy)}${smallCompWord}. You win!`;
	user_div.classList.add('green-glow');
	
	setTimeout(() => user_div.classList.remove('green-glow'), 1000);
}

// losing conditions + behavior
function lose(user, compy){
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	const user_div = document.getElementById(user);

	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord(user)}${smallUserWord} loses to ${convertToWord(compy)}${smallCompWord}. You lost.`;
	user_div.classList.add('red-glow');
	
	setTimeout(() => user_div.classList.remove('red-glow'), 1000);
}


// what about the draw?
function draw(user, compy){
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	const user_div = document.getElementById(user);

	result_p.innerHTML = `${convertToWord(user)}${smallUserWord} equals ${convertToWord(compy)}${smallCompWord}. It's a draw.`;
	user_div.classList.add('grey-glow');
	
	setTimeout(() => user_div.classList.remove('grey-glow'), 1000);
}


// user behavior/game cosmos; 
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
	rock_div.addEventListener('click', () => game('r'));
	paper_div.addEventListener('click', () => game('p'));
	scissors_div.addEventListener('click', () => game('s'));
}

main();