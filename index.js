/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

var votingAge=17; 
console.log(votingAge >18);


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let  var1=5;
let  var2=10;
if (var1<var2){
    var1=var2;

}

console.log("The new value is: ", var1);




//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
var a= parseInt("1999");
console.log("I am an integer now: ", a);





//Task d: Write a function to multiply a*b 
//function MultiplyNumbers(){
    
//}

function MultiplyNumbers(a,b){
    return a*b;
}

console.log("The result is = " , MultiplyNumbers(5,10));






/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
function dogYears(x){
    return (console.log("dog years: ",(x*7)));
}

console.log(dogYears(50));



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.
function dogFeeder (weight,age) {
    if (age >= 1) {
        if (weight <= 5) {
            return weight * 0.05;
        } else if (weight >= 6 && weight <=10) {
            return weight * 0.04;
        } else if (weight >= 11 && weight <= 15) {
            return weight * 0.03;
        } else if (weight > 15) {
            return weight * 0.02;
    }
    
    else{
      if(age<.5){
        return(weight*.1)
      }
      else if(age<.8){
        return(weight*.05)
      }
      else{
        return(weight*.04)
      }

      }
    }
}
console.log("Dog feeder: ", dogFeeder(7, 10));


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
  




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 



function myGame(x){
    function aleatorio(minimo, maximo)
    {
      var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
      return numero;
    }
  
    var rock = 0;
    var paper = 1;
    var scissors = 2;
  
    var options = ["rock", "paper", "scissors"];
  
    var userOption=x;
    var pcOption = aleatorio(0,2); 
  
    console.log("The computer chose :" + options[pcOption]);
  
  
    if(x == rock)
    {
      console.log("You chose rock!");
      if(pcOption == rock)
      {
        console.log("Tie!");
      }
      
      else if(pcOption == paper)
      {
        console.log("You lose!");
      }
      
      else if(pcOption == scissors)
      {
        console.log("You won!");
      }
  
    }
      
      
    else if(pcOption == paper)
    {
      console.log("You chose paper!");
      if(pcOption == rock)
      {
        console.log("You won!");
      }
      
      else if(pcOption == paper)
      {
        console.log("Tie!");
      }
      
      else if(pcOption == rock) 
      {
        console.log("You lose!");
      }
      
    }
  
  
  
    else if(pcOption == scissors)
    {
      console.log("You chose scissors!");
      if(pcOption == rock)
        {
          console.log("You lose!");
        }
        
        
        else if(pcOption == paper)
        {
          console.log("You won!");	
        }
  
        else if(pcOption == scissors)
        { 
          console.log("Tie!");
        }
  
    }
  
    else
  
    {
      console.log("Keep trying, see you soon!");
    }
  
  
  }
  console.log(myGame(1));
      

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function KilometersToMiles(x){
    return (console.log(" Kilometers into miles :",(x*0.6213)));
}

console.log(KilometersToMiles(30));



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
function feetToCentimeters(feet){
    return(console.log("The number of feet you entered, equals to: " + (feet*30.48) + " centimeters."));
}
  
console.log(feetToCentimeters(50));







/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
function annoyingSong(x){
    for(let i=x; i>0 ; i--) {
       console.log(i," bottles of soda on the wall");
    }

}
console.log(annoyingSong(50));





/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

function score(points){
    
    
    if(points>=90){
        console.log(" Your grade is A");
    }else if (points >=80 && points <= 89){
        console.log("Your grade is B");
    } else if (points>=70 && points <=79){
        console.log("Your grade is C");
    } else if( points>=60 && points <=69){
        console.log("Your grade is D");
    } else if(points<=59){
        console.log("Your grade is F, you need to study more");
    }

}


console.log(score(70));



  

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method
function contadorDeVocales(string){ 
    contador=0;
    for(var i = 0; i < string.length; i++){ 
    if(string[i].toLowerCase() == 'a' || string[i].toLowerCase() == 'i' || string[i].toLowerCase() == 'o' ||string[i].toLowerCase() == 'e' ||string[i].toLowerCase() == 'u'){ 
    
     contador+=1; 
    } 
    } 
return contador; 
} 
console.log (" The number of vowels in the string is: ", contadorDeVocales('house'));






/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
/*function myGame(x){
    function aleatorio(minimo, maximo)
    {
      var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
      return numero;
    }
  
    var rock = 0;
    var paper = 1;
    var scissors = 2;
  
    var options = ["rock", "paper", "scissors"];
  
    var userOption=x;
    var pcOption = aleatorio(0,2); 
  
    //userOption = prompt("¿What do you choose?:\n rock: 0\npaperl: 1\nscissors: 2",0 );
  
    alert("The computer chose :" + options[pcOption]);
  
  
    if(x == rock)
    {
      alert("You chose rock!");
      if(pcOption == rock)
      {
        alert("Tie!");
      }
      
      else if(pcOption == paper)
      {
        alert("You lose!");
      }
      
      else if(pcOption == scissors)
      {
        alert("You won!");
      }
  
    }
      
      
    else if(pcOption == paper)
    {
      alert("Elegiste Papel!");
      if(pcOption == rock)
      {
        alert("You won!");
      }
      
      else if(pcOption == paper)
      {
        alert("Tie!");
      }
      
      else if(pcOption == rock) 
      {
        alert("You lose!");
      }
      
    }
  
  
  
    else if(pcOption == scissors)
    {
      alert("You chose scissors!");
      if(pcOption == rock)
        {
          alert("You lose!");
        }
        
        
        else if(pcOption == paper)
        {
          alert("You won!");	
        }
  
        else if(pcOption == scissors)
        { 
          alert("Tie!");
        }
  
    }
  
    else
  
    {
      alert("Keep trying, see you soon!");
    }
  
  
  }
  console.log(myGame(0));
  */




