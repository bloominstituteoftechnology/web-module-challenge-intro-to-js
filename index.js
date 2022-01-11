/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/

/*MAKE SURE TO RETURN ALL OF THE ANSWERS INSIDE OF A FUNCTION (tasks 1d through task 7), IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

// task 1a, 1b, and 1c are not autograded

/*
When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.
This will usually entail console logging the answer directly or console logging the invocation (call) of the function so when it
returns a value, that value will be logged to the console.  An example of this would be:  console.log(theFunction(value1,value2))
*/

/*
Task 1a - Voting Age

Do the following:   
   1. Create a variable called votingAge and assign it a value
   2. Console log true if age is 18 or higher

   HINT: no function required
*/
const votingAge = 21

if (votingAge > 21) {
  console.log('true');
} else {
  console.log('false');
}



/*
Task 1b - Values

Do the following:   
   1. Declare two variables and assign them values
   2. Use a conditional to change the value of the 1st variable based on the value assigned to the 2nd variable
   3. Console log the new value of the 1st variable

   HINT: no function required
*/
let num1 = 3;
let num2 = 10;

if (num2 > 5) {
  console.log(num1 + 2);
}



/*
Task 1c - Convert Strings to Numbers

Do the following:   
   1. Declare a string type variable with the value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Console log the result

   HINT: look up the Number method
*/
const dateOfBirth = "1999";
parseInt(dateOfBirth);
console.log(dateOfBirth);


/*
Task 1d - Multiply
 
Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the parameters: a and b
   3. Multiply a and b and return the answer
*/

const a = 2;
const b = 4;
function multiply(a,b){
 const result = a * b;
 return result;
}



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Age in Dog years
/*
Do the following:
 1. Invoke the dogYears function below and pass an age value to it
 2. Use the received value to calculate the age in dog years (1 human year is equal to 7 dog years)
 3. Return the newly calculated age
*/

const age = 5 ;
function dogYears(age){
  const result = age * 7;
  return result;
}




/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Dog feeder - Depending on their weight and age, we need to know how many pounds of food to feed our dog each day!
/*
Use the hungryDog function and feeding requirements below to do the following:
1. Invoke the hungryDog function below and pass it a weight value in pounds
2. Also, pass to hungryDog an age value in years (note: if the dog is a puppy, the age will be a decimal. For example: three months = 3/12 or .25)
3. Do the proper calculations and return the number of pounds of raw food to feed the dog/puppy in a day

REMEMBER: This program should handle correctly adult AND puppy ages and weights

Feeding Requirements:

Adult Dogs 1 year and older 
   up to 5 lbs - 5% of their body weight
   6 - 10 lbs - 4% of their body weight 
   11 - 15 lbs - 3% of their body weight 
   > 15lbs - 2% of their body weight 

Puppies less than 1 year
   2 - 4 months 10% of their body weight
   4 - 7 months 5% of their body weight 
   7 - 12 months 4% of their body weight
  
NOTE: If done correctly, a weight of 15 lbs and age of 1 year would return 0.44999999999999996
*/  

const weight = 15;
const age = 1;
function hungryDog(weight, age){
  if (weight<=5 && age>1){
    return weight * .05;  //if weight is less than or equal to 5 and older than 1, return the 5% of the dogs weight
  }
  else if (weight>5 && weight<=10 && age>1) {
    return weight * .04;  //if the weight is inbetween 6-10 and older than 1 return 4% of the weight
  }
  else if (weight>10 && weight<=15 && age>1) {
    return weight *.03; //if the weight is inbwetween 11-15 return 3% of the body weight
  }
  else if (weight>15 && age>1){
    return weight *.02; //if weight is greater than 15 return 2% of body weight
  }
  else if (age>=0.16667 && age<0.33333) {
    return weight *.1; //if between 2-4 months return 10 % of weight
  }
  else if(age>=0.33333 && age<0.583333){
    return weight *.05; //if between 4-7 months old return 5% weight
  }
  else if(age>=0.58333 && age<1){
    return weight *.04; //if between 7-12 months old return 4% weight
  }
}




