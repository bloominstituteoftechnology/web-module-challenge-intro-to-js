// //Dog feeder 
// //takes weight in pounds and age in years 
// //(note if the dog is a puppy the age will be a decimal) 
// //and returns the number of pounds of raw food to feed in a day.

// //feeding requirements
// // adult dogs at least 1 year 
// // up to 5 lbs - 5% of their body weight
// // 6 - 10 lbs - 4% of their body weight 
// // 11 - 15 lbs - 3% of their body weight 
// // > 15lbs - 2% of their body weight 

// // Puppies less than 1 year
// // 2 - 4 months 10% of their body weight
// // 4 - 7 months 5% of their body weight 
// // 7 - 12 months 4% of their body weight

// // when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  

// weight in pounds  and age in years 
// 2-4   10%
// 4-7   5%
// 7-12  4%



// if (choice1 === "paper") {
//     if (choice2 === "rock") {
//         return "paper wins";
//     } else {
//         if (choice2 === "scissors") {
//             return "scissors wins";
//         }
//     }
//     if (choice1 === "scissors") {
//         if (choice2 === "rock") {
//             return "rock wins";
//         } else {
//             if (choice2 === "paper") {
//                 return "scissors wins";
//             }
//         }
//     }
// }

// //Metric Converter
// //a. KM to Miles - should take the number of kilometers 
// //and convert it to the equal number of miles
// 1 mile = 1.6 km
// const 
// var kilometers = parseInt(prompt("Please enter kilometers:"));
// var miles = kilometers / 1.6;
// console.log(miles + " Miles");
// // 99 bottles of soda on the wall
// // create a function called annoyingSong
// //the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles 
// //(number) bottles of soda,  
// //take one down pass it around (number left over) bottles of soda on the wall`
 
// function annoyingSong
// starts at 99 - (number ) 
// console.log (take one down pass it around )
// //console.log(parseFloat(n1.replace(regp, '')) -         parseFloat(n2.replace(regp, '')));
// simple for loop
// function annoyingSong() {  
//     var bottles; //create 2 vars for bottels 
//     var bottlesLeft; //and bottels left
//     for (i = 99; i >= 1; i--) { //use for loop to set i to 99 (starting point)
//       if (i == 1) { //stopping condition is1 
//         bottles = "bottle";
//         bottlesLeft = "No bottles of beer on the wall!";
//       } else {
//         bottles = "bottles";
//         bottlesLeft = i - 1 + " bottles of beer on the wall!";
//       } console.log(i+ " " + bottles + " of beer on the wall,");
//       console.log(i+ " " + bottles + " of beer,");
//       console.log("Take one down, pass it around,");
//       console.log(bottlesLeft);
//       } 
      
//   }
//   console.log(annoyingSong());


// /************************************************************** Stretch **************************************************************/
// //Create a function that counts the number of vowels within a string. 
// //It should handle both capitalized and uncapitalized vowels.
// // Hint - you may need to study tomorrow's traning kit on arrays 
// // try looking up the .includes() method
// //The indexOf()

//   function vowel_count(str1)
// {
//   var vowel_list = 'aeiouAEIOU';
//   var vcount = 0;
  
//   for(var x = 0; x < str1.length ; x++)
//   {
//     if (vowel_list.indexOf(str1[x]) !== -1)
//     {
//       vcount += 1;
//     }
  
//   }
//   return vcount;
// }
// console.log(vowel_count("The quick brown fox"));

// Explanation:
// The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
// Syntax -> str.indexOf(searchValue[, fromIndex])
// Parameters :
// searchValue : A string representing the value to search for.
// fromIndex(Optional)-> The index at which to start the searching forwards in the string. It can be any integer.

// The character(s) of the string will be counted as vowel if the condition (vowel_list.indexOf(str1[x]) !== -1) matched.



