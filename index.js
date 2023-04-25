let cards = []
let cardMessage = ""
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){
    clearGame()
    let firstCard = Math.floor(Math.random() * 10) + 2
    let secondCard = Math.floor(Math.random() * 10) + 2
    cards.push(firstCard)
    cards.push(secondCard)
    sum = firstCard + secondCard
    hasBlackJack = false
    isAlive = true
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent +=  cards[i] + " | "
    }

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
    messageEl.textContent = message
}

function newCard()
{
    if (isAlive == false){
        cardsEl.textContent = "Cards: " 
        sumEl.textContent = "Total: " 
        clearGame()
    }else{
        
        let newCards = Math.floor(Math.random() * 10) + 2
        cards.push(newCards)
        sum += newCards
        renderGame()
    }  
}

function clearGame(){
    cards = []
    sum = 0
    cardsEl.textContent = "Cards: " 
    sumEl.textContent = "Total: " 
}
