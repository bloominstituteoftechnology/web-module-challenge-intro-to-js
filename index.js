/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

var votingAge = n;

if (n > 18) {
  console.log("true");
} else {
  console.log("False");
}

n = 22;

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let num1 = 0;
let num2 = 5;

if (num1 <= num2) {
  num1 = num2;
} else {
  return;
}

console.log(num1);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

(1999).toString();
parseInt(str);

//Task d: Write a function to multiply a*b

function multiplyNumbers() {
  //create function
  let num1 = 5;
  let num2 = 0;

  let result = num1 * num2;

  console.log(result);
}

multiplyNumbers(); //call function

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years

ageToDog(); //call function

// I called this function first to show that functions can be called prior to being defined. Functions are usually called before defining them in most apps

function ageToDog() {
  //define function
  let yourAge = prompt("How Old Are You?");

  dogAge = yourAge * 7;

  console.log(dogAge);
}

/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

// Puppies less than 1 year>=
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

function dogFeeder() {
  //create
  let age = 1;
  let weight = 15;

  if (age >= 1 && weight <= 5) {
    food = weight * 0.05;
  } else if (age >= 1 && weight >= 6 && weight <= 10) {
    food = weight * 0.04;
  } else if (age >= 1 && weight >= 11 && weight <= 15) {
    food = weight * 0.03;
  } else if (age >= 1) {
    food = weight * 0.002;
  } else if (age <= 0.4) {
    food = weight * 0.1;
  } else if (age > 0.4 && age <= 0.7) {
    food = weight * 0.05;
  } else {
    food = weight * 0.04;
  }
  console.log(food);
}

dogFeeder(); //call

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

// I am aware that this is more than is nessasary to run this program, but the extra functions and features make the game more playable

//prompt user to guess. This is case sensitive
userGuess = prompt("Rock, Paper, or Sissors?");
//generates a number between 1-3 for computer
computerNumber = Math.ceil(Math.random() + Math.random() + Math.random());
//saves computer's guess as a string value after running function
computerGuess = 0;

//calls all our functions
player();
computer();
whoWon();

//Shows user's guess in Console
function player() {
  if (userGuess === "Rock") {
    console.log("You guessed Rock");
  } else if (userGuess === "Paper") {
    console.log("You guessed Paper");
  } else if (userGuess === "Sissors") {
    console.log("You guessed Sissors");
  } else {
    console.log("That is not a valid input. You lose");
  }
}

//Convert's computer's number guess into a string value and output's the computer's guess
function computer() {
  if (computerNumber === 1) {
    computerGuess = "Rock";
    console.log("The computer guessed Rock");
  } else if (computerNumber === 2) {
    computerGuess = "Paper";
    console.log("The computer guessed Paper");
  } else {
    computerGuess = "Sissors";
    console.log("The coputer guessed Sissors");
  }
}

// function that compares the string values and determines the winner
function whoWon() {
  if (userGuess === "Paper" && computerGuess === "Rock") {
    console.log("You Won!");
  } else if (userGuess === "Rock" && computerGuess === "Sissors") {
    console.log("You Won!");
  } else if (userGuess === "Sissors" && computerGuess === "Paper") {
    console.log("You Won!");
  } else {
    console.log("The Computer Wins!");
  }
}

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

// Metric system :(

var feet = prompt("how many feet?");
var kilometers = prompt("how many Kilometers?");

feetToCM();
kmToMiles();

function feetToCM() {
  let cm = feet * 30.48;
  console.log(feet + " feet is " + cm + " centemeters");
}

function kmToMiles() {
  let miles = kilometers * 0.621371;
  console.log(kilometers + " kilometers is " + miles + " miles");
}

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

//Let's user choose how many bottles they want to start with
var bottles = prompt("how many bottles should we start with?");

//calls our function
annoying();

//function takes user's input and counts down to 0 logging the result
function annoying() {
  for (let j = 0; bottles >= j; bottles--)
    console.log(bottles + " bottles of soda on the wall");
}

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F

// Prompts user for an input. This input assumes there were 100 questions each worth 1%
var grade = prompt("How many questions did you get right?");

//call our function here
letterGrade();

function letterGrade() {
  if (grade >= 90) {
    console.log("Amazing! You got an A!");
  } else if (grade >= 80) {
    console.log("Congrats! You got a B!");
  } else if (grade >= 70) {
    console.log("You got a C.");
  } else if (grade >= 60) {
    console.log("You got a D. Don't forget to study");
  } else {
    console.log("You got an F. You will do better next time");
  }
}

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method

//I am not sure about this one. Here is a function that works but only finds one value at a time
var ar = ["a", "A", "b", "E", "f", "u", "a", "o"];
var elementToFind = "a";
var result = ar.reduce(
  function (elementToFind, total, number) {
    return (total += number == elementToFind);
  }.bind(this, elementToFind),
  0
);

console.log(result);

// Here is a function that DOES NOT work but should be able to find multiple values
const letters = [a, A, b, B, e, E, i, I, h, O, l, S, u, U, z];
let vowels = 0;

for (let i = letters.length; s > 0; s--)
  if (numbers.includes(a, s)) {
    vowels++;
    letters.splice(s, 1);
  } else if (numbers.includes(A, s)) {
    vowels++;
    letters.splice(s, 1);
  } else if (numbers.includes(e, s)) {
    vowels++;
    letters.splice(s, 1);
  } else if (numbers.includes(E, s)) {
    vowels++;
    letters.splice(s, 1);
  } else if (numbers.includes(i, s)) {
    vowels++;
    letters.splice(s, 1);
  } else if (numbers.includes(I, s)) {
    vowels++;
    letters.splice(s, 1);
  } else if (numbers.includes(o, s)) {
    vowels++;
    letters.splice(s, 1);
  } else if (numbers.includes(O, s)) {
    vowels++;
    letters.splice(s, 1);
  } else if (numbers.includes(u, s)) {
    vowels++;
    letters.splice(s, 1);
  } else if (numbers.includes(U, s)) {
    vowels++;
    letters.splice(s, 1);
  }

console.log(vowels);
/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

//please see above program. Functionality is already added.
