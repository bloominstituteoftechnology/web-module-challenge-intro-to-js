/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge = 18;
if (votingAge >= 18) {
  // console.log('true');
}




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let newVar = 'hello';
let varTwo = 'hi hi';
// console.log()
if (newVar !== varTwo) {
  console.log('not the same');
  newVar = varTwo;
  // console.log(newVar);
}





//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let newNum = "1999";
parseInt(newNum);
// console.log(newNum);




//Task d: Write a function to multiply a*b 

function multiply(a, b) {
  console.log(a * b);
};



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function convertAge() {
  let myDogAge = humanAge * 7;
  return 'your dog age is ' + myDogAge;
}



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.
let dogWeight = 15
let dogAge = 1
feedDog();

function feedDog() {
  if (dogAge >= 1) {
    if (dogWeight < 6) {
      return 'feed your dog ' + dogWeight * .05 + ' pounds of food'
    } else if (6 <= dogWeight <= 10) {
      return 'feed your dog ' + dogWeight * .04 + ' pounds of food'
    } else if (11 <= dogWeight <= 15) {
      return 'feed your dog ' + dogWeight * .03 + ' pounds of food'
    } else {
      return 'feed your dog ' + dogWeight * .02 + ' pounds of food'
    }
  } else {
    if (.166 <= dogAge <= .333) {
      return 'feed your dog ' + dogWeight * .1 + ' pounds of food'
    } else if (.333 < dogAge <= .583) {
      return 'feed your dog ' + dogWeight * .05 + ' pounds of food'
    } else if (.583 < dogAge <= 1) {
      return 'feed your dog ' + dogWeight * .04 + ' pounds of food'
    } else {
      return 'your dog is too young for this program.'
    }
  };
};



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





/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

//rock = 1, paper = 2, scissors = 3

function game() {
  let input = prompt('rock paper or scissors?');
  let randomize = Math.floor(Math.random() * 11);
  console.log(randomize);
  //
  //time to convert counterAnswer to something manageable
  //
  if (randomize <= 3.333) {
    counterAnswer = 1;
  } else if (3.333 < randomize <= 6.666) {
    counterAnswer = 2;
  } else {
    counterAnswer = 3;
  };
  console.log(counterAnswer);
  //
  //time to convert answer into something manageable
  //
  if (input = 'rock') {
    answer = 1;
  } else if (input = 'paper') {
    answer = 2;
  } else if (input = 'scissors') {
    answer = 3;
  } else {
    return 'that wasnt rock paper or scissors'
  };
  console.log(answer);

  //NEED TO RETURN TO THIS PART LATER TO FIGURE OUT

  //debug below portion
  // if (answer == 1 && randomize == 2) {
  //   prompt('paper beats rock, you lose');
  // } else if (answer = 2 && randomize = 3) {
  //   prompt('scissors beats paper, you lose');
  // } else if (answer = 3 && randomize = 1) {
  //   prompt('rock beats scissors, you lose');
  // } else if (answer == 2 && randomize == 1) {
  //   prompt('paper beats rock, you win');
  // } else if (answer = 3 && randomize = 2) {
  //   prompt('scissors beats paper, you win');
  // } else if (answer = 1 && randomize = 3) {
  //   prompt('rock beats scissors, you win');
  // } else {
  //   prompt('you tied!');
  // };
};


/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function convertKM() {
  let kmConversion = Number(KM) * 1.60934;
  return kmConversion;
}




//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
function convertFeet() {
  let feetConversion = Number(Feet) * 30.48;
  return feetConversion;
}




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong() {
  let annoyingNum = prompt('enter a number between 1 and 100');
  num = parseInt(annoyingNum);
  console.log(num);
  for (let i = num; i >= 1; i--) {
    console.log(num + ' bottles of soda on the wall, ' + num + ' bottles of soda, take one down pass it around ' + num - 1 + 'bottles of soda on the wall');
  };
};
annoyingSong();



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