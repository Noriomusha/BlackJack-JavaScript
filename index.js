let cards = []
let cardMessage = ""
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "",
    chips: 100
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips 

function startGame(){
    clearGame()
    let name = prompt("What is your name?")
    player.name = name
    let bet = prompt("How much do you want to bet?")
    player.chips -= bet
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
        message = "Wohoo! You've got Blackjack! You won " +  bet*2.2 + " chips!"
        hasBlackJack = true
        player.chips += bet * 2.2
        playerEl.textContent = player.name + ": $" + player.chips 
        
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
