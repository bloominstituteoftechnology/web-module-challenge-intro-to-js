/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
const votingAge = 18;
if (votingAge >= 18) {
  console.log(votingAge);
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let conditional = 1;

if (conditional === 1) {
  conditional = 2;
  console.log(conditional);
}

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

const year = '1999';
console.log(typeof +year);

//Task d: Write a function to multiply a*b

const multiply = (a, b) => {
  console.log(a * b);
};

multiply(7, 99);
/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years

const dogAge = (myAge) => {
  console.log(myAge * 7);
};

dogAge(27);

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

const dogFeeder = (weight, age) => {
  if (age >= 1) {
    if (weight < 6) {
      console.log(`Amount to feed is ${weight * 0.05}`);
    }
    if (weight >= 6 && weight <= 10) {
      console.log(`Amount to feed is this ${weight * 0.04}`);
    }
    if (weight > 11 && weight <= 15) {
      console.log(`Amount to feed is this ${weight * 0.03}`);
    } else {
      console.log(`Amount to feed is this ${weight * 0.02}`);
    }
  }
  if (age < 1) {
    if (age < 0.5) {
      console.log(`Amount to feed is ${weight * 0.1}`);
    }
    if (age >= 0.5 && age <= 0.7) {
      console.log(`Amount to feed is ${weight * 0.05}`);
    }
    if (age >= 0.8 && age <= 0.11) {
      console.log(`Amount to feed is ${weight * 0.05}`);
    }
  }
};

dogFeeder(15, 0.4);

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

const playRPS = (move) => {
  const rock = 1;
  const paper = 2;
  const sissors = 3;

  const cpuMove = Math.floor(Math.random() * 3) + 1;

  console.log(`CPU Move was: ${cpuMove} and Yours was ${move}`);
  // ROck
  if (move == rock && cpuMove == sissors) {
    console.log('You win');
  }
  if (move == rock && cpuMove == paper) {
    console.log('You Lose');
  }
  if (move == rock && cpuMove == rock) {
    console.log('Tie!');
  }
  // Paper
  if (move == paper && cpuMove == sissors) {
    console.log('You Lost');
  }
  if (move == paper && cpuMove == paper) {
    console.log('Tie!');
  }
  if (move == paper && cpuMove == rock) {
    console.log('You win');
  }
  // Scissors
  if (move == sissors && cpuMove == sissors) {
    console.log('Tie!');
  }
  if (move == sissors && cpuMove == paper) {
    console.log('Win!');
  }
  if (move == sissors && cpuMove == rock) {
    console.log('Lost!');
  }
};

playRPS(3);
/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

const kmToMiles = (km) => {
  console.log(km * 0.621371);
};

kmToMiles(5);

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

const feetToCM = (ft) => {
  console.log(ft * 30.48);
};

feetToCM(6.5);

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
