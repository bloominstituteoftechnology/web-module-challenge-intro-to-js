/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 18

if (votingAge >= 18) {
    console.log ('true');
}
else { 
    console.log ('false');
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let dogName = 'Carlos'
dogName = 'Terrabyte'

if (dogName = 'Terrabyte') {
    console.log (dogName);
}


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

console.log (parseInt("1999"));  


//Task d: Write a function to multiply a*b 

function addNumber (a,b) {
console.log(a + b);
}
addNumber(2,2)


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears (humanYears) {
    console.log (humanYears * 7);
}

dogYears (10)

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

function dogFeeder (age, weight){
    if (age >=1 && weight <= 5) {
        return weight * .05 
    } else if (age >=1 && weight >= 6 && weight <= 10){
        return weight * .04
    } else if (age >=1 && weight >= 11 && weight <= 15){
        return weight * .03;
    } else if (age >=1 && weight > 15){
        return weight * .02;
}
}
    console.log(dogFeeder (1,15))

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

let computerChoice = Math.random()
if (computerChoice <= .333){
    computerChoice = 'rock';
}   else if (computerChoice <= .66){
    computerChoice = 'paper';
}   else if (computerChoice <= 1) {
    computerChoice = 'scissors';
}

function rockPaperScissors(user,computerChoice){
    if (computerChoice === user){
        return 'try again'
    } else if (computerChoice === 'rock' && user === 'paper'){
        return ' you win'
    } else if (computerChoice === "paper" && user === 'scissors'){
        return 'you win';
    } else if (computerChoice === 'scissors' && user === 'rock'){
        return 'you win';
    }  else { 
        return 'you lost'}
    
}

console.log(rockPaperScissors('rock',computerChoice))



/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function mileConverter (km) {
   console.log (km * .62137119223);
}

mileConverter (5)


// b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function cmConverter (feet) {
   console.log (feet / 0.033);
}

cmConverter (2)



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong () {
  for (let i = 99; i > 1; i--) {
      console.log (`${i} bottles of soda on the wall, take one down pass it around, ${i-1} number of sodas`)
  }
}

annoyingSong ()

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

function gradeScale (gradeValue) {
    if (gradeValue <= 100 && gradeValue >= 90){
    console.log ('you get an A')
}else if (gradeValue <= 89 && gradeValue >= 80){
    console.log ('you get a B')
}else if (gradeValue <= 79 && gradeValue >= 70){
    console.log ('you get a C')
}else if (gradeValue <= 69 && gradeValue >= 60){
    console.log ('you get a D')
}else if (gradeValue < 60){
    console.log ('you get an F')
} else { console.log ('you cheated try again')
}
}
  
gradeScale(110)

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





