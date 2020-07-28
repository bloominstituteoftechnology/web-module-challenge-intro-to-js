/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

var votingAge = 21;

if (votingAge > 18) {
    console.log(true)
}


     


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)


var age = 15
{
    if (age =15)
    {
        age = age +1;
    }
}
 console.log(age)

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method



console.log(Number("1999"))


//Task d: Write a function to multiply a*b 

var a = 5;

var b = 4;

c = a*b;

console.log(c)




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

var age = 22;
var dogAge;

dogAge = age*7;

console.log(dogAge)

/* explore how to do an arrow function*/


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.



//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 
var weight = 15;
var age =1;
var food;


if (weight <= 5 && age>=1) 
{
    food = weight*0.05;
}else
    {
        if (weight <=10 && weight>= 6 && age>=1) 
        {
          food = weight*0.04;   
        }else
        {
            if (weight <=15 && weight>= 11 && age>=1) 
            
            {
              food = weight*0.03;  
            }else
            {
                if (15 < weight && age>=1) 
                
                {
                  food = weight*0.02;  
                }
            }
        }
    }


console.log(food)




// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

var puppyWeight = 12;
var puppyAge =5;
var puppyFood;

if (puppyAge >= 2 && puppyAge <=4) 
{
    puppyFood = puppyWeight*0.1;
}else
    {
        if (puppyAge >=5 && puppyAge<= 7) 
        {
          puppyFood = puppyWeight*0.05;   
        }else
        {
            if (puppyAge >=8 && puppyAge <= 12) 
            
            {
              puppyFood = puppyWeight*0.04;  
            }
        }
    }

console.log(puppyFood)

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  




/************************************************************** Task 4 **************************************************************/

function game (rock,paper,sissors)
{
    var person = prompt("choose rock, paper, or sissors")

    
   var computer = math.random ()

    if (computer > 0.33)
    {
        computer = rock;
        console.log("The computer chose rock!")
    } else
    if (0.33 <= computer <= 0.66) 
    {    
        computer = paper;
        console.log("The computer chose paper!")
    }else
    if (computer > 0.66) 
    {
        computer = sissors;
        console.log("The computer chose sissors!")    
    }

    var compare = function (option1, option2)
    {

    
    if (option1 === option2)
    {
    
        {
            return "It's a tie!"
        }
    }

    if (option1 === "rock")
    {
        if (option2 === "scissors") {
            return "rock wins";
            
        }else{
            return "paper wins";
        }
    }
    if (option1 === "sissors") {
        if (option2 === "rock") {

            return "rock wins!";
            
        }else
        {
            return "sissors wins!";
        }
        
    }

}

}


/*list options*/


// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

//function Converter (number)



function converter (KM,miles)
{
     miles = KM*(0.621);
    return miles;
}
converter(0,2)

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  


function converter (feet,CM)
{
    feet = CM*(30.48);
   return feet;
}

converter(0,2)

/************************************************************** Task 6(UNCOMMENT) **************************************************************/



// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
const annoyingSong = (N) => 
{    
  for (i=N; i>0; i-- )
 {
      console.log(`${i} bottles of soda on the wall, ${i} bottles of soda, Take one down pass it around, ${i-1} bottles of soda on the wall`)
  }
}
annoyingSong(99)




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
 
const calculator = (G) =>
{
    if (G >= 90)
    {
        console.log("your grade is an A");
    }else
    {
        if (90 > G >= 80) 
        {
            console.log("your grade is an B");
        }else
        {
            if (80 > G >= 70) 
            {
                console.log("your grade is an C");
            }else
            {
                if (70 > G >= 60) 
                {
                    console.log("your grade is an D");
                }
            }
        }
    }
  
  
}
calculator(85)

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object



