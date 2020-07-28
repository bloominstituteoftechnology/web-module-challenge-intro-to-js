/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 20; 


    if (votingAge > 18) {
        console.log("true");
    } else {
        console.log("false")
    } 

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

  





//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

const  year = "1999";
console.log(parseInt(year));



//Task d: Write a function to multiply a*b 

function times(a, b) {
    return a * b;
}

console.log(times(2, 6));


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears(age) {
    return age * 7
} 
console.log(dogYears(6));



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
//      up to 5 lbs - 5% of their body weight
//      6 - 10 lbs - 4% of their body weight 
//      11 - 15 lbs - 3% of their body weight 
//      > 15lbs - 2% of their body weight 

// Puppies less than 1 year
//      2 - 4 months 10% of their body weight
//      4 - 7 months 5% of their body weight 
//      7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  

function feed(pounds, years) {
    let food = 0
    if (years >= 1) {
        if (pounds < 5) {
            food = pounds * .05; 
            console.log('The ' + years + ' year old dog eats ' + food + ' pounds of food.');
        } else if (pounds > 5 && pounds < 10) {
            food = pounds * .04;
            console.log('The ' + years + ' year old dog eats ' + food + ' pounds of food.');
        }else if (pounds > 10 && pounds <= 15) {
            food = pounds * .03;
            console.log('The ' + years + ' year old dog eats ' + food + ' pounds of food.');
        }else if (pounds > 15) {
            food = pounds * .02;
            console.log('The ' + years + ' year old dog eats ' + food + ' pounds of food.');
        }
    } else {
        console.log('dog is a puppy');
    }
    if (years < 1) {
        if (years >= .2 && years <= .4) {
            food = years * .10;
            console.log('The ' + years + ' month old dog eats ' + food + ' pounds of food.')
        } else if (years > .4 && years <= .7) {
            food = years * .05;
            console.log('The ' + years + ' month old dog eats ' + food + ' pounds of food.')
        } else if (years > .7 && years < 1) {
            food = years * .04;
            console.log('The ' + years + ' month old dog eats ' + food + ' pounds of food.')
        }
        }
 }
 
 feed(3, .4);


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 


var userChoice = "rock";
var computerChoice = Math.random();
if (computerChoice <0.34){
    computerChoice = "rock";
}else if(computerChoice <=0.67){
    computerChoice = "paper";
}
else{
    computerChoice = "scissors";
}
var compare = function(choice1,choice2){
    if(choice1===choice2){
        return "The result is a tie!";
    }
    if(choice1==="rock"){
        if(choice2==="scissors"){
            return "rock wins";
        }
        else{
            return "paper wins";
        }
    }
    if(choice1==="paper"){
        if(choice2==="rock"){
            return "paper wins";
        }
        else{
            return "scissors wins";
        }
    }
    if(choice1==="scissors"){
        if(choice2==="rock"){
            return "rock wins";
        }
        else{
            return "scissors wins";
        }
    }
};
compare(userChoice,computerChoice);

  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

let kilo = 6;

let miles = kilo / 1.6;
console.log(miles + ' miles');


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
let centimeters = 135;

let feet = centimeters / 30.5;
console.log(feet + ' feet');



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong() {  
    let bottles;
    let bottlesLeft;
    for (i = 99; i >= 1; i--) {
      if (i == 1) {
        bottles = "bottle";
        bottlesLeft = "No bottles of soda on the wall";
      } else {
        bottles = "bottles";
        bottlesLeft = i - 1 + " bottles of soda on the wall";
      } console.log(i+ " " + bottles + " of soda on the wall");
      console.log(i+ " " + bottles + " of soda,");
      console.log("Take one down pass it around");
      console.log(bottlesLeft);
      } 
      
  }
  console.log(annoyingSong());



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  

function letter(grade) {
    if (grade <= 100 && grade >= 90) {
        return 'A'          
    } else if (grade <= 89 && grade >= 80) {
        return 'B'
    } else if (grade <= 79 && grade >= 70) {
        return 'C'
    } else if (grade <= 69 && grade >= 60) {
        return 'D'
    } else {
        return 'F'
    }

}


  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





