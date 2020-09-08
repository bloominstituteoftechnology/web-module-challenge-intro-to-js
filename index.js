/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 18;

if(votingAge >= 18){
    console.log(true);
} else{
    console.log(false);
}







//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let speeding = false;
let speedLimit = 35;
let speed = 40;
if(speed > speedLimit){
    speeding = true;
}
console.log(speeding)





//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

Number("1999")  



//Task d: Write a function to multiply a*b 
let a = 10;
let b = 8;

function multiply(a , b){
return a * b;
};
console.log(multiply);





/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

let myAge = 21;
const dogYears = 7;
function multiply(myAge,dogYears){
    return myAge * dogYears;
}
console.log(multiply);



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
  



function feeder(weight, age){
    if(age >= 1 && weight <=5){
        return weight * .05
    }else if(age >= 1 && weight >= 6 && weight <= 10){
        return weight * 0.04
    }else if(age >= 1 && weight >=11 && weight <= 15){
        return weight * .03
    }else if(age >=1 && weight >=15)
        return weight * .02
    else if(age < 2 / 12) {
          return weight ‘0’
        } else if ( age < 4 / 12 ) {
          return weight * .1;
        } else if ( age < 7 / 12 ) {
          return weight * .05;
        } else if ( age < 1 ) {
          return weight * .04;
        } else {
          if ( weight <= 5 ) {
            return weight * .05;
          } else if ( weight <= 10 ) {
            return weight * .04;
          } else if ( weight <= 15 ) {
            return weight * .03;
          } else {
            return weight * .02;
          }
        }
      }
      console.log(feeder(1, 15) + ” pounds of raw food a day”);






/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
let rpc = function
  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function multiply(mile){
    let km = 5;
    return km * mile;
}
console.log(multiply(10));






//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  

function multiply(cm){
    let feet = 30.48;
    return feet * cm;
}
console.log(multiply(5));



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
const numbers = []



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  function grader(grade){
if(grade >= 90){
    return "A";
}else if(grade >= 80){
    return "B";
}else if(grade <= 70){
    return "C";
}else if(grade <= 60){
    return "D";
}else if(grade < 60){
    return "F";
}
  }
  console.log(grader)
  

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





