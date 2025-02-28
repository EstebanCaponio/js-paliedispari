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

