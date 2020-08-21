/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

var votingAge = 18

    if (votingAge > 17){

        console.log(true);
    }
    else {
        
        console.log(false);

    }



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

var myVariable = 'False';
 if (true) {
   myVariable = 'True';
 }

 console.log(myVariable === myVariable)


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

Number("1999");




//Task d: Write a function to multiply a*b 

function multiply(a, b){
    return a * b;
}
multiply();
  



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function calculateDogAge(age) {
    var dogYears = 7 * age;
    console.log(dogYears);
}

calculateDogAge();




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
  
function foodAmount(age, weight){

    if(age >= 1 && weight <= 5){
      console.log(weight * .05);
    } else if(age >= 1 && (weight >= 6 && weight <= 10)){
      console.log(weight * .04);
    } else if(age >= 1 && (weight >= 11 && weight <= 15)){
      console.log(weight * .03);
    } else if(age >= 1 && (weight > 15)){
      console.log(weight * .02);
    } else if(age >= .16666667 && age <= .33333333 ){
      console.log(weight * .10);
    } else if(age >= .33333333 && age <= .58333333){
      console.log(weight * .05);
    } else{
      console.log(weight * .04);
    }
}    
    foodAmount(.59, 15);



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

const getUserChoice = userInput =>{
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput==='paper' || userInput ==='scissors') {
      return userInput;
    } else {
      console.log('not a valid choice');
    }
  };
  
  function getComputerChoice() {
    switch(Math.floor(Math.random()*3)) {
      case 0:
        return 'rock';
      case 1:
        return 'scissors';
      case 2:
        return 'paper';
        };
  }
  
  function determineWinner(userChoice,computerChoice) {
    if (userChoice === computerChoice) {
      return 'It\'s a tie!';
    } else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'You lost!';
      } else {
        return 'You won!';
      }
    } else if (userChoice === 'paper'){
      if (compterChoice === 'scissors') {
        return 'You lost!';
      }else {
        return 'You won!';
      }
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'You lost!';
      } else {
        return 'You won!';
      }
    } else if (userChoice === 'bomb') {
      return 'You won!';
    }
  };
  
  function playGame() {
    var userChoice = getUserChoice('scissors');
    var computerChoice = getComputerChoice()
    console.log(`you picked ${userChoice}`);
    console.log(`computer picked ${computerChoice}`);
    console.log(determineWinner(userChoice,computerChoice));
  }
    playGame();
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

var kilometers = parseInt(prompt("Please enter kilometers:"));
var miles = kilometers / 1.6;
console.log(miles + " miles");




//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
var feet = parseInt(prompt("Please enter feet:"));
var cm = feet * 30.48;
console.log(cm + " centimeters");



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(){
    var word = "bottles";
    var count = 99;
    while (count > 0) {
      if (count == 1){
        var word = "bottle"
      }
        console.log(count + " " + word + " of soda on the wall");
        console.log(count + " " + word + " of soda,");
        console.log("Take one down, pass it around,");
        count = count - 1;
        if (count > 0) {
          if (count == 1){
            var word = "bottle"
          }
            console.log(count + " " + word + " of soda on the wall.");
        } else {
          if (count < 1){
            var word = "bottles"
          }
            console.log("No more " + word + " of soda on the wall.");
        }
    }
    }
    annoyingSong();




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
var grade = prompt("What is the number grade?");

if(grade >= 90) {
console.log("A");
}
if(grade <= 89 && grade >= 80) {
console.log("B");
}
if(grade <= 79 && grade >= 70) {
console.log("C");
}
if(grade <=69 && grade >= 60) {
console.log("D");
}
if(grade < 60) {
console.log("F");
}

  
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]


function countVowelsIterative(text) {
  let counter = 0;
  for (let letter of text.toLowerCase()){
    if (vowels.includes(letter)) {
       counter++
    }
}

return counter
}
countVowelsIterative('');




/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

