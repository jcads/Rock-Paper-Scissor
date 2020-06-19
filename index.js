var plays =["Rock", "Paper", "Scissor"];
var i = 0;

function computer() {
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

var choice;
var buttons = document.querySelectorAll(".btn");
var computerSelection = computer();
var computerMove = document.getElementById("computer-move");

function play() {
	buttons.forEach(button => {
		button.classList.remove("selected");

		button.addEventListener("click", function(e) {
			var result = playRound(e.target.classList[1], computerSelection);
	
			document.querySelector("h3").textContent = result;
			computerMove.setAttribute("src", 
					"images/"+plays[computerSelection] + ".png");
			button.classList.add("selected");
			clearInterval(startShuffle);
			
		});
	});
	
	var shuffle = () => {
		computerMove.setAttribute("src", 
				"images/"+plays[i++] + ".png");
	
		if (i == plays.length) i = 0;
	}
	
	var startShuffle = setInterval(shuffle, 75);
	playBtn.textContent = "Play Again";
}

var playBtn = document.querySelector(".play");
playBtn.addEventListener("click", () => play());


