/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 18
  if (votingAge > 18) {
    console.log(true);
    }
  else { 
  console.log(false);
 }


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let x = 1;
let y = 2

if (x < y)
{
  x=y
}
console.log(x)



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method


Number("1999")
console.log(number)


//Task d: Write a function to multiply a*b 

var a = 2
var b = 2
console.log(a*b)



/**************************************************s************ Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

let yourAge = 31*7
console.log(yourAge)



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
  
function howMuchFoodToEat



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

var userChoice = prompt("Let's play, do you pick rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}
var compare=function(choice1,choice2){
    if(choice1===choice2){
        return "It's a tie, try again!";
    }
    else if(choice1==="rock"){
        if(choice2==="scissors"){
            return "rock beats scissors, rock wins"
        }
        else if(choice2==="paper"){
            return "paper beats rock, paper wins";
        }
    }
    else if(choice1==="paper"){
        if(choice2==="scissors"){
            return "scissors beat paper, scissors win"
        }
        else if(choice2==="rock"){
            return "paper beats rock, paper wins";
        }
    }
    else if(choice1==="scissors"){
        if(choice2==="paper"){
            return "scissors beat paper, scissors win"
        }
        else if(choice2==="rock"){
            return "rock beats scissors, rock wins";
        }
    }
    
}
console.log(compare(userChoice,computerChoice));

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function metricConvert(i) {
  return i / 1.65
}
console.log(metricConvert(1.025262))


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function feetToCm(i) {
  return i * 30.48
}
console.log(feetToCm(6.5))



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  

var annoyingSong;
for (counter = 99; counter >= 1; counter = counter - 1) 
{
    if (counter == 1) {
        bottles = 'bottle';
    } else {
        bottles = 'bottles';
    }
    console.log(counter+" "+bottles+" of pop on the wall.");
    if (counter < 99) {
        console.log("");
        console.log(counter+" "+bottles+" of pop on the wall.");
    }
    console.log(counter+" "+bottles+" of pop.");
    console.log("Take one down.");
    console.log("Pass it around.");
    if (counter == 1) {
        console.log("No more bottles of pop on the wall. Hope you enjoy my very annoying song");
    }
}


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  

function gradeCalc(score) {
  if (score < 60) {
    return "F";
  } else if (score >= 60 && score < 70) {
    return "D";
  } else if (score >= 70 && score < 80) {
    return "C";
  } else if (score >= 80 && score < 90) {
    return "B";
  } else {
    return "A";
  }
}

console.log(gradeCalc(99));
console.log(gradeCalc(83));
console.log(gradeCalc(77));
console.log(gradeCalc(64));
console.log(gradeCalc(47));
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object


var userChoice = prompt("Do you want to play rock, paper or scissors?");
var userChoice = prompt("Who am I playing with?");
var userChoice = prompt("You're first, do you pick rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}
var compare=function(choice1,choice2){
    if(choice1===choice2){
        return "It's a tie, try again!";
    }
    else if(choice1==="rock"){
        if(choice2==="scissors"){
            return "rock beats scissors, rock wins"
        }
        else if(choice2==="paper"){
            return "paper beats rock, paper wins";
        }
    }
    else if(choice1==="paper"){
        if(choice2==="scissors"){
            return "scissors beat paper, scissors win"
        }
        else if(choice2==="rock"){
            return "paper beats rock, paper wins";
        }
    }
    else if(choice1==="scissors"){
        if(choice2==="paper"){
            return "scissors beat paper, scissors win"
        }
        else if(choice2==="rock"){
            return "rock beats scissors, rock wins";
        }
    }
    
}
console.log(compare(userChoice,computerChoice));


