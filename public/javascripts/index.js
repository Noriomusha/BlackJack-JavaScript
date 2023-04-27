let cards = []
let cardMessage = ""
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let dealerCardsEl = document.getElementById("dealer-cards-el")
let dealerCard1 = 0
let dealerCard2 = 0
let dealerCards = []
let dealerSum = 0
let bet = 0


let player = {
    name: "Player",
    chips: 100
}

let name = prompt("What is your name?")
player.name = name

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips 

function startGame(){
    clearGame()

    bet = prompt("How much do you want to bet?")
    if(player.chips < 0){
        alert("You don't have enough chips!")
        bet = 0
        return
    }
    
    if(player.chips < bet){
        alert("You don't have enough chips!")
        bet = 0
        return
    }
    player.chips -= bet
    playerEl.textContent = player.name + ": $" + player.chips 
    
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
        message = "Wohoo! You've got Blackjack! You won " +  bet*3 + " chips!"
        hasBlackJack = true
        player.chips += bet * 3
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

function stay(){
    if(isAlive == false || hasBlackJack == true)
    {
        cardsEl.textContent = "Cards: " 
        sumEl.textContent = "Total: " 
        clearGame()
    }
     dealerCard1 = generateRandomNumber()
     dealerCard2 = generateRandomNumber()
     dealerCards = [dealerCard1, dealerCard2]
     dealerSum = dealerCard1 + dealerCard2
    while(dealerSum < 17){
        dealerCards.push(generateRandomNumber())
        for(let i = 0; i < dealerCards.length; i++){
            dealerCardsEl.textContent +=  dealerCards[i] + " | "
            dealerSum  += dealerCards[i]
        }
        if(dealerSum > 21){
            message = "You won " + bet + " chips!"
            player.chips += bet*1
            playerEl.textContent = player.name + ": $" + player.chips
            messageEl.textContent = message
        }

    }

    if(sum > dealerSum){
        message = "You won " + bet  + " chips!"
        player.chips += bet*1
        playerEl.textContent = player.name + ": $" + player.chips
        messageEl.textContent = message 
    }
}
    
    
