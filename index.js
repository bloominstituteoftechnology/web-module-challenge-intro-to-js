/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
var votingAge = 19;
if(votingAge > 17){
    console.log(true);
}
else{
    console.log(false)
}






//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
var firstvar = "notchanged";
var secondvar = 5;
if(secondvar === 5){
    firstvar = "changed";
}

console.log(firstvar);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
let changethis = "1999";
Number(changethis);





//Task d: Write a function to multiply a*b 
function multiply( a, b){
  console.log (a * b);
}
multiply(5, 2);





/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
function dogyears(age){
    console.log (age * 7);
}
dogyears(21);




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
  function dogfeed(age, weight){
      if(age >= 1){
          if(weight < 6){
                console.log(weight / 100 *5);
          } else if(weight < 11){
                console.log(weight / 100 *4); 
          } else if( weight < 16){
                console.log(weight / 100 *3);
          } else{
                console.log(weight / 100 *2);
          }
      } else {
          if(age < .16){
          console.log("give the puppy milk")
        } else{
            if(age < .32){
                console.log(weight / 100 * 10);
            } else if(age < .581){
                console.log(weight / 100 *5);
            }else{
                console.log(weight / 100 *4);
            }
        }

  }
}
dogfeed(1, 15)





/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
function rockpaperscissors(playerchoice){
    let computerchoice = Math.floor(Math.random() * 3);
    if(computerchoice = 0){
        var computeranswer = "Rock";
    }else if(computerchoice = 1){
        var computeranswer = "Paper";
    }else if(computerchoice = 2){
        var computeranswer = "Scissors";
    }
    if(playerchoice === computeranswer){
        var didtheywin = "TIE";
    } else{
        if(computeranswer === "Rock"){
            if(playerchoice === "Paper"){
            var didtheywin = "WIN";
            }else{
            var didtheywin = "LOSE";
            }
        }else if(computeranswer === "Paper"){
            if(playerchoice === "Scissors"){
                var didtheywin = "WIN";
                }else{
                var didtheywin = "LOSE";
                }
        }else{
            if(playerchoice === "Rock"){
                var didtheywin = "WIN";
                }else{
                var didtheywin = "LOSE";
                }
        }
    }
    console.log("The opponent chose", computeranswer, "you chose", playerchoice, "so it looks like you", didtheywin)
}


rockpaperscissors("Paper");
  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function tomiles(kilometers){
    console.log(kilometers * 0.621371);
}




//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  function tocm(Feet){
      console.log(feet * 30.48)
  }




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
function annoyingsong(bottles){
    for (bottles >= 1; bottles--;){
        console.log(bottles, "bottles of soda on the wall,", bottles, "bottles of soda,take one down pass it around", bottles, "bottles of soda on the wall")
      }
  }
annoyingsong(5);



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
function grades(percent){
  if(percent > 90){
      console.log("A");
  } else if(percent > 80){
    console.log("B");
  }else if(percent > 70){
    console.log("C");
  }else if(percent > 60){
    console.log("D");
  }else{
    console.log("F");
  }
}
grades(35)

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





