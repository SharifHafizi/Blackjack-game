let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.querySelector("#card-el");
let playerEl = document.getElementById("player-el");
playerEl.textContent = "Per: $ 145";

function startNewGame() {
  cardEl.textContent = "Cards:" + 0;
  sumEl.textContent = "Sum:" + 0;
}

//if we want to add conditional randomNumber so we can use this method;
// function getRandomCard() {
//   // if 1     -> return 11
//   // if 11-13 -> return 10
//   let randomNumer = Math.floor( Math.random()*13 ) + 1
//   if (randomNumer > 10) {
//       return 10
//   } else if (randomNumer === 1) {
//       return 11
//   } else {
//       return randomNumer
//   }
// }

function getRandomCard() {
  return Math.floor(Math.random() * 14); // inserting random number to game.
}
function startGame() {
  cardEl.textContent = "Cards:"; //+ cards[0] + ", " + cards[1]; instead of these we can use for loop
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }
  messageEl.textContent = message;
  console.log(message);
}
let drawCrad = "";
let drawCard = document.getElementById("message-el");
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    cards.push(card); //push card to array.
    sum += card;
  }
  drawCard.textContent = "Drawing a new card from deck!";

  startGame();
}
