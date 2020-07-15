/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
const votingAge = "age > 18";
if (votingAge === "age > 18") {
  console.log(true);
} else {
  console.log(false);
}
//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let animal = "cat";
let behavior = "shy";

if (behavior === "shy") {
  behavior = animal;
  console.log(behavior);
} else {
  console.log("somthing else");
}

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
var a = parseInt("1999");
console.log(a);
//Task d: Write a function to multiply a*b
function myFunction(num1, num2) {
  return num1 * num2;
}
console.log(myFunction(2, 3));
/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years
function dogYears(myAge) {
  return myAge * 7;
}
console.log(dogYears(1));
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
//math is wrong
function dogFeeder(age, weight) {
  if (
    (age >= 1 && weight === 1) ||
    weight === 2 ||
    weight === 3 ||
    weight === 4 ||
    weight === 5
  ) {
    return weight * 0.05;
  } else if (
    age >= 1 ||
    weight === 6 ||
    weight === 7 ||
    weight === 8 ||
    weight === 9 ||
    weight === 10
  ) {
    return weight * 0.03;
  } else if (
    age >= 1 ||
    weight === 11 ||
    weight === 12 ||
    weight === 13 ||
    weight === 14 ||
    weight === 15
  ) {
    return weight * 0.03;
  } else if (age >= 1 || weight > 15) {
    return weight * 0.02;
  } else if (age === 0.16 || 0.25 || 0.33) {
    return age * 0.1;
  } else if (age === 0.33 || age === 0.41 || age === 0.5 || age === 0.58) {
    return age * 0.05;
  } else if (age === 0.66 || age === 0.75 || age === 0.83 || age === 0.91) {
    return age * 0.04;
  }
}
console.log(dogFeeder(1, 15));
/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number
function rps(hand) {
  let npc = Math.random();
  //Rock
  if (npc < 0.3) {
    return "you tied";
  }
  //Paper
  if (npc > 0.3 && npc < 0.6) {
    return "you lost";
  }
  //Scissors
  if (npc > 0.6) {
    return "you won";
  }
}
console.log(rps("paper"));
/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
function metricConverter(km) {
  //km to ml
  return km * 0.62137;
}
console.log(metricConverter(5));
//ft to cm
function metricConverter(ft) {
  return ft * 30.48;
}
console.log(metricConverter(5));

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
function annoyingSong(num) {
  for (i = num; i > 0; i--)
    console.log(
      i +
        " bottles of soda on the wall, " +
        i +
        " bottles of soda, take one down pass it around " +
        (i - 1) +
        " bottles of soda on the wall"
    );
}
annoyingSong(5);

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F

function myFunction(num1) {
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
console.log(myFunction(50));

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
