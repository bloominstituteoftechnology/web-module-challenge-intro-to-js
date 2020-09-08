/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge = 20;
if (votingAge > 18) {
  console.log(true);
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let a = 20;

let b = 10;

if (b === 10) {
  a = b;
  console.log(a);
}

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let convertString = "1999";
let integerValue = parseInt(convertString);
console.log(typeof integerValue);

//Task d: Write a function to multiply a*b

const multiply = (a, b) => {
  return a * b
};

console.log(multiply(24, 23));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years
const ageConverter = (age) => {
  return age * 7;
};
console.log(ageConverter(15));

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

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

const feedingRequirement = (pounds, years) => {
  if (years >= 1 && pounds < 5) {
    return pounds * 0.05;
  } else if (pounds <= 10) {
    return pounds * 0.04;
  } else if (pounds <= 15) {
    return pounds * 0.03;
  } else if (pounds > 15) {
    return pounds * 0.02;
  }
   if (years <= 0.04) {
    return pounds * 0.01;
  } else if (years <= 0.07) {
    return pounds * 0.05;
  } else (pounds <= 12) 
    return pounds * 0.04;
  
};
console.log(feedingRequirement(15, 1));



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

const game = (playersChoice => {


  let computerOptions = ['rock', 'paper', 'scissors'];
  let randomGeneratedNumber = Math.floor(Math.random() * 3);
  let computersChoice = computerOptions[randomGeneratedNumber]

  if(playersChoice === computersChoice) {
    return 'Its a Tie!' 
  } else if ((playersChoice === 'rock') && (computersChoice === 'paper')) {
    return 'You Lose'
  } else if ((playersChoice === 'rock') && (computersChoice === 'scissors')) {
    return 'You Win'
  } else if ((playersChoice === 'scissors') && (computersChoice === 'rock')) {
    return 'You Lose'
  } else if ((playersChoice === 'scissors') && (computersChoice === 'paper')) {
    return 'You Win'
  } else if ((playersChoice === 'paper') && (computersChoice === 'rock')) {
    return 'You Win'
  } else if ((playersChoice === 'paper') && (computersChoice === 'scissors')) {
    return 'You lose'
  } 

  

})


/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
const converterKilosToMiles = (kilometers => {
  let miles =  kilometers * 0.62137;
  return miles;
})
console.log(converterKilosToMiles(1)); 

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  const converterFeetToCentimeters = (centimeters => {
    let feet = centimeters * 30.48;
    return feet;
  })
  console.log(converterFeetToCentimeters(1));

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
const annoyingSong = (number => {
  while(number >  0) {
    console.log(`${number} bottles of soda on the wall, ${number} bottles of soda, take one down pass it around ${number -1} bottles of soda on the wall.`);
    number--;
  }

})
console.log(annoyingSong(10));
/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F
const calculator = (grade => {
  if(grade >= 90) {
    return 'A';
  } else if(grade <= 89) {
    return 'B'
  }else if(grade <= 79) {
    return 'C'
  }else if(grade <= 69) {
    return 'D'
  } else (grade < 60) 
    return 'F';

})
console.log(calculator(76));

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
