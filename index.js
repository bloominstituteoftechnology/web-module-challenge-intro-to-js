/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
const votingAge = 18;
console.log(votingAge);





//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
const conditionalTask = (x);





//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
let dob = parseInt('1999');
console.log(dob)




//Task d: Write a function to multiply a*b 
const multipled = (a * b);




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
dogAge = age =>  age * 7;






/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements:
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year:
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

ageChanger = age => age / 12;

dogFeeder = (lbs, age) => {
    if (age >= 12 && lbs <=5){
        return lbs * .05;
} else if (age >= 12 && lbs <= 10){
    return lbs * .04;
} else if (age >= 12 && lbs <=15) {
    return lbs * .03;
} else if (age >= 12 && lbs > 15) {
    return lbs * .02;
} else if (age < 4) {
  return lbs * .10;
} else if (age <= 7) {
  return lbs * .05;
} else {
  return lbs * .04;
}
};

//please note that age was changed from years to months to ensure that we could run one function instead of two based upon age. 

console.log(dogFeeder(15, 12)) //0.44999999999999996





/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
//rock > scissor
//scissor > paper
//paper > rock
// let playersChoice = ('')

//getting window input - stretch
let userInput = prompt('choose rock, paper, scissor');

//converting userInput string to lowercase
userInput = userInput.toLowerCase();

console.log(`You chose: ${userInput}`) //seeing input from userInput

//using window input => players choice (pChoice)
function pChoice () {
  if (userInput == null || userInput == undefined) {
    return 'error pChoice'
  } else {
    return userInput
  }
}


//Random Number Generator for CPU logic 0-3
const cpuLogic =  (Math.floor(Math.random() * 3)) 


//random whole number between 0-2 for random logic
function cpuChoice  () {
  if (cpuLogic === 0) {
    return 'rock';
  } else if (cpuLogic === 1) {
    return 'paper';
  } else if (cpuLogic === 2) {
    return 'scissor';
  } else {
    return 'Error cpuChoice'
  };
}
console.log(`Computer Chose: ${cpuChoice()}`) 

//establish if/else statements to determine winner
function decision() {
  if (pChoice() == 'rock' && cpuChoice() == 'rock') {
    return 'You and the Computer Tied'
  } else if (pChoice() == 'paper' && cpuChoice() == 'paper'){
    return 'You and the Computer Tied'
  } else if (pChoice() == 'scissor' && cpuChoice() == 'scissor') {
    return 'You and the Computer Tied'
  } else if (pChoice() == 'rock' && cpuChoice() == 'paper') {
    return 'The computer won'
  } else if (pChoice() == 'rock' && cpuChoice() == 'scissor') {
    return 'You Won!'
  } else if (pChoice() == 'paper' && cpuChoice() == 'scissor') {
    return 'The computer won!'
  } else if (pChoice() == 'paper' && cpuChoice() == 'rock') {
    return 'You Won!'
  } else if (pChoice() == 'scissor' && cpuChoice() == 'rock') {
    return 'The computer won!'
  } else if (pChoice() == 'scissor' && cpuChoice() == 'paper') {
    return 'You Won!'
  } else {
    return `error ${pChoice} ${cpuChoice}`
  }
}


console.log(decision()) //error logging for the decision function & Print Decision.

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles (1KM = 0.62)
let km = 500;
const toMiles = km * 0.62;
console.log(toMiles) //Have to see it right?





//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters (1ft = 30.48cm)
  let feet = 10;
  const toCent = feet * 30.48;
  console.log(toCent);



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`  

bottles = 99;
while (bottles >= 1) {
  console.log(`${bottles} of soda on the wall, ${bottles} bottles of soda, take one down pass it around`)
    bottles--;
  console.log(`${bottles} bottles of soda on the wall.`)
}


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
let grade = 89;
function grader () {
if (grade >= 90 ) {
  return 'You got an A'
}else if (grade >= 80 && grade <=89 ) {
  return 'You got a B'
} else if (grade >= 70 && grade <= 79) {
  return 'You got a C'
} else if (grade >= 60 && grade <= 69) {
  return 'You got a D'
} else {
  return 'You Failed...Summer School is waiting.'
}
}
console.log(grader())
  

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method
const vowels = ['a', 'e', 'i', 'o', 'u'] //set vowels const

function vowelCounter (str) {
  let counter = 0;
  for (let letter of str.toLowerCase()) { //use for of loop
    if (vowels.includes(letter)) {
      counter++ //incriment through letters.
    }
  }
  return counter //return total number of vowels
}

console.log(vowelCounter('Euouae')) //should return 6





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

//COMPLETED => check the original code.





