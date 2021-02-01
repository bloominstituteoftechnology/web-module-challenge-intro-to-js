// // . Create a variable called votingAge and assign it a value
   // 2. Console log true if age is 18 or higher
   var x = "votingAge";
   x = "18";
   
   if (x >= 18) {
     console.log ("true") 
   // }
   //   // HINT: no function required
   // // */
   
   // // Do the following:   
   //   // 1. Declare two variables and assign them values
   
   var x = "votingAge";
   x = Math.floor(Math.random() * 85); y= "felon";
   y= Math.floor(Math.random() * 2); // 1 = Yes, 2=no
   
   if (x >= 18) {
     console.log ("Can Vote") 
   }
   else if (y =1){
     console.log ("Cant Vote")  
    }
   else if (y=2) {
     console.log ("Can Vote")
   }
   
   
   //  /*
   // Task 1b - Values
   
   //    2. Use a conditional to change the value of the 1st variable based on the value assigned to the 2nd variable
   //    3. Console log the new value of the 1st variable
   
   //    HINT: no function required
   // */
   
   
   
   
   
   // /*
   // Task 1c - Convert Strings to Numbers
   
   // Do the following:   
   //    1. Declare a string type variable with the value of "1999"
   //    2. Convert the string value of "1999" to a integer value of 1999
   //    3. Console log the result
   
   //    HINT: look up the Number method
   */
   var x = "1999";
   var y = 1999;{
     console.log(y)
    }
   
   // /*
   // Task 1d - Multiply
    
   // Do the following:   
   //    1. Invoke the multiply function below and pass it two numbers
   //    2. Receive the numbers in the parameters: a and b
   //    3. Multiply a and b and return the answer
   // */
   
   function multiply(a,b){
           return a*b;
    }
    var a= multiply(4,5);{
       console.log(a)
    }
   
   // /*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
   
   // //Age in Dog years
   // /*
   // Do the following:
   //    1. Invoke the dogYears function below and pass an age value to it
   //    2. Use the received value to calculate the age in dog years (1 human year is equal to 7 dog years)
   //    3. Return the newly calculated age
   // */
   
     
   function FindDogYears(age) {
       var dogYears = 7*age;
       console.log( dogYears );
   }
   
   FindDogYears(2);
   
   
   
   // /*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
   
   // //Dog feeder - Depending on their weight and age, we need to know how many pounds of food to feed our dog each day!
   // /*
   // Use the hungryDog function and feeding requirements below to do the following:
   //   1. Invoke the hungryDog function below and pass it a weight value in pounds
   //   2. Also, pass to hungryDog an age value in years (note: if the dog is a puppy, the age will be a decimal. For example: three months = 3/12 or .25)
   //   3. Do the proper calculations and return the number of pounds of raw food to feed the dog/puppy in a day
     
   //   REMEMBER: This program should handle correctly adult AND puppy ages and weights
     
   //   Feeding Requirements:
   
   //   Adult Dogs 1 year and older 
   //      up to 5 lbs - 5% of their body weight
   //      6 - 10 lbs - 4% of their body weight 
   //      11 - 15 lbs - 3% of their body weight 
   //      > 15lbs - 2% of their body weight 
   
   //   Puppies less than 1 year
   //      2 - 4 months 10% of their body weight
   //      4 - 7 months 5% of their body weight 
   //      7 - 12 months 4% of their body weight
       
   //   NOTE: If done correctly, a weight of 15 lbs and age of 1 year would return 0.44999999999999996
   // */  
   
   function hungryDog(weight, age){
     if (age >= 1 && weight <=5) {
      return weight * .05;
     }
     else if (age >= 1 && weight >5 && weight <=10) {
      return weight * .04;
     }
     else if (age >=1 && weight >10 && weight <=15) {
      return weight * .03;
     }
     else if (age >=1 && weight >15) {
      return weight * .02;
    }
   }
     console.log (hungryDog (15,1));
   
   // /*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
   
   // // Rock, Paper, Scissors - Let's play against the computer!
   // /*
   // Create a global variable that randomly generates the computer's choice
   // Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)
   
   // HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()
   
   // Use the game function below to do the following:
   //   1. Receive 2 parameters the user's choice and the computer's choice
   //   2. Return whether the user won, lost, or tied based on these rules of the game described below - the strings returned need to match the strings below exactly.
   //    - win should return "you win!"
   //    - lose should return "you lose!"
   //    - tie should return "it's a tie"
     
   //   RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie
     
   //   HINT: Remember that the order in which we pass in our arguments matters when it comes to parameters
   // */
   var user = prompt("rock, paper or scissors?");
   
      var computer = Math.floor(Math.random() * 3);
      if (computer =3 ) {
         computer = "rock";
   } 
       else if (computer = 2) {
    computer = "paper";
   } 
       else (computer = 1) 
     computer="scissors";
   
   var compare = function(choice1,choice2){
     
     if(choice1===choice2){
       return "it's a tie";
   }   
     else if(choice1==="rock"){
       if(choice2=== "scissors"){
         return "you lose";
   }
       else {
         return "you win";
   }
   }
       else if(choice1==="scissors"){
        if(choice2=== "rock"){
         return "you win";
   }
       else {
         return "you lose"
   }
   }
       else if(choice1==="paper"){
         if(choice2==="rock"){
           return "you lose"
         }
        else {
          return "you win"
        }
       }
   }
   console.log (compare(user,computer));
   
   // /*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
   
   // //Metric Converter 
   // //Task 5a - KM to Miles 
   // /*
   // Using the miles function below do the following:
   //   1. Receive a number of kilometers
   //   2. Convert the number of kiolmeters received to miles
   //   3. Return the number of miles
   // */
   
   // function miles(miles){
       var KM = miles/0.6214;
       console.log(KM,miles );
   }
   
   // miles(20);
   
   
   
   // //Task 5b - Feet to CM
   // /*
   // Using the feet function below do the following:
   //   1. Receive a number of cm
   //   2. Convert the number of cm to feet
   //   3. Return number of feet
   // */
   
   function feet(feet){
       var CM = feet/0.0328;
       console.log(feet,CM );
   }
   
   // feet(2);
    
   
   
   /*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
   
   // Let's Sing 99 Bottles of Soda on the Wall!
   /*
   Using the annoyingSong function below do the following:
     1. Receive a starting number and start the count down from the number received 
     2. At each invocation, it should RETURN this string (note: the tests are expecting the same string as below):
         "{number} bottles of soda on the wall, {number} bottles of soda, take one down pass it around {number left over} bottles of soda on the wall"
   */
   var count =0
   
   for (var i= 0; i<10; i++);
       while (count <=10) {
     console.log(count + "bottles of soda on the wall" + count +"bottles of soda,take one down pass it around",+ i + "bottles of soda on the wall" );
      count++
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
     
   function myGrade(grade){
      if (grade >= 90 && grade <=100) {
       return "you got an A";
      }
      else if (grade >= 80 && grade <=89) {
       return "you got a B";
      }
      else if (grade >=70 && grade <=79) {
       return "you got a C";
      }
      else if (grade>=60 && grade <=69) {
       return "you got a D";
      }
      else if (grade <60) {
       return "you got an F";
      }
   }
      console.log (myGrade (50));
   

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
function foo(){
    //console.log('its working');
    return 'bar';
}
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
export default{
    foo,
    multiply,
    dogYears,
    hungryDog,
    game,
    miles,
    feet,
    annoyingSong,
    grade
}
