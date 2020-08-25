/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

var votingAge = 18;

if (votingAge > 18) {
  console.log(true)
}




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)





//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method


let str = '1999';
parseInt(str);




//Task d: Write a function to multiply a*b

function multiplynumbers(a, b) {
    let result = a * b;
    console.log(result);
}

multiplynumbers(2, 3);





/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years

function dogYears(humanyear) {
      let result = humanyear * 7;
      console.log(result);
}
dogYears(1);



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

function dogFeeder(dogweight,bodyWeight){
  if (dogweight <=1 && dogweight <= 15) {
    return dogweight * 0.5
  }
  else if (dogweight >=1 && dogweight <=10) {
    return dogweight * 0.4
  }
  else if (dogweight <=1 && dogweight <=15) {
    return dogweight * 0.3
  }
  else if (dogweight >15) {
    return dogweight * 0.2
  }
}
console.log(dogFeeder(1, 15));


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number
// Take in one argumenmt (Player), assign things to each possible outcome ( player = rock, computer = scissors ); think about the different options  and return either win/lsoe if else statements


function game(computerChoice,myChoice){
  if (computerChoice < myChoice) {
    return "You win"
  }
  else if (computerChoice > myChoice) {
    return "You lose"
  }
  else if (computerChoice === myChoice ) {
    return "A tie!"
  }
}

let paper = Math.random();
let rock = Math.random();
let sissor = Math.random();
console.log(game(paper,paper));
















/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

var KM = 4

let miles = KM * 0.62137;
console.log(miles);




//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

var ft = 4

let CM = ft / 0.032808;
console.log(CM);



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(num) {
  return num - 1
  console.log("'+ annoyingSong +'bottles of soda on the wall");
}
annoyingSong(9);



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F

function gradeCalculator(maxGrade) {

if (maxGrade == 100 || maxGrade >= 90) {
console.log("A")}
if (maxGrade == 89 || maxGrade >= 80); {
  console.log("B")
} if (maxGrade == 79 || maxGrade >= 70); {
  console.log("C")
} if (maxGrade == 69 || maxGrade >= 60); {
  console.log("D")
} if (maxGrade == 50 || maxGrade >= 0); {
  console.log("F")}
}

console.log(gradeCalculator(50));





/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
