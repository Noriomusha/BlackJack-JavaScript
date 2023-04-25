let firstCard = 0
let secondCard = 0
let newCards = 0
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")



function startGame(){
    firstCard = Math.floor(Math.random() * 10) + 2
    secondCard = Math.floor(Math.random() * 10) + 2
    sum =  firstCard + secondCard
    if(sum <21){
        message = "Do you want to draw a new card?  YES/NO"
    }else if  (sum === 21){
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    }else{
        message = "You're out of the game!"
        isAlive = false
    }
    sumEl.textContent = "Total: " + sum
    cardsEl.textContent = "Cards: " + firstCard + " | " + secondCard
    messageEl.textContent = message
}

function newCard()
{
    let newCard = Math.floor(Math.random() * 10) + 2
    sum += newCard
    if(sum <21){
        message = "Do you want to draw a new card?  YES/NO"
    }else if  (sum === 21){
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    }else{
        message = "You're out of the game!"
        isAlive = false
    }
    sumEl.textContent = "Total: " + sum
    cardsEl.textContent = "Cards: " + firstCard + " | " + secondCard + " | " + newCard
    messageEl.textContent = message
}
