/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
const votingAge = 20;
console.log("taskA", votingAge > 18 ? true : false);





//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let agetovote;
let drinkingAge = 21;
if (drinkingAge > 20) {
    agetovote = true
} else {
    agetovote = false
}

console.log("taskB", agetovote)

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
let string = "1999";
integer = Number(string)
console.log(integer)




//Task d: Write a function to multiply a*b 
const multiply = (a, b) => {
    return a * b
}
console.log(multiply(1, 7))

const add = (d, f) => {
    return d + f
}
console.log(add(8, 9))

const subtract = (b, c) => {
    return b - c
}
console.log(subtract(5, 4))




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
const multiply2 = (age) => {
    return age * 7
}
console.log(multiply2(42))




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
// const dogs one year or older
const dogfeeder = (weight, age) => {
    let food = 0;
    if (age >= 1) {
        if (weight <= 5) {
            food = weight * .05
        } else if (weight > 5 && weight < 10) {
            food = weight * .04
        } else if (weight > 11 && weight <= 15) {
            food = weight * .03
        } else {
            food = weight * .02
        }
    } else {
        if (weight < .33) {
            food = weight * .1
        } else if (weight > .34 && weight < .6) {
            food = weight * .05
        } else {
            food = weight * .04
        }
    }
    console.log("the dog needs " + food + " pounds of food.")
}
dogfeeder(15, 1)



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Scissors
// Your function should take a string (either rock paper or scissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
const RPC = (myRPC) => {
    let randomseed = Math.random();
    let computornumber = Math.ceil(randomseed * 3);
    // rock = 1, paper = 2, scissors = 3
    let playerchoice = 0
    if (myRPC.toLowerCase() === "rock") {
        playerchoice = 1
    } else if (myRPC.toLowerCase() === "paper") {
        playerchoice = 2
    } else {
        playerchoice = 3
    }
    if (playerchoice === computornumber) {
        console.log("tie game")
    } else if (playerchoice === 1 && computornumber === 2) {
        console.log("player choose rock and computer choose paper. computer wins")
    } else if (playerchoice === 1 && computornumber === 3) {
        console.log("player choose rock and computer choose scissors player wins")
    } else if (playerchoice === 2 && computornumber === 1) {
        console.log("player wins")
    } else if (playerchoice === 2 && computornumber === 3) {
        console.log("computer wins")
    } else if (playerchoice === 3 && computornumber === 1) {
        console.log("computer wins")
    } else {
        console.log("computer wins")
    }
}

RPC("rock")

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
// const kilometers = (miles * 1.6)

const kmtomiles = (km) => {
    let miles = km / 1.6;
    console.log(km + " km equals " + miles + " miles")
}
kmtomiles(3.2)


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
const feettocm = (feet) => {
    let cm = feet * 30.48;
    console.log(cm + " cm equals" + feet + " feet")
}

feettocm(3)


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