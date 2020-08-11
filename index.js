/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
//if statement 

function votingAge(a) {
    let result;
    if (a > 18) {
      result = 'true';
    } else {
      result = 'false';
    }
    return result;
  }
  console.log(votingAge(17));
  // expected output: "false"

//Task b: declare a variable and then use a conditional to change the value 
//of that variable based on the value assigned to a second variable (no function required)
//conditional variable

if (true) {
    let myVariable = 'True';
  } else {
    let myVariable = 'False';
  }
//or 
let myVariable = 'False';
 if (true) {
   let = 'True';
 }

//https://www.w3schools.com/js/js_number_methods.asp
//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
//The Number() method 

Number('1999'); // returns 1999

//or
//The parseInt() Method
var a = parseInt("1999"); // returns 1999

//or
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_parseint
//The parseFloat() Method
var a = parseFloat("1999"); // returns 1999

//Task d: Write a function to multiply a*b 

const multiply = a => b => a * b;
console.log(multiply(4)(3));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years 
// they say that 1 human year is equal to seven dog years 
  // ES5
  var multiply = function(x, y) {
    return x * y;
  };

  console.log(multiply(24, 7));
  // ES6
  multiply = (x, y) => { return x * y };

  console.log(multiply(24, 7));

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
// takes weight in pounds and age in years 
// (note if the dog is a puppy the age will be a decimal) 
// and returns the number of pounds of raw food to feed in a day.


// feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  




/************************************************************** Task 4 **************************************************************/
https://medium.com/@linlinghao/write-a-rock-paper-scissors-game-without-if-else-in-javascript-f7e4951de220
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

let userChoice = prompt('please choose one from rock, paper or scissors, and type into the box below');

userChoice = userChoice.toLowerCase();

let choiceStack = ['paper', 'rock', 'scissors'];

let randomNum = Math.floor(Math.random() * 3);

let computerChoice = choiceStack[randomNum];

console.log(`Your choice is ${userChoice}, the computer's choice is ${computerChoice}.`);

if (userChoice === computerChoice){
  console.log("Tie!");
  }else if (userChoice === 'paper' && computerChoice === 'rock'){
  console.log("You win!");
  }else if (userChoice === 'rock' && computerChoice === 'scissors'){
  console.log("You win!");
  }else if (userChoice === 'scissors' && computerChoice === 'rock'){
  console.log("You lose!");
  }else if (userChoice === 'rock' && computerChoice === 'paper'){
  console.log("You lose!");
  }else if (userChoice === 'paper' && computerChoice === 'scissors'){
  console.log("You lose!");
  }else if (userChoice === 'scissors' || computerChoice === 'paper'){
  console.log("You win!");
  }else{
  console.log("Invalid input, please try again");
  }

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers 
//and convert it to the equal number of miles
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
//parseInt()

var kilometers = parseInt(prompt("Please enter kilometers:"));
var miles = kilometers / 1.6;
console.log(miles + " Miles");



//parseInt()
//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
var feet = parseInt(prompt("Please enter feet:"));
var CM  = feet / 0.0328084;
console.log(CM + " CM");




/************************************************************** Task 6 **************************************************************/
https://repl.it/@justinemanueljo/99-bottels#index.js
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
function annoyingSong() {  
  var soda; //differnt every time
  var sodaLeft; //differnt every time
  for (i = 99; i >= 1; i--) { //i is set to 99(starts at 99 subtarts (-1)intel 1 )
    if (i == 1) { //stoppping condition for i =1
      soda = "bottle";
      sodaLeft = "No bottles of soda on the wall!";// only when i - 0
    } else {
      soda = "bottles";
      sodaLeft = i - 1 + " bottles of soda on the wall!";
    } 
    console.log(i+ " " + soda + " of soda on the wall,");
    console.log(i+ " " + soda + " of soda,");
    console.log("Take one down, pass it around,");
    console.log(sodaLeft);
    } 
    
}
console.log(annoyingSong());





/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
let score = 70 ;
   
if (score >= 90) { result = 'A'; }
else if (score >= 80) { result = 'B'; }
else if (score >= 70) { result = 'C'; }
else if (score >= 60) { result = 'D'; }
else { result = 'F';

console.log(score);
  

score => (score >= A) ? 'A' : 'F'


A => (score >= 10) ? 'A' : 'F'
/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. 
//It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method
//The indexOf()
function list(str1)
{
  var list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(list("Lambda School "));




/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a 
//prompt from a user using the window object

/* get user's input */
let userChoice = prompt('please choose one from rock, paper or scissors, and type into the box below');
/* convert user's input into index */
userChoice = userChoice.toLowerCase();
let choiceStack = ['paper', 'rock', 'scissors'];
let userChoiceIndex = choiceStack.indexOf(userChoice);
/* generate computer's choice */
let randomNum = Math.floor(Math.random() * 3);
let computerChoice = choiceStack[randomNum];
/* log the each choices on the console */
console.log(`Your choice is ${userChoice}, the computer's choice is ${computerChoice}.`);
/* make a two dimensional array */
const results = [
['t', 'c', 'u'],
['u', 't', 'c'],
['c', 'u', 't'],
];
/* use userChoice index (because in the end we just need the user result) to find the result in this two dimensional array */
let userResult = results[randomNum][userChoiceIndex];
/* make an object to convert the final result into a sentence, so we can log it on the console */
const resultMap = {
't': "Tie",
'u': "You win",
'c': "You lose"
};

console.log(resultMap[userResult]);

