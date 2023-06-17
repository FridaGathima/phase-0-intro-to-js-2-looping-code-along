

const cards = ["Guadalupe", "Ollie", "Aki"]

function writeCards() {
    const copyOfCards = [`Thank you, ${cards}, for the wonderful suprise gift!`]
    for (let i=0; i< cards.length; i++){
    console.log (`Thank you, ${cards[i]}, for the wonderful suprise gift!`)
    debugger;
    }
    return copyOfCards;
} 

writeCards()