/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Rock, Paper, Scissors - Let's play against the computer!
/*
Create a global variable that randomly generates the computer's choice
Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)

NOTE: Computer must be a global variable. It will be passed into the function as an argument when the function is invoked. 

HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()

Use the game function below to do the following:
1. Receive 2 parameters the user's choice and the computer's choice
2. Return whether the user won, lost, or tied based on these rules of the game described below - the strings returned need to match the strings below exactly.
 - win should return "you win!"
 - lose should return "you lose!"
 - tie should return "it's a tie"

RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie

HINT: Remember that the order in which we pass in our arguments matters when it comes to parameters
*/
let computer = Math.floor(Math.random()*4)
let user= 'rock'
function computerChoice(computer){
if (computer>=0 && computer<1) {
  return'rock'; //if computer is between 0-1 it chose rock
} else if (computer>=1 && computer<2){
  return 'paper'; //if computer is between 1-2 it chose paper
} else if (computer>=2 && computer<3){
  return'scissors'; //if computer is between 2-3 it chose scissors
}
}

function game(user, computer){
  if (computerChoice === 'rock' && user === 'rock'){
    return "it's a tie!"; //if computer chooses rock and user chooses rock its a tie
  } else if (computerChoice === 'rock' && user === 'paper'){
    return "you lose!"; //if computer chooses rock and you choose scissor you lose
  } else if (computerChoice === 'rock' && user === 'scissors'){
    return "you win!"; //if cmoputer chooses rock and you choose paper you win
  } else if (computerChoice === 'paper' && user === 'rock'){
    return "you lose!"; //if computer chooses paper and user chooses you lose
  } else if (computerChoice === 'paper' && user === 'paper'){
    return "it's a tie!"; //if computer chooses paper and you choose scissor you win
  } else if (computerChoice === 'paper' && user === 'scissors'){
    return "you lose!"; //if cmoputer chooses paper and you choose paper you tie
  }if (computerChoice === 'scissors' && user === 'rock'){
    return "it's a tie!"; //if computer chooses scissors and user chooses rock you win
  } else if (computerChoice === 'scissors' && user === 'paper'){
    return "you lose!"; //if computer chooses scissors and you choose scissor you win
  } else if (computerChoice === 'scissors' && user === 'scissors'){
    return "it's a tie!"; //if cmoputer chooses scissors and you choose paper you tie
  }
}



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Metric Converter 
//Task 5a - KM to Miles 
/*
Using the miles function below do the following:
1. Receive a number of kilometers
2. Convert the number of kiolmeters received to miles
3. Return the number of miles
*/
const kilometers = 5;
function miles(kilometers){
  return kilometers * 0.6213711; 
}



//Task 5b - Feet to CM
/*
Using the feet function below do the following:
1. Receive a number of cm
2. Convert the number of cm to feet
3. Return number of feet
*/
const centimeters =5;
function feet(centimeters){
  return centimeters * 0.03280839895;
}



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
1. Receive a starting number and start the count down from the number received 
2. At each invocation, it should RETURN this string (note: the tests are expecting the same string as below):
    "{number} bottles of soda on the wall, {number} bottles of soda, take one down pass it around {number left over} bottles of soda on the wall"
*/

function annoyingSong(/*add your code here*/){
      /*add your code here*/
}


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Grade Calculator
/*
Using the grade function below do the following: 
1. Receive a score out of 100 
2. Return the corresponding letter grade following this grade scale:

 90-100 should return 'you got an A' 
 80-89 should return 'you got a B'
 70-79 should return 'you got a C'
 60-69 should return 'you got a D'
 below should return 'you got an F'
*/
const score = 100;
function grade(score){
  if (score<=100 && score>=90)
  return 'you got an A'; //if you score between 90-100 its an A
  else if (score<=89 && score>=80)
  return 'you got an B'; //if you score between 80-89 its an B
  else if (score<=79 && score>=70)
  return 'you got an C'; //if you score between 70-79 its an C
  else if (score<=69 && score>=60)
  return 'you got an D'; //if you score between 60-69 its an D
  else if (score<60)
  return 'you got an F'; //if you score between below 60 its an F
}



/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
1. Receive a string as a parameter
2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

HINT - you may need to study tomorrow's content on arrays 
HINT - try looking up the .includes() method
*/


function vowelCounter(/*add your code here*/) {
  /*add your code here*/
}



/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
function foo(){
  console.log('its working');
  return 'bar';
}
foo();
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
module.exports = {
  foo,
  multiply,
  dogYears,
  hungryDog,
  game,
  miles,
  feet,
  annoyingSong,
  grade
}
