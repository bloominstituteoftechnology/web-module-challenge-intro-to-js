var votingAge = 18;
if (votingAge >= 18) {
  console.log("true");
}

let num1 = 1;
let num2 = 2;
if (num1 !== num2) {
  num1 = 2;
}
console.log(num1);

var i = "1999";
if ("1999" === i) {
  i = 1999;
}
console.log(i);

function multiply(a, b) {
  return (a = 5) * (b = 9);
}

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Age in Dog years
/*
Do the following:
 1. Invoke the dogYears function below and pass an age value to it
 2. Use the received value to calculate the age in dog years (1 human year is equal to 7 dog years)
 3. Return the newly calculated age
*/
var age = 11;
function Dogyears(age, ups) {
  return;
  var ups = age * 7;
}

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Dog feeder - Depending on their weight and age, we need to know how many pounds of food to feed our dog each day!
/*
Use the hungryDog function and feeding requirements below to do the following:
1. Invoke the hungryDog function below and pass it a weight value in pounds
2. Also, pass to hungryDog an age value in years (note: if the dog is a puppy, the age will be a decimal. For example: three months = 3/12 or .25)
3. Do the proper calculations and return the number of pounds of raw food to feed the dog/puppy in a day

REMEMBER: This program should handle correctly adult AND puppy ages and weights

Feeding Requirements:

Adult Dogs 1 year and older 
   up to 5 lbs - 5% of their body weight
   6 - 10 lbs - 4% of their body weight 
   11 - 15 lbs - 3% of their body weight 
   > 15lbs - 2% of their body weight 

Puppies less than 1 year
   2 - 4 months 10% of their body weight
   4 - 7 months 5% of their body weight 
   7 - 12 months 4% of their body weight
  
NOTE: If done correctly, a weight of 15 lbs and age of 1 year would return 0.44999999999999996
*/

function hungryDog(age, weight) {
  if (age >= 1 && weight <= 5) {
    return weight * 0.05;
  } else if (age >= 1 && weight >= 6 && weight <= 10) {
    return weight * 0.04;
  } else if (age >= 1 && weight >= 11 && weight <= 15) {
    return weight * 0.03;
  } else if (age >= 1 && weight > 15) {
    return weight * 0.02;
  } else if (age < 1 && age >= 0.583) {
    return weight * 0.04;
  } else if (age < 0.583 && age >= 0.333) {
    return weight * 0.05;
  } else if (age < 0.333) {
    return weight * 0.1;
  }
}

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Rock, Paper, Scissors - Let's play against the computer!
/*
Create a global variable that randomly generates the computer's choice
Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)

HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()

Use the game function below to do the following:
1. Receive 2 parameters the user's choice and the computer's choice
2. Return whether the user won, lost, or tied based on these rules of the game described below - the strings returned need to match the strings below exactly.
 - win should return "you win!"
 - lose should return "you lose!"
 - tie should return "it's a tie"

RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie

HINT: Remember that the order in which we pass in our arguments matters when it comes to parameters
*/

function game(user, computer) {
  let computer = Math.ceil(Math.random() * 3);
  let rock = 1;
  let paper = 2;
  let scissors = 3;

  function game(user, computer) {
    if (computer === rock && user === paper) {
      return "you win!";
    } else if (computer === paper && user === scissors) {
      return "you win!";
    } else if (computer === scissors && user === rock) {
      return "you win!";
    } else if (computer === user) {
      return "it's a tie";
    } else if (computer === rock && user === scissors) {
      return "you lose!";
    } else if (computer === paper && user === rock) {
      return "you lose!";
    } else if (computer === scissors && user === paper) {
      return "you lose!";
    }
  }
}

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Metric Converter
//Task 5a - KM to Miles
/*
Using the miles function below do the following:
1. Receive a number of kilometers
2. Convert the number of kiolmeters received to miles
3. Return the number of miles
*/

function miles(klm) {
  return klm / 1.6;
}
console.log(miles(5));

//Task 5b - Feet to CM
/*
Using the feet function below do the following:
1. Receive a number of cm
2. Convert the number of cm to feet
3. Return number of feet
*/

function feet(cm) {
  return cm / 0.0328084;
}
console.log(miles(5));

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
1. Receive a starting number and start the count down from the number received 
2. At each invocation, it should RETURN this string (note: the tests are expecting the same string as below):
    "{number} bottles of soda on the wall, {number} bottles of soda, take one down pass it around {number left over} bottles of soda on the wall"
*/

function annoyingSong() {
  var bottles;
  var bottlesLeft;
  for (i = 6; i >= 1; i--) {
    if (i == 1) {
      bottles = "bottle";
      bottlesLeft = "No bottles of beer on the wall!";
    } else {
      bottles = "bottles";
      bottlesLeft = i - 1 + " bottles of beer on the wall!";
    }
    console.log(i + " " + bottles + " of beer on the wall,");
    console.log(i + " " + bottles + " of beer,");
    console.log("Take one down, pass it around,");
    console.log(bottlesLeft);
  }

  /*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

  //Grade Calculator
  /*
Using the grade function below do the following: 
1. Receive a score out of 100 
2. Return the corresponding letter grade following this grade scale:

 90-100 should return 'you got an A' 
 80-89 should return 'you got a B'
 70-79 should return 'you got a C'
 60-69 should return 'you got a D'
 below should return 'you got an F'
*/
  function grade(score) {
    if (score >= 90) {
      return;
      ("you got an A");
    } else if (marks >= 80) {
      return "you got a B";
    } else if (marks >= 70) {
      return "you got a C";
    } else if (marks >= 60) {
      return "you got a D";
    } else if (marks < 60) {
      return "you got an F";
    }
  }

  /*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

  //Vowel Counter - How many vowels are there?
  /*
Using the vowelCounter function below do the following:
1. Receive a string as a parameter
2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

HINT - you may need to study tomorrow's content on arrays 
HINT - try looking up the .includes() method
*/

  function vowelCounter(/*add your code here*/) {
    /*add your code here*/
  }

  /*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
  function foo() {
    console.log("its working");
    return "bar";
  }
  foo();
  /*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
  module.exports = {
    foo,
    multiply,
    dogYears,
    hungryDog,
    game,
    miles,
    feet,
    annoyingSong,
    grade,
  };
}
