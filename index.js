/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)


let votingAge = 20

if(votingAge > 18){
    console.log("true")
}


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)


let secondVariable = 10

let firstVariable = 20

if(firstVariable > secondVariable){
    let firstVariable = secondVariable
    console.log(firstVariable)
}


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method



console.log(Number('1999'))

//Task d: Write a function to multiply a*b 


function product(a, b) {
    return a * b
}
let x = product(5, 3)
console.log(x)


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 


let age = 22
let dogYearMultiplier = 7

function dogYears(age, dogYearMultiplier){
    return age * dogYearMultiplier
}

console.log(dogYears(age, dogYearMultiplier))

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


function dogFeeder(weight, age){
    if(age >= 1){
        if(weight <= 5){
            return weight * 0.05
        }
        if(weight  <= 10){
            return weight * 0.04
        }
        if(weight  <= 15){
            return weight * 0.03
        }
        if(weight > 15){
            return weight * 0.02
        }
        // adult dog // 
    } else {
        if(age >= 2 && age <= 4){
            return weight * 0.1
        }
        if (age > 4 &&  age <= 7){
            return weight * 0.05
        }
        if (age > 7 && age < 12){
            return weight * 0.04
        }
        // puppy //

    }
}

console.log(dogFeeder(15, 1))


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 


function rps(pchoice, compchoice){
    if (pchoice == compchoice){
        return "it's A Draw"
    }
    if (pchoice == "rock" && compchoice == "paper"){
        return "Defeat!"
    }
    if (pchoice == "rock" && compchoice == "scissors"){
        return "victory!"
    }
    if (pchoice == "paper" && compchoice == "rock"){
        return "victory!"
    }
    if (pchoice == "paper" && compchoice == "scissors"){
        return "Defeat!"
    }
    if (pchoice == "scissors" && compchoice == "rock"){
        return "Defeat!"
    }
    if (pchoice == "scissors" && compchoice == "paper"){
        return "Victory!"
    }
}

function getCompChoice(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let ochoice = getCompChoice(0,2)
  let choices = ["rock","paper","scissors",]
  choices[0]
console.log(rps("scissors", choices[ochoice]))
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
let km = 1
function convert(km){
    return km * 0.621371
    
}
console.log(convert(km))



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
let foot = 1
function converter(foot){
    return foot * 30.48
    
}
console.log(converter(foot))


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(bottles){
    
    
    for (var i = bottles; i > 0; i--){
        console.log(i + " bottles of soda on the wall, " + i + " bottles of soda, take one down, pass it around, " + (i -1) + " bottles of soda on the wall." )

    }
}

console.log(annoyingSong(5))


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function letterGrade(grade){
    if (grade >= 90){
        return "It's an A!"
    } 
    if (grade >= 80 && grade <= 90){
        return "It's a B!"
    }
    if (grade >= 70 && grade<= 80 ){
        return "It's a C, Average."
    }
    if (grade >= 60 && grade <= 70){
        return "It's a D."
    }
    if (grade < 60){
        return "You failed, It's an F."
    }

    
}
 console.log(letterGrade(85)) 
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

let userInput = window.prompt("Rock, Paper, or Scissors")
console.log("you rolled a " + userInput)
console.log("computer rolled a " + choices[ochoice])
console.log(rps(userInput, choices[ochoice]))





console.log("hello")