#  js-paliedispari

## Primo esercizio:

### Consegna

Palindroma:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.


### Procedimento:

 - Chiedere all’utente di inserire una parola;

 - creo funzione palindroma
    - dichiaro la variabile per salvare la parola al contrario vuota
    - creo un ciclo che vada a mettere nella variabile vuota le lettere della parola originale al contrario
    - se la parola originale e quella rovesciata sono identiche allora return vero
    - altrimenti return falso

 - se è palindroma stampa risposta negativa
 
 - altrimenti negativa

 ## Secondo esercizio:


### Consegna

Pari e Dispari:
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

Sommiamo i due numeri

Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

Dichiariamo chi ha vinto.


### Procedimento:

- creo funzione numero random per il computer

- creo funzione per nummero pari o dispari

- chiedi all'utente di inserire pari/dispari e un numero da 1 a 5 + stampali

- scrivo condizioni di validità per il numero e per pari/dispari

- un if: se i dati inseriti non sono validi manda alert
   - ALTRIMENTI continua il ciclo
      - creo una variabile per usare la funzione
      - somma dei due numeri
      - evoco la variabile per visualizzare il messaggio in console
      - se la somma è pari e l'utente ha inserito pari allora ha vinto ALTRIMENTI ha perso