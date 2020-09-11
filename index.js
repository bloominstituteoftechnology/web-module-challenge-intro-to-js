/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 17;

// if(votingAge > 18){
//   console.log(true);
// } 

if (votingAge >= 18) {
    console.log(true);
} else {
    console.log(false)
}





//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)


let x = 1;
let y = 10;
if (x + y) {
    x++
}


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method



Number("1999");

//Task d: Write a function to multiply a*b 

function multiply(a, b) {
    return a * b;
}



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 


function dogYears(yourAge) {
    return yourAge * 7;
}


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


function hungryDog(weight, age) {
    if (age >= 1 && weight <= 5) {
        return weight * 0.05
    } else if (age >= 1 && weight <= 10) {
        return weight * 0.04
    } else if (age >= 1 && weight <= 15) {
        return weight * 0.03
    } else if (age >= 1 && weight < 15) {
        return weight * 0.02
    } else if (age < .75 && age >= 0.583) {
        return weight * 0.05
    } else if (age < .5 && age >= 0.333) {
        return weight * 0.05
    } else if (age < .33 && age >= 0.333) {
        return weight * 0.05
    }

}


console.log(hungryDog(15, 1))


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

// Get the user's choice
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        return ('Invalid User Choice');
    }
}


// Get the computer's choice
const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'scissors';
            break;
        case 2:
            return 'paper';
            break;
    }
}

// Compare choices and determine winner
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'Tie game!';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }

}

// Start the game
const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log(`You threw ${userChoice}`);
    console.log(`The computer threw ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();


/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

// km -> mi : 0.621
// : 1.609
function metricConverter(km) {
    const answer = 0.621 * km

    return answer
}

// console.log(metricConverter(2))




//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
function feetCM(feet) {
    const answer = 2.54 * feet

    return answer
}

console.log(feetCM(3))




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





