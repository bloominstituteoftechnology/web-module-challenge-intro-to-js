function game(user, computer) {
  if (computer <= .33333) {
    computer = "rock";
  } else if (computer > .33333 && computer <= .66666) {
    computer = "paper";
  } else if (computer > .66666 && computer <= 1) {
    computer = "scissors";
  }
  console.log("computer's choice:" + " " + computer);
  if (computer === userChoice) {
    return console.log("it's a tie");
  } else if (computer === "rock" && userChoice == "paper") {
    return console.log("you win!");
  } else if (computer === "rock" && userChoice == "scissors") {
    return console.log("you lose!");
  } else if (computer === "paper" && userChoice == "rock") {
    return console.log("you lose!");
  } else if (computer === "scissors" && userChoice == "rock") {
    return console.log("you win!");
  } else if (computer === "scissors" && userChoice == "paper") {
    return console.log("you lose!");
  } else if (computer === "paper" && userChoice == "scissors") {
    return console.log("you win!");
  }
}
let userChoice = "scissors";

game(userChoice, Math.random())