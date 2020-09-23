/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = '18';

if (age => 18) {
    console.log("Submit Vote");
}
else {
    console.log("Not Old Enough");
}


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let num1 = Math.round(Math.random() * 20);



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

Number("1999");



//Task d: Write a function to multiply a*b 

let a = '2'
let b= '5';

function timesTwoNumbs (a,b) {
    return a*b;
}



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

let MyAge = '25'
let dog = '7';

function multiplyTwoNumbs (MyAge,dog) {
    return MyAge*dog;
}



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

dog ='15'
let ratio = '.03';
function multiplyNumbers (dog,ratio) {
    return dog*ratio;
}
console.log(multiplyNumbers(dog, ratio))




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 


let rock = 1;
let paper = 2;
let scissors = 3;

function playRound(playerSelection) {
    let computerSelection = Math.ceil(Math.random()*3)
    if (playerSelection === computerSelection) {
      return 'Draw!';
    } else if ((playerSelection == rock) && (computerSelection == 3)) {
      return "Player won!";
    } else if ((playerSelection == paper) && (computerSelection == 1)) {
      return "Player won!";
    } else if ((playerSelection == scissors) && (computerSelection == 2)) {
      return "Player won!";
    } else if ((playerSelection == paper) && (computerSelection == 3)) {
      return "Computer won!";
    } else if ((playerSelection == scissors) && (computerSelection == 1)) {
      return "Computer won!";
    } else if ((playerSelection == rock) && (computerSelection == 2)) {
      return "Computer won!";
    }
  }
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kmToMiles(km) {
    return km / 1.60934;
}
kmToMiles(3)
console.log(kmToMiles(3))

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function ftToCm(cm) {
    return cm * 30.48;
}
ftToCm(200)
console.log(ftToCm(200))



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  


function annoyingSong(startingNumber) {
    while(startingNumber > 0) {
        console.log(`${startingNumber} bottles of beer on the wall, ${startingNumber} bottles of beer, take one down pass it around ${startingNumber - 1} bottles of beer on the wall`)
        startingNumber--
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
  
function grade(percent) {
    if (percent >= 90){
        return "A";
    }
    else if (percent >= 80) {
        return "B";
    }
    else if (percent >= 70) {
        return "C";
    }
    else if (percent >= 60) {
        return "D";
    }
    else if (percent < 60) {
        return "You Suck!";
    } 
}
console.log(grade(50))
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





