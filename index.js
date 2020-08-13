/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if the age > 18 (no function required)

var name = "votingAge";
if (age < 18) {
console.log(The expression is true);
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let waves = 'Calm';
let surfing = 'bad';
if(surfing = 'good'){
    waves = 'Calm';
}else if( behaviour === 'bad'){
    waves = 'Rough';
}
console.log(dog);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

var nstring = Number("1999");
console.log(nstring)
//Task d: Write a function to multiply a*b
function multiply(a, b){
    return a * b;
}
console.log

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years

let myAge = "26";
function multiply(a, b){
    return a * b;
}
console.log("Dog Age = ") + multiply(myAge, 7));

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.
// REMEMBER THIS IS LOTS OF CONDITIONALS***

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

let dogAge = 1;
let bodyweight = 15;
let months = dogAge * 12;
function dogFood(){
    if(dogAge >= 1){
        if(bodyweight <= 5 ){
            return bodyweight * .05;
        }
        if(bodyweight >= 6 && bodyweight <= 10){
            return bodyweight * .04;
        }
        if(bodyweight > 15 ){
            return bodyweight * .02;
        }
    }
    else{
        if(months >= 2 && months < 4){
            return bodyweight *.1;
        }
        if(months >= 4 && months < 7){
            return bodyweight *.05;
        }
        if(months >= 7 && months < 12){
            return bodyweight *.04;
        }
    }
}

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

function RockPaperScissors
(){
    const rock = 0;
    const paper = 1;
    const scissors = 2;
    let yourChoice = paper
    const min = Math.ceil(0);
    const max = Math.floor(2);
    let compChoice = Math.floor(Math.random() * (max - min + 1)) + min; 
    if(yourChoice > compChoice){
       return "you win";
    }
    if(yourChoice === compChoice){
       return "tied";
    }
    else{
       return "you lost";
    }
}
console.log(RPS())

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function KToM(km) {
	miles = km / 1.609;
	message = km + ' km is ' + miles + ' mi '
	return message;
}

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

function FtoM (feet) {
	centimeters = fe * 30.48;
	message = feet + ' ft is ' + centimeters + ' cm ';
	return message;
}

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(num) {
	for (i = num; i > 0; i--) {
		console.log(i + ' Bottles of Soda on the Wall, ' + i + ' Bottles of Soda, take one down pass it around ' + (i - 1) + ' Bottles of Doda on the Wall!');
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

function gradesCalculator(){
    let grade = 86 
    if(grade > 89){
        return "A";
    }
    if(grade > 79 && grade < 90){
        return "B";
    }
    if(grade > 69 && grade < 80){
        return "Cs";
    }
    if(grade > 59 && grade < 70){
        return "D";
    }
    if(grade < 60){
        return "F"
    }
  }
console.log(gradesCalculator())


/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
