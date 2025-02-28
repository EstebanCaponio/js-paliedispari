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
