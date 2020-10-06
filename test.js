
//     const randomNumber = Math.floor(Math.random() * 3) + 1 ;
//     console.log(randomNumber)

// const multiply = (a,b) =>  a * b

// console.log(multiply(2,2))


// function hungryDog(weight_in_pounds, dog_years){
    
//     if(dog_years >= 1){
//         console.log('This is adult')

//         if(weight_in_pounds <= 5){
//             console.log(`Feed it ${weight_in_pounds * .05}`)
//         }else if(weight_in_pounds <= 10) {
//             console.log(`Feed it ${weight_in_pounds * .04}`)
//         }else if(weight_in_pounds <= 15) {
//             console.log(`Feed it ${weight_in_pounds * .03}`)
//         }else {
//             console.log(`Feed it ${weight_in_pounds * .02}`)
//         }
        
//     }else if (dog_years < 1){
//         console.log('This is baby')

//         if(dog_years <= 0.33){
//             return weight_in_pounds * 0.10;
//         }else if(dog_years <= 0.583){
//             return weight_in_pounds * 0.05;
//         }else{
//             return weight_in_pounds * .04;
//         }

//     }else{
//         console.log('Give me something')
//     }

//     console.log(weight_in_pounds)
//     console.log(dog_years)
    
// }

// console.log(hungryDog(15,1))

// function annoyingSong(startingNumber){
//     for (let i = startingNumber; i > 0;i--){
//       console.log(`${i} bottles of soda on the wall, ${i} bottles of soda, take one down pass it around ${i - 1} bottle of soda on the wall `);
//     }
// }

// console.log(annoyingSong(99))

// function grade(score){
//     let letterGrade = ''
//     if(score >= 90){
//       letterGrade = 'A'
//     }else if(score >= 80 && score <= 89){
//       letterGrade = 'B'
//     }else if (score >= 70 && score <= 79){
//       letterGrade = 'C'
//     }else if (score >= 60 && score <= 69){
//       letterGrade = 'D'
//     }else{
//       letterGrade = 'F'
//     }
//     return letterGrade;
//   }

//   console.log(grade(90))

function game(userChoice){
    let computerChioce = '';
    userChoice = userChoice.toLowerCase()
    const randomNumber = Math.floor(Math.random() * 3) + 1 ;
  
    if (randomNumber === 1){
      computerChioce = 'rock';
    }else if (randomNumber === 2){
      computerChioce = 'paper';
    }else if (randomNumber === 3){
      computerChioce = 'scissors'
    }
  
    if(userChoice === 'scissors' && computerChioce === 'paper' || userChoice === 'paper'  && computerChioce === 'scissors'  ){
      return 'Scissors beats Paper'
    }else if (userChoice === 'paper' && computerChioce === 'rock' || userChoice === 'rock'  && computerChioce === 'paper'){
      return 'Paper beats Rock';
    }else if (userChoice === 'rock' && computerChioce === 'scissors' || userChoice === 'scissors' && computerChioce === 'rock' ){
      return 'Rock beats Scissors'
    }else{
      return 'there\'s a tie'
    }
      
}
console.log(game('rock'))