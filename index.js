/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

//var votingAge = 18 
//console.log(votingAge);
//if(votingAge = 18);
//console.log(votingAge);
//if(votingAge > 18);
//console.log(true){
    //if (votingAge < 18){

    //}
     //console.log(false);


     //“If” statements: where if a condition is true it is //used to specify execution for a block of code.
    // “Else” statements: where if the same condition is false it specifies the execution for a block of code.
    // “Else if” statements: this specifies a new test if the first condition is false.

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

//var weightDivideHeightSquare = 
//var HealthyBMI = 18 through 24
//console.log(HealthyBMI);

//if (HealthyBMI < 18);{ 
//console.log(UnderWeight);{
    //}
////}

//else (HealthyBMI > 24); {
//console.log(OverWeight);

//elseif (HealthyBMI === 18-24);{

//}
//console.log(HealthyWeight);

//var varTen = [10, 1] 
 //if (varTen < 10)
 //return (varTen)



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
//var x = "1999";
//Number("1999");
//console.log(Number);

//Number('123');{
    //return Number
///}
  // returns the number 123
///Number('123') === 123 
 // true

 //var x = "1999";
 //x.toString();  
 //console.log(x);          
 //(1999).toString();         
 //(1999 + 100).toString();  

//var x = "1999";
///Number();
//console.log(x);






//Task d: Write a function to multiply a*b 

//function multiplyer() {
 //multiplyer(10, 10);
//return a*b;
//}
//function multiplyNumbers(6, 7)
    //console.log(multiplyNumbers)

function multiplyer(a,b) {
    return a*b;
}
var x = multiplyer (777666,55510);
//console.log(x);



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function changeAge(age,b) {
    return (age * 7);
}
var age = changeAge (7);
//console.log(age);




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
  
function dogFeeder(x,y) {
 return (x * .1);
}
var x = dogfeeder(7);
    console.log(x);






/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

  
  

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





