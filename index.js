/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 18;
let age = 20;
if (age >= votingAge) {
    console.log('true');
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

et var1 = 10;
let var2 = 11;

if (var1 > var2) {
    var1++;
    console.log(var1);
} else {
    var1--;
    console.log(var1);
}



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let numberTest = "1999";
console.log(numberTest);
console.log(typeof(numberTest));
numberTest = Number(numberTest);
console.log(numberTest);
console.log(typeof(numberTest));



//Task d: Write a function to multiply a*b 

function multiply(a,b) {
    return a * b;
}
console.log(multiply(2,8));



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function ageInDogYears(age) {
    return age * 7;
}
console.log(ageInDogYears(40));



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
  
function dogFeeder(weight, age) {
    if (age >=1) {
        if (weight <= 5) {
            return weight * .05;
        } else if (weight <= 10) {
            return weight * .04; 
        } else if (weight <= 15) {
            return weight * .03;
        } else {
            return weight * .02;
        }
    } else {
        if (age <= ((1/12) * 4)) {
            return weight * .10;
        } else if (age <= ((1/12) * 7)) {
            return weight * .05;
        } else {
            return weight * .04;
        }
    }
}

console.log(dogFeeder(15, 1));



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

let number;
if(input = "rock"){
    number = 0;
}
if(input = "paper"){
    number = 1;
}
if(input = "scissors"){
    number = 2;
} 

let comp = Math.floor(Math.random()*3);

/*Log computer choice to console */
console.log(comp);

if(number === comp){
    return("Tie");
} else if(number === 0,comp === 2){
    return("Win");
} else if(number === 0,comp === 1){
    return("Lose");
} else if(number === 1,comp === 0){
    return("Win");
} else if(number === 1,comp === 2){
    return("Lose");
} else if(number === 2,comp === 1){
    return("Win");
} else if(number === 2,comp === 0){
    return("Lose");
}

}
console.log(rockPaperScissors("scissors"))
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles





//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  




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





