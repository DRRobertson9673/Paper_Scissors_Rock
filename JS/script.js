var totalWins = 0
var totalLoses = 0

function game(userName){
var games = prompt("How many rounds to you want to play?");
games=parseInt(games);

var counter = 0
var wins = 0
var loses = 0

while (isNaN(games) || games <= 0) {
    games = prompt("your input is incorrect, please enter a positive number (eg 1, 5 or 10");
    games=parseInt(games);
}

do {

var userChoice = prompt("Please enter R, P or S for rock, paper or scissors").toUpperCase();
if (userChoice !== "R" && userChoice !== "P" && userChoice !== "S") {
    userChoice = prompt("Your entry was incorrect, please enter R, P or S for rock, paper or scissors").toUpperCase();
}

var computerResponse
var computerChoice = Math.floor(Math.random() * 3);
switch (computerChoice) {
    case 0:
        computerResponse = "R"
        break
    case 1:
        computerResponse = "P"
        break
    case 2:
        computerResponse = "S"
}

if (userChoice === computerResponse) {
    alert(`${userName} Draws with the computer`);
} else if ((userChoice === "R" && computerResponse === "S") || (userChoice === "P" && computerResponse === "R") || (userChoice === "S" && computerResponse === "P")) {
    wins++
    totalWins ++
    alert(`${userName} wins!`)
} else {
    alert(`${userName} loses!`);
    totalLoses++
    loses++
}

counter++

}
while (counter < games)
console.log("your wins: " + wins)
console.log("computer wins: " + loses)
}
var userName = prompt("What is your name?")
game(userName)

var playAgain =prompt("do you want to keep playing? Yes or No").toUpperCase();
    while (playAgain !== "YES" && playAgain !== "NO") {
    playAgain = prompt("your input is incorrect, please enter a yes or no").toUpperCase();
}    
if (playAgain === "YES") {
        game()
    } else {
        alert(`Goodbye ${userName}. Total wins: ${totalWins} and total losses: ${totalLoses}`)
    }


