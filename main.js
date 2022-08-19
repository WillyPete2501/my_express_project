// play();

// function play(){
//     let userName = prompt('Please enter your name') //datatype of name is string, the value is the name itself
//     let countTries = [] // how many times a player has guessed the number with .length and display what numbers were guessed
//     let secretNumber = 5
//     let guess = prompt('Guess a number between 0-10') //the value is the players input data (string datatype)
//     countTries.push(guess)
//     while (guess != secretNumber) {
//         if (guess > secretNumber) {
//             guess = prompt(`You are too high ${userName}`)  
//         }
//         else if (guess < secretNumber) {
//             guess = prompt(`You are too low ${userName}`)  
//         }
//         countTries.push(guess)
//     }
// guess = alert(`You got it ${userName}! You got it in, ` + (countTries.length) + ' guess(es).' + ' The numbers you guessed were: ' + countTries + '.')
// return [userName, countTries]
// }
// const userData = play();
// console.log(userData)
// //playAgain(userData)
// function playAgain(userData){
//     let triggerPlay = prompt(`Would you like to play again ${userData[0]}? Please type "Yes or Y" or "No or N", (not case-sensitive).`)
//     if (triggerPlay.toLowerCase() === "no" || triggerPlay.toLowerCase() === "n") {
//         alert(`Thanks for playing ${userData[0]}!`)
//     }
//     else if (triggerPlay.toLowerCase() === 'yes' || triggerPlay.toLowerCase() === 'y' ) {
//         play()
//     }
//     else {
//         alert(`Invalid input ${userData[0]}, thanks for playing.`)
//     }
// // }

// let heading = document.getElementById('heading');
// document.getElementById('heading').innerHTML = 'New Text';

// let newImg = document.createElement('img')
// newImg.src = "C:\\Users\\krono\\Pictures\\bestNinja.gif"
// var body = document.getElementsByTagName('body')[0]
// body.appendChild(newImg)