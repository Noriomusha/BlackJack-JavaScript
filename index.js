// 1. Create two variables, firstCard and secondCard. 
let firstCard = Math.floor(Math.random() * 10) + 2
let secondCard = Math.floor(Math.random() * 10) + 2
let hasBlackJack = false
let isAlive = true
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
console.log(firstCard, secondCard)
let sum = firstCard + secondCard;
console.log(sum);

if(sum <21){
    console.log("Do you want to draw a new card?  YES/NO")
}else if  (sum === 21){
    console.log("Wohoo! You've got Blackjack!")
    hasBlackJack = true
}else{
    console.log("You're out of the game!")
    isAlive = false
}

// 3. Create a variable, hasBlackJack, and set it to false

// cash out
console.log(hasBlackJack);
console.log(isAlive);

