// Chiedere all’utente di inserire una parola;
let word = prompt('Inserisci una parola per verificare che sia Palindroma');

// creo funzione palindroma
function palindroma(word) {

    // soluzione facile
    // formattazione parola/frase + creo array, lo inverto e lo riconverto a stringa
    // word = word.replace(/\s+/g, '').toLowerCase();
    // let reverseWord = word.split("").reverse().join("");

    // soluzione con ciclo
    let reverseWord = '';
    for (i = (word.length - 1); i >= 0; i--) {
        reverseWord += word[i];
    }

    if (word === reverseWord) {
        return true;
    } return false;
}

// se è palindroma stampa risposta positiva
// altrimenti negativa
if (palindroma(word) === true) {
console.log(`La parola "${word}" è palindroma.`);
} else console.log(`La parola "${word}" non è palindroma.`);