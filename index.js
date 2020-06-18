var plays =["Rock", "Paper", "Scissor"];

function computerPlay() {
	return Math.floor(Math.random() * 3);
}

function playRound(player, computer) {
	player--;
	if (player == computer) return 'Draw!'
	if ((player == 1 && computer == 2) || (player == 2 && computer == 0) || (player == 0 && computer == 1)) {
		return 'You Lose! '+ plays[player] + ' beats ' + plays[computer]
	} else {
		return 'You Win! '+ plays[player] + ' beats ' + plays[computer];
	}
}

function game() {
	for (var i = 0; i < 5; i++) {
		const playerSelection = prompt("Choose:\n\t(1)Rock\n\t(2)Paper\n\t(3)Scissor");
		const computerSelection = computerPlay();
		console.log("You: " + plays[playerSelection-1]);
		console.log("Computer: " + plays[computerSelection]);
		console.log(playRound(playerSelection, computerSelection));
	}
}

document.querySelector("button").addEventListener("click", function () {
	game();
})
