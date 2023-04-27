let cards = []
let cardMessage = ""
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let bet = 0


let player = {
    name: "Player",
    chips: 100
}
let dealer = {
    cards: [],
    name: "Dealer's",
    sum: 0
}
let dealerEl = document.getElementById("dealer-el")
dealerEl.textContent = dealer.name 

let name = prompt("What is your name?")
player.name = name

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips 

function startGame(){
    clearGame()

    bet = prompt("How much do you want to bet?")
    if(bet == null){
        bet = 0
        return
    }
    if(isNaN(bet)){
        alert("Please enter a number!")
        bet = 0
        return
    }
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
    dealer.cards.push(generateRandomNumber())
    dealer.cards.push(generateRandomNumber())
    dealer.sum = dealer.cards[0] + dealer.cards[1]
    dealerCard1 = dealer.cards[0]
    dealerCard2 = dealer.cards[1]
    dealerEl.textContent = dealer.name + " Cards: " + dealerCard1 + " | "
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
        isAlive  = false
        
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
    dealerCards = []
    sum = 0
    cardsEl.textContent = "Cards: " 
    sumEl.textContent = "Total: " 
    dealerCardsEl = "Cards: "
    dealerSumEl = "Dealer's Total: "
    dealerSum = 0
    dealerCard1 = 0
    dealerCard2 = 0
    message = "Play A Round?"
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
    if(isAlive == false || hasBlackJack == true){
        messageEl.textContent = "Try Playing A New Round!"
        return
    }
    if(dealer.sum === 21){
        messageEl.textContent = "Dealer Has Blackjack! You Lost " + bet + " chips!"
        playerEl.textContent = player.name + ": $" + player.chips 
        dealerEl.textContent = dealer.name + " Cards: "
        for(let i = 0; i < dealer.cards.length; i++){
            dealerEl.textContent +=  dealer.cards[i] + " | "
        }
        return
    }
    dealerEl.textContent = dealer.name + " Cards: " + dealerCard1 + " | " + dealerCard2
    while(dealer.sum < 17){
        dealer.cards.push(generateRandomNumber())
        dealer.sum += dealer.cards[dealer.cards.length - 1]
    }
    if(dealer.sum > 21){
        messageEl.textContent = "Dealer Busted! You Won " + bet*2 + " chips!"
        player.chips += bet * 2
        playerEl.textContent = player.name + ": $" + player.chips
        dealerEl.textContent = dealer.name + " Cards: "
        for(let i = 0; i < dealer.cards.length; i++){
            dealerEl.textContent +=  dealer.cards[i] + " | "
        } 
        
    }
    else if(dealer.sum > sum && dealer.sum <= 21){
        messageEl.textContent = "You Lost " + bet + " chips!"
        dealerEl.textContent = dealer.name + " Cards: "
        for(let i = 0; i < dealer.cards.length; i++){
            dealerEl.textContent +=  dealer.cards[i] + " | "
        }

    }else if(dealer.sum === sum){
        messageEl.textContent = "It's a Draw!"
        player.chips += bet
        playerEl.textContent = player.name + ": $" + player.chips
        dealerEl.textContent = dealer.name + " Cards: "
        for(let i = 0; i < dealer.cards.length; i++){
            dealerEl.textContent +=  dealer.cards[i] + " | "
        }
    }
    else{
        messageEl.textContent = "You Won " + bet*2 + " chips!"
        player.chips += bet * 2
        playerEl.textContent = player.name + ": $" + player.chips 
        dealerEl.textContent = dealer.name + " Cards: "
        for(let i = 0; i < dealer.cards.length; i++){
            dealerEl.textContent +=  dealer.cards[i] + " | "
        } 
    }
}
    



  


    
