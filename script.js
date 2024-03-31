let card1 = roll();
let card2 = roll();
let cardsArr = [card1, card2];
let result = 0;
let output = 0;
let isAlive = true;
let blackjack = false;
let newgame = false
let op = document.getElementById("result");
let cards = document.getElementById("cards");
let sum = document.getElementById("sum");

function roll() {
  return Math.floor(Math.random() * 13) + 1;
}
function startgame() {
  newgame= true
  result = 0;
  cards.textContent = "CARDS ARE : ";
  for (let i = 0; i < cardsArr.length; i++) {
    cards.textContent += cardsArr[i] + " ";
    result += cardsArr[i];
  }
  if (result > 21) {
    output = "YOU LOSE";
    isAlive = false;
    blackjack = false;
  } else if (result <= 21) {
    output = "WANT TO PICK A CARD ?";
    isAlive = true;
    blackjack = false;
  } else {
    output = "YOU WIN BLACK JACK";
    isAlive = true;
    blackjack = true;
  }
  op.textContent = output;
  sum.textContent = "SUM : " + result;
}

function drawcard() {

 if(newgame===true)
 {
  if (isAlive === true && blackjack === false) {
    let newCard = roll();
    cardsArr.push(newCard);
    cards.textContent = "CARDS ARE : ";
    result += newCard;
    sum.textContent = "SUM : " + result;
    startgame()
 }
  }
  else{
     return 0
  }
}

function retry() {
  card1 = roll(); // Update card1 with a new random value
  card2 = roll(); // Update card2 with a new random value
  cardsArr = [card1, card2]; // Update cardsArr with new cards
  result = card1 + card2; // Update result with the sum of new cards
  output = "";
  isAlive = true; // Set to true after retrying
  blackjack = false;
  cards.textContent = "CARDS ARE :";
  output = "WANT TO PICK A CARD ?";
  op.textContent = output;
  result = 0
  sum.textContent = "SUM : " + result;
}
