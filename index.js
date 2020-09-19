/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

votingAge = Math.round(Math.random() * 80);

if (votingAge > 18) {
    console.log(true)
} else {
    console.log(false)
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let changeThis = "dog";
let randNum = Math.round(Math.random() * 10);

if (randNum > 5) {
  changeThis = "cat";
} else {
  changeThis = "dog";
}

console.log(changeThis);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

console.log(Number("1999"));

//Task d: Write a function to multiply a*b 

function multTwoNum(a, b) {
    return a * b;
  }
  
  console.log(multTwoNum(5,7));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears(num1) {
    return num1 * 7;
  }
  
  console.log(dogYears(41));

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
  
function dogWeight(num2) {
    return num2;
  }
  
  function ageMonth(num1) {
    return 1 / 12 * num1; 
  }
  
  function foodWeight(ageMonth,dogWeight) {
    if (ageMonth >= 1) {
    
      if (dogWeight > 15) {
        return(dogWeight * .02);  
      } else if (dogWeight > 11) {
        return(dogWeight * .03);
      } else if (dogWeight > 6) {
        return(dogWeight * .04);
      } else {
        return(dogWeight * .05);
      }
    
    } else {
      if (ageMonth > 0.583) {
        return(dogWeight * .04);
      } else if (ageMonth > 0.333) {
        return(dogWeight * .05);
      } else {
        return(dogWeight * .1);
      }
    }
  }
  
  
  
  
  console.log(foodWeight(12,15));



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function playGame(playerOne) {  
  
    let randNum = Math.random();
    
    if ((playerOne === "scissors") && (randNum >= 0.6667)) {
      return "Scissors - Tie";
    } else if ((playerOne === "scissors") && (randNum >= 0.3333)) {
      return "Paper - You Win!";
    } else if ((playerOne === "scissors") && (randNum < 0.3333)) {
      return "Rock - You Lose";
    } else if ((playerOne === "paper") && (randNum >= 0.6667)) {
      return "Scissors - You Lose";
    } else if ((playerOne === "paper") && (randNum >= 0.3333)) {
      return "Paper - Tie";
    } else if ((playerOne === "paper") && (randNum < 0.3333)) {
      return "Rock - You Win!";
    } else if ((playerOne ==="rock") && (randNum >= 0.6667)) {
      return "Scissors - You Win!";
    } else if ((playerOne === "rock") && (randNum >= 0.3333)) {
      return "Paper - You Lose";
    } else {
      return "Rock - Tie";
    }
  }
  
  console.log(playGame("paper"));  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function miles(num1) {
    return num1 * 0.621371;
  }
  
  console.log(miles(5));

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function centimeters(num2) {
    return num2 * 30.48;
  }
  
  console.log(centimeters(8));

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(num1) {
  
    for ( let i = num1; i > 0; i--) {
      console.log( i + " bottles of soda on the wall, " + i + " bottles of soda, take one down, pass it around, ");
      console.log(i - 1 +" bottles of soda on the wall!");
  }
  }
  
  
  console.log(annoyingSong(99));

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function calculate(num1) {
    if (num1 >= 90) {
      return "A";
    } else if (num1 >= 80) {
      return "B";
    } else if (num1 >= 70) {
      return "C";
    } else if (num1 >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  
  console.log(calculate(55));
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





