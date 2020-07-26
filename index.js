/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge;

if(votingAge > 18){
    console.log(true);
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a 
// second variable (no function required)


let newVar;
let secVar = 2;
if(secVar <= 5){
    newVar = 'Next assignment';
}
console.log(newVar);


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let strInt = parseInt("1999");
console.log("string to int conversion " + strInt);
//Task d: Write a function to multiply a*b 

function multiAb(a,b){
    return a*b;
}
console.log("task D" + multiAb(3,2));

let simple = (a,b) => a*b;



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function inDogYears(){
    print("Enter Age");
    let age = prompt("What is your age?");
    let formula = age * 7;
    if(formula === null){
        return 'error';
    }
    return formula;
}


console.log("Whats your age");
//console.readline("age");

console.log(inDogYears());

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of 
// raw food to feed in a day.

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

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your 
// result should be 0.44999999999999996
  //  5  =  EET   w * p / 100
  //  100   w
function dogFeeder(w,a){
    let food2EET = 0;
    if(a >= 1){
        if(a <= 5){
            food2EET = (w * 5) /100;
            return food2EET;
        } else if(a <= 10 && a >= 6){
            food2EET = (w * 4) /100;
            return food2EET;
        } else if(a <= 15 && a >= 11){
            food2EET = (w * 3) /100;
            return food2EET;
        } else if(a >= 15 ) {
            food2EET = (w * 2) /100;
            return food2EET;
        }
    } else{
        let months  = prompt("How many months old is your puppy");
        if(months <= 4 && months >= 2){
            food2EET = (w * 10) /100;
            return food2EET;
        }else if(months <= 7 && months >= 4){
            food2EET = (w * 5) /100;
            return food2EET; 
        } else if(months <= 12 && months >= 7){
            food2EET = (w * 4) /100;
            return food2EET;
        }
    }
}

console.log(dogFeeder(15,1));


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  function rockPS(guess){
      let outcome = getRandomInt(3);
      let result = "Not played";
      if(outcome === guess){
           result = "You won rock paper sissors";
          return result
      }else{
        result = "You lost rock paper sissors";
        return result;
      }
  }
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles





//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





