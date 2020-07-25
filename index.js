/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge =18;
if(votingAge > 18){
    console.log('true');
}





//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let variable1 = 1;
let variable2 = 2;
if(variable2 = 2){
    variable1= variable1 + 1;
}
console.log("variable1: "+ variable1);




//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
let year = '1999';
year = Number(year);

console.log ('year: '+ year);




//Task d: Write a function to multiply a*b
function multiply(a, b){
    return a * b;
}
console.log('multiplying 1 and 2:' + multiply(1, 2));





/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years

function dogYears(age){
    return age * 7;
}
console.log('My age in dog years: '+ dogYears(35));




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
            return weight * .05;
        }
        if(weight > 5 && weight <= 10){
            return weight * .04;
        }
        if(weight > 10 && weight <= 15){
            return weight * .03;
        }
        if (weight > 15){
            return weight * .02;
        }
    }
    if(age > .16 && age < .33){
        return weight * .1;
    }
    if(age >= .33 && age < .58){
        return weight * .05;
    }
    if(age >= .58 && age < 1){
        return weight * .04;
    }
}
console.log(dogFeeder(15, 1));




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number
function rockPaperSissors(choice){
    const computerChoice = Math.floor(Math.random() * Math.floor(3));
    if(computerChoice === 0){
        if (choice = 'paper'){
            return 'you win';
        }
        else {
            return 'you loose'
        }
    }
    if(computerChoice === 1){
        if (choice = 'sissors'){
            return 'you win';
        }
        else {
            return 'you loose'
        }
    }
    if(computerChoice === 2){
        if (choice = 'rock'){
            return 'you win';
        }
        else {
            return 'you loose'
        }
    }
}

console.log("RPS: " + rockPaperSissors('rock'));


/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function KMToMiles(kilometers){
    return kilometers * 0.621371;
}
console.log('1 kilometer: '+KMToMiles(1));



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

function feetToCM(feet){
    return feet * 30.48;
}
console.log('1 foot: ' + feetToCM(1));





/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(startingNumber){
for (var i = 0; startingNumber > 0; startingNumber--){
 console.log(startingNumber);
 console.log(' bottles of soda on the wall');
 console.log(startingNumber);
 console.log(' bottles of soda. Take one down pass it around')
 console.log(startingNumber -1);
 console.log(' bottles of soda on the wall.');
 console.log('***************************************')
}
}
const num = 99;
annoyingSong(num);

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F

function gradeCalculation(mark){
    if(mark >= 90){
        return 'A';
    }
    if(mark >= 80 && mark < 90){
        return 'B';
    }
    if(mark >= 70 && mark < 80){
        return 'C';
    }
    if(mark >= 60 && mark < 80){
        return 'D';
    }
    if(mark < 60){
        return 'F';
    }
}
console.log('myGrade: '+ gradeCalculation(100));




/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method




/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
