var plays = ["Rock", "Paper", "Scissor"];
var compScore = 0;
var playerScore = 0;

function computer() {
	return Math.floor(Math.random() * 3);
}

function playRound(player, computer) {
	player--;

	if (player == computer) return "Draw!";
	if ((player == 1 && computer == 2) ||
		(player == 2 && computer == 0) ||
		(player == 0 && computer == 1)) {
		++compScore;
		return "You Lose! " + plays[player] + " beats " + plays[computer];
	} else {
		++playerScore;
		return "You Win! " + plays[player] + " beats " + plays[computer];
	}
}

var shuffle = () => {
	computerMove.setAttribute("src", "images/" + plays[i++] + ".png");

	if (i == plays.length) i = 0;
};

function updateScore() {
	document.querySelector(".score-pc").textContent = compScore;
	document.querySelector(".score-pl").textContent = playerScore;
}

var i = 0;
var buttons = document.querySelectorAll(".btn");
var startShuffle = setInterval(shuffle, 75);
var computerMove = document.getElementById("computer-move");

buttons.forEach((button) => {
	button.addEventListener("click", function (e) {
		//button.classList.remove("selected");
		var computerSelection = computer();

		var result = playRound(e.target.classList[1], computerSelection);

		document.querySelector("h2").textContent = result;

		computerMove.setAttribute("src", "images/" + plays[computerSelection] + ".png");

		//update score
		updateScore();

		// stop shuffling
		clearInterval(startShuffle);
	});
});
