/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
var votingAge = 20
if (votingAge > 18){
    return true;
}
console.log(votingAge);



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let weather = "sunny"
let clothes = "shorts"
 if (weather === "rain"){
     clothes = "pants"
 }else {
     clothes = "wear a jacket"
 }
console.log(clothes);


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
var change = ("1999")
 console.log(Number(change));



//Task d: Write a function to multiply a*b 
function add (num1, num2){
return num1 * num2;
}
console.log(add(2,6));




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
function dogyears(num1) {
    return num1 * 7;
}
console.log(dogyears(40));





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
function food(age, weight){
    if (age >= 1){
     if (weight <= 5){
    return weight * .05;}
    else if (weight < 5 && weight <= 10){
    return weight * .04;}
    else if (weight >=11 && weight <= 11){
        return weight * .03;}
    else if (weight > 15){
        return weight * .02;}
    }    
    }
console.log(food(1, 15));



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
    return "The result is a tie!";
}
if(choice1 === "rock") {
    if(choice2 === "scissors") {
        return "rock wins";
    } else {
        return "paper wins";
    }
}
if(choice1 === "paper") {
    if(choice2 === "rock") {
        return "paper wins";
    } else {
        if(choice2 === "scissors") {
            return "scissors wins";
    }
}
if(choice1 === "scissors") {
    if(choice2 === "rock") {
        return "rock wins";
    } else {
        if(choice2 === "paper") {
            return "scissors wins";
        }
    }
}
}
};
console.log("User Choice: " + userChoice);
console.log("Computer Choice: " + computerChoice);
compare(userChoice, computerChoice);
  

  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function miles(num1){
    return num1 / 1.6;
  }
console.log(miles(10))
 

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
function feet(num1){
    return num1 / 0.032808;
}
console.log(feet(10));




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
function annoyingSong(count){
    for(i = count;  i > 0; i--){
        console.log(i +" bottles of soda on the wall," + i + " bottles of soda, take one down pass it around," + (i - 1) + " bottles of soda on the wall");
    }
    }  
annoyingSong(99)
    



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
function marks(num1){
    if(num1 >= 90){
        console.log("A")
    }else if(num1 >= 80){
        console.log("B")
    }else if(num1 >= 70){
        console.log("C")
    }else if(num1 >= 60){
        console.log("D")
    }else if (num1 > 60){
        console.log("F")
    }
}
console.log(marks(88));
  
  