// Code your solutions in this file
const thankYous = ["Charlie", "Netherlee", "Theo"];

const copyOfThankYous = [];

function writeCards(cards) {
    for (let i = 0; i < cards.length; i++) {
        copyOfThankYous.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
    }
    return copyOfThankYous
}
function countDown(integer) {
    while (integer >= 0) {
        console.log(integer);
        integer--;
    }
}