/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/
/*
Task 1a: Do the following:
   
   1. Declare a variable called votingAge
   2. console log true if age > 18

   HINT: no function required
*/

let age = 20;

  if (age < 18) {
    console.log(true);
  } else {
    console.log(false);
  }


/*
Task 1b: Do the following:
   
   1. Declare two variables and assign them values
   2. Use a conditional to change the value of the 1st variable based on the value assigned to the 2nd variable
   3. Console log the new value of the 1st variable

   HINT: no function required
*/
let a = 15;
let b = 10;

if (b < 16) {
  console.log(a + 5)
}




/*
Task 1c: Do the following:
   
   1. Declare a string type variable with the value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Console log the result

   HINT: look up the Number method
*/

var year = "1999"

console.log(Number(year))


/*
Task 1d: Do the following:
   
   1. Invoke the multiply function below and pass two numbers as arguments to it
   2. Receive the first number in a parameter called a
   3. Receive the second number in a parameter called b
   4. Multiply a and b and return the answer
   
   HINT: if you want to see the answer console log the invocation of multiply
*/

function multiply(as, bs){
  return(as * bs);
}

multiply(2, 6)



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Age in Dog years
/*
Do the following:
   1. Invoke the dogYears function below and pass an age value to it
   2. Use the received value to calculate the age in dog years (1 human year is equal to 7 dog years)
   3. Return the newly calculated age
   
   HINT: if you want to see the answer console log the invocation of dogYears
*/

let humanAge = 20

function dogYears(){
    return (humanAge * 7);
}

console.log(dogYears());



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal, one month = 1/12) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
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
  

function hungryDog(weight, age){
  if (age >= 1 && weight <= 5) {
    return weight * 0.05;
  }
  else if (age >= 1 && weight >= 6 && weight <= 10) {
    return weight * .04;
  }
  else if (age >= 1 && weight >= 11 && weight <= 15) {
    return weight * .03;
  }
  else if (age >= 1 && weight >= 15) {
    return weight * .02
  }
  else if (age < 1 && age >= .583) {
    return weight * .04
  }
  else if (age <= .583 && age >= .333) {
    return weight * .05
  }
  else if (age < .333 ) {
    return weight * .1
  }
  else {
    return 'please try again'
  }
}
console.log(hungryDog(15, 1))



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 


let computer = Math.random();
  if(computer <= .34 ) {
    computer = "rock"
  }
  else if(computer <= .67) {
    computer = "paper"
  }
  else if(computer > .67) {
    computer = "scissors"
  }


function game(user, computer){
  if (user === computer) {
    return 'its a tie!'
  }
  else if(user === 'rock' && computer === 'scissors') {
    return 'you win!'
  }
  else if(user === 'paper' && computer === 'rock'){
    return 'you win!'
  }
  else if(user === 'scissors' && computer === 'paper'){
    return 'you win!'
  }
  else {
    return 'you lose!!'
  }
}
  

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function miles(km){
    return (km * .62)
  }

console.log(miles(4))



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  

function feet(feet){
    return (feet * 30.48)
  }

console.log(feet(3))
 


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should return (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  

function annoyingSong(number){
    for (let i = number; i > 0; i--){
      console.log(`${i} bottles of soda on the wall, ${i} bottles of soda, take one down pass it around ${i - 1} bottles of soda on the wall`)
    }
  }

console.log(annoyingSong(3))


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function grade(score){
    if(score >= 90) {
      return 'You got an A!'
    }
    else if(score < 90 && score >= 80) {
      return 'You got a B!'
    }
    else if(score < 80 && score >= 70) {
      return 'You got a C!'
    }
    else if(score < 70 && score >= 60) {
      return 'You got a D :('
    }
    else {
      return 'You failed RIP'
    }
  }
  
console.log(grade(92)) 
  
  

/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method



function vowelCounter(/*add your code here*/) {
    /*add your code here*/
}



/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
function foo(){
    console.log('its working');
    return 'bar';
}
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
export default{
    foo,
    multiply,
    dogYears,
    hungryDog,
    game,
    miles,
    feet,
    annoyingSong,
    grade,
    vowelCounter
}
