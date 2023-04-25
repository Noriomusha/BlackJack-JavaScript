let cards = []
let sum = 0
let cardCount = 1
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){
    let firstCard = Math.floor(Math.random() * 10) + 2
    let secondCard = Math.floor(Math.random() * 10) + 2
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    hasBlackJack = false
    isAlive = true
    renderGame()
}

function renderGame(){
     
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
    cardsEl.textContent = "Cards: " + cards[0] + " | " + cards[1] 
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
        cardCount += 1
        renderGame()
        sumEl.textContent = "Total: " + sum
        cardsEl.textContent +=  " | " + cards[cardCount] + " | "
        messageEl.textContent = message

    }  
}

function clearGame(){
    cards = []
    sum = 0
    cardCount = 1
}
