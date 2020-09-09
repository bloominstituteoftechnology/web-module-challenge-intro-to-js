/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 20;

if(votingAge >= 18){
    console.log("true");
} else {
    console.log("false");
}


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

var variable1 = 20
var variable2 = 5

if(variable1 = 20){
    console.log(variable1 + variable2)
}



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method


var value1 = "23"

parseInt(value1);

console.log(value1)


//Task d: Write a function to multiply a*b 

const a = 2
const b = 4

function multiply(a, b) {
    
    const product = a * b;

    return product

}
console.log(multiply(a, b));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

const myAge = 20;
const dogAge = 7;

function dogYears (myAge, dogAge) {

    const newAge = myAge * dogAge;

    return newAge;

}

console.log(dogYears(myAge, dogAge));


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


function dogFeeder (age, weight) {

    if(age >= 1 && weight <= 5) {
        return weight * .05;
    } 
    else if (age >= 1){
        if (weight >= 6 && weight <= 10) {
            return weight * .04;
        } 
        else if (age >= 1) {
            if (weight >= 11 && weight <= 15) {
                return weight * .03;
            } 
            else if (age >= 1 && weight >= 15) {
                return weight * .02;
            }  
        }
    }

    if (age >= .2 && age < .4) {
        return weight * .1;
    } else if (age >= .4 && age < .7) {
        return weight * .05;
    } else if (age >= .7 && age < 1) {
        return weight * .04;
    }
}

console.log(dogFeeder(1,15));


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function computerChoice1() {

    let computerSelection = (Math.floor(Math.random() * 3));

        if (computerSelection === 0) {
            return "rock";
        } else if (computerSelection === 1) {
            return "paper";
        } else if (computerSelection === 2) {
            return "scissors";
        }

}

    function game (userChoice) {
    const computerChoice = computerChoice1();
      // console.log(computerChoice);
      // console.log(userChoice);
        if(userChoice === computerChoice) {
            console.log ("Tie");
        } else if (userChoice === "rock" && computerChoice === "paper") {
            console.log ("loss! paper beats rock");
        } else if (userChoice === "rock" && computerChoice === "scissors") {
            console.log ("win! rock beats scissors");
        } else if (userChoice === "paper" && computerChoice === "rock") {
            console.log ("win! paper beats rock");
        } else if (userChoice === "paper" && computerChoice === "scissors") {
            console.log ("loss! scissors beat paper");
        } else if (userChoice === "scissors" && computerChoice === "rock") {
            console.log ("loss! rock beats scissors");
        } else if (userChoice === "scissors" && computerChoice === "paper") {
            console.log ("win! scissors beat paper");
        }
    }

game("paper");

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kiloConverter (kilo) {
    console.log (kilo * 0.621372);
}

kiloConverter(5);


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function feetConverter (feet) {
    console.log (feet * 30.48);
}

feetConverter(5);

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong (startingNumber) {
    var i = 0;
    var bottles = startingNumber;

    while (i != startingNumber) {
        console.log(bottles, "bottles of soda on the wall");
        i++;
        bottles--;
    }
}

annoyingSong(99);

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

function gradeCalculator (grade) {
    if (grade >= 90){
        console.log("A");
    } else if (grade >= 80 && grade < 89) {
        console.log("B");
    } else if (grade >= 70 && grade < 79) {
        console.log("C")
    } else if (grade >= 60 && grade < 69) {
        console.log("D")
    } else {
        console.log("F")
    }
}

gradeCalculator(76);

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





