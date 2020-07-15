/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge = 18;

 if (votingAge >= 18) {
   console.log ('allowed to vote!');
 }




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let hot = 70;
let cold = 69;
let message = 'message';
let temp = 70;

if (temp <= cold) {
  message = 'it is cold';
} 
else if (temp >= hot) {
  message = 'it is hot';
}
console.log(message)

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
Number('1999');
console.log(Number('1999'));



//Task d: Write a function to multiply a*b 


const multiply = (a, b) =>{
  return a * b;
} 

console.log(multiply(2,4));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
const myAge = 24;

function humanToDogAge (myAge){
  return myAge * 7;
}
console.log(humanToDogAge(myAge));

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

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

function rawFoodFeeder (age, weight){
  //adult dog food feeder
  if (age >= 1){
    if(weight <= 5){
      return 5 * weight/100;
    }
    else if (weight >= 6 && weight <= 10){
      return 4 *  weight/100;
    } 
    else if (weight >= 11 && weight <= 15){
      return 3 *  weight/100;
    }
    else if (weight > 15){
      return 2 *  weight/100;
    }
  }
// Puppy food feeder
  else  if (age < 0.18){
      return 'milk fed';
  }

  else if (age < 0.34 && age >= 0.18 ){
      return 10 * weight/100;
  }
  else if (age < 0.59 && age >= 0.34){
      return 5 * weight/100;
  }
  else if (age < 1 && age >= 0.59){
    return 4 * weight/100;
  }

} 


// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  

console.log(rawFoodFeeder(1, 15));


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
  
  let play = prompt ('rock, paper or scissors');

  function roShamBo (play){
   
    let computerRandom = Math.random();
    // computer-Rock
    if (computerRandom > 0.6){
      if (play === 'paper'){
         return 'Computer played rock, you win :)'; 
      }
      else {
        return 'Computer played rock, Computer wins :(';
      }
    }
    // computer-scissor
    else if (computerRandom > 0.3 && computerRandom <= 0.6){
      if (play === 'rock'){
        return 'Computer played scissor, you win'
      }
      else {
        return 'Computer played Scissor, Computer wins :('
      }
    }
    // computer-paper
    else if (computerRandom > 0 && computerRandom <= 0.3){
      if (play === 'scissors'){
        return 'Computer played paper, you win'
      }
      else {
        return 'Computer played paper, Computer wins :('
      }
    }
  }

  console.log(roShamBo(play));

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
  function metricConverter (km) {
    return km * 0.621371 
  } 




//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function metricConverterFt (feet) {
  return feet * 30 
} 




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
for (let i = 99; i > 0; i--){
    console.log(`${i} bottles on the wall`)
  }





/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  function letterGrade(grade){
    if(grade >= 90){
      return 'A';
    }
    else if (grade >= 80 && grade < 90 ){
      return 'B';
    }
    else if (grade >= 70 && grade < 80 ){
      return 'C';
    }
    else if (grade >= 60 && grade < 70 ){
      return 'D';
    }
    else {
      return 'F';
    }
  }

  console.log(letterGrade(70));
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

// DONE SON!!
// expect a prompt!!


