function writeCards(namesArray, event) {
  let thankYourCards = []
    for (let i = 0; i < namesArray.length; i++) {
    thankYourCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
  }
 
  return thankYourCards;
}
 
function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
        console.log( startingNumber );
        startingNumber -= 1;
    }
    console.log( startingNumber)
}