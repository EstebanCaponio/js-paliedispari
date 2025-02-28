//funzione numero random per il computer
function computerNumber(max) {
    let generated = Math.floor(Math.random() * max + 1);
    return generated
}

//funzione per nummero pari o dispari
function isEvenOrOdd(num1) {
    if (num1 % 2 === 0) {
        return console.log(`Il numero è pari`);
    } else {
        return console.log(`Il numero è dispari`);
    }
}
//FINE FUNZIONI

// INIZIO PROGRAMMA

//inserisce pari/dispari e un numero da 1 a 5 + stampali
let evenOdd = prompt('Vuoi inserire un numero PARI o DISPARI?');
console.log(`Hai scommesso su una somma: ${evenOdd}`);

let userNumber = parseFloat(prompt('Inserisci un numero intero da 1 a 5'));
console.log(`Hai inserito il numero: ${userNumber}`);

//condizioni di validità numero
let numberNotValid = ((isNaN(userNumber) === true) || (userNumber < 1 || userNumber > 5)) || (Number.isInteger(userNumber) === false);

//condizioni di validità evenOrOdd
let evenOddNotValid = (((evenOdd !== 'dispari' && evenOdd !== 'Dispari') && evenOdd !== 'pari') && evenOdd !== 'Pari');

//se i dati inseriti non sono validi manda alert
if (numberNotValid) {

    alert('Il valore inserito non è corretto, partita annullata.');

} else if (evenOddNotValid) {

    alert('Il valore inserito non è "pari o dispari", partita annullata.');

}
//ALTRIMENTI continua il ciclo
else {
    //creo una variabile per usare la funzione
    let computerRandom = computerNumber(5)
    //stampo il numero random del computer
    console.log(`Il computer ha inserito il numero: ${computerRandom}`);

    //somma dei due numeri
    let sum = userNumber + computerRandom;
    console.log(`La somma dei due numeri è ${sum}`);

    //evoco la variabile per visualizzare il messaggio in console
    isEvenOrOdd(sum);

    //se la somma è pari e l'utente ha inserito pari allora ha vinto ALTRIMENTI ha perso
    if (sum % 2 === 0 && (evenOdd === 'pari' || evenOdd === 'Pari')) {
        console.log('Hai vinto!');
    } else {
        console.log('Mi spaice, hai perso.');
    }
}