let cards = []
let cardMessage = ""
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){
    clearGame()
    let firstCard = generateRandomNumber()
    let secondCard = generateRandomNumber()
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
    if (isAlive == false || hasBlackJack == true)
    {
        cardsEl.textContent = "Cards: " 
        sumEl.textContent = "Total: " 
        clearGame()
    }else{
        
        let newCards = generateRandomNumber()
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

function generateRandomNumber(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber > 10){
        return 10
    }else if(randomNumber === 1){
        return 11
    }

    return randomNumber
}
