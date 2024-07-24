
const firstCard = document.getElementById("first-card")
const secondCard = document.getElementById("second-card")
const thirdCard = document.getElementById("third-card")

var cards = [firstCard, secondCard, thirdCard]
firstCard.addEventListener("click", () => {cardClicked(firstCard)})
secondCard.addEventListener("click", () => {cardClicked(secondCard)})
thirdCard.addEventListener("click", () => {cardClicked(thirdCard)})

var lastSelected = firstCard

function cardClicked(cardElement) {
    if (lastSelected != cardElement) {
        cardElement.style.animationName = "width10to80"
        cardElement.style.width = "80vw";
        lastSelected.style.animationName = "width80to10"
        lastSelected.style.width = "10vw"
    }
    lastSelected = cardElement
    console.log(`clicked ${cardElement.id}`)
}