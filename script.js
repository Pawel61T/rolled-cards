
const firstCard = document.getElementById("first-card")
const secondCard = document.getElementById("second-card")
const thirdCard = document.getElementById("third-card")

var cards = [firstCard, secondCard, thirdCard]
firstCard.addEventListener("click", () => {cardClicked(firstCard)})
secondCard.addEventListener("click", () => {cardClicked(secondCard)})
thirdCard.addEventListener("click", () => {cardClicked(thirdCard)})

var lastSelected = firstCard

function cardClicked(cardElement) {
    cardElement.style.width = "80%";
    console.log(`clicked ${cardElement.id}`)
}