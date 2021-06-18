/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
console.log('In at top');

let votingAge = 18;

if (votingAge > 18){
    console.log('true');
}else{
    console.log('false');
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let taskB = '';
let taskX = '5';

if (taskX === '5') {
    taskB = '3';
}

console.log(taskB);


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

console.log(Number.parseInt("1999"));




//Task d: Write a function to multiply a*b 
function multiply (a, b) {
    console.log(a * b)
}

multiply(2,2);



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears (myAge) {
    console.log(myAge * 7);
}

dogYears(30);



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
  
function dogFeeder (dogWeight, dogAge) {
    let feedAmount = ''
    if (dogAge <= .33) {
        feedAmount = (dogWeight * .1)
    }else if (dogAge > .33 && dogAge <= .66) {
        feedAmount = (dogWeight * .05)
    }else if (dogAge > .66 && dogAge <= 1) {
        feedAmount = (dogWeight * .04)
    }else if (dogAge >= 1 && dogWeight < 5) {
        feedAmount = (dogWeight * .05)
    }else if (dogAge >= 1 && dogWeight > 5 && dogWeight <= 10) {
        feedAmount = (dogWeight * .04)
    }else if (dogAge >= 1 && dogWeight > 10 && dogWeight <= 15) {
        feedAmount = (dogWeight * .03)
    }else if (dogAge >= 1 && dogWeight > 15) {
        feedAmount = (dogWeight * .02)
    }
    console.log(feedAmount);
}

dogFeeder(1,15);


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function game (choice) {

let rndInt = Math.floor(Math.random() * 3) + 1

if (rndInt === 1) {
    rndInt = 'rock';
}else if (rndInt === 2) {
    rndInt = 'paper';
}else if (rndInt === 3) {
    rndInt = 'sissors';
}

//console.log(rndInt);

if (choice = 'rock' && rndInt === 'rock'){
    console.log('You chose rock!');
    console.log('CPU chose' + rndInt);
    console.log(`Tie, rock vs rock!`);
}else if (choice = 'rock' && rndInt === 'paper') {
    console.log('You chose rock!');
    console.log('CPU chose' + rndInt);
    console.log(`You lose, paper beats rock!`);
}else if (choice = 'rock' && rndInt === 'sissors') {
    console.log('You chose rock!');
    console.log('CPU chose' + rndInt);
    console.log(`You win, rock beats siccors!`);
}else if (choice = 'paper' && rndInt === 'paper'){
    console.log('You chose paper!');
    console.log('CPU chose' + rndInt);
    console.log(`Tie, paper vs paper!`);
}else if (choice = 'paper' && rndInt === 'sissors') {
    console.log('You chose paper!');
    console.log('CPU chose' + rndInt);
    console.log(`You lose, sissors beats paper`);
}else if (choice = 'paper' && rndInt === 'rock') {
    console.log('You chose paper!');
    console.log('CPU chose' + rndInt);
    console.log(`You win, paper beats rock!`);
}else if (choice = 'sissors' && rndInt === 'sissors'){
    console.log('You chose sissors!');
    console.log('CPU chose' + rndInt);
    console.log(`Tie, sissors vs sissors!`);
}else if (choice = 'sissors' && rndInt === 'rock') {
    console.log('You chose sissors!');
    console.log('CPU chose' + rndInt);
    console.log(`You lose, paper beats sissors!`);
}else if (choice = 'sissors' && rndInt === 'paper') {
    console.log('You chose sissors!');
    console.log('CPU chose' + rndInt);
    console.log(`You win, sissors beats siccors!`);
}

}
game('rock');

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kmToMiles (kilometers) {
    let mi = kilometers * 0.6214;
    console.log(mi);
}

kmToMiles(5);

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
function feetToCent (feet) {
    let inches = feet * 30.48;
    console.log(inches);
}
feetToCent(5);

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function bottles (startingNumber) {
    for (i = startingNumber; i >= 1; i--){
        console.log(`${i} bottles of soda on the wall, ${i} bottles of soda, take one down pass it around ${i - 1} bottles of soda on the wall`);
    }
}

bottles(5);


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function gradeCalc (grade) {
    if (grade >= 90) {
        console.log('You made an A.');
    }else if (grade >= 80 && grade < 90) {
        console.log('You made a B.');
    }else if (grade >= 70 && grade < 80) {
        console.log('You made a C.');
    }else if (grade >= 60 && grade < 70) {
        console.log('You made a D.');
    }else if (grade < 60) {
        console.log('You made a F.');
    }
}
  
gradeCalc(40);

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





