// 1. Create two variables, firstCard and secondCard. 
let firstCard = Math.floor(Math.random() * 10) + 2
let secondCard = Math.floor(Math.random() * 10) + 2
let hasBlackJack = false
let isAlive = true
let message = ""
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
console.log(firstCard, secondCard)
let sum = firstCard + secondCard;
console.log(sum);

if(sum <21){
    message = "Do you want to draw a new card?  YES/NO"
}else if  (sum === 21){
    message = "Wohoo! You've got Blackjack!"
    hasBlackJack = true
}else{
    message = "You're out of the game!"
    isAlive = false
}

// 3. Create a variable, hasBlackJack, and set it to false

// cash out
console.log(hasBlackJack);
console.log(isAlive);
console.log(message);

