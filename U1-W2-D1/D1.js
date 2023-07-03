/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output collega questo file al tuo HTML e apri la console del browser. 
- Dovrai creare una direttiva di output per testare le variabili od i risultati delle espressioni che crei
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 1) Stringa: JS identifica con Stringa tutto ciò che è inserito tra le virgolette ""; Ad esempio "nomeUtente", "23.5", "True", ...
   2) Booleano: JS ammette solo due valori per questo datatype, True e False. Questi valori sono per esempio l'output del verificarsi o meno di una condizione.  
   3) Numero: JS identifica con Numero una qualsiasi numero (intero o decimale, espresso tramite il punto) senza l'uso delle virgolette; Ad esempio 26, 33.58, ...
   4) Oggetti: Sono una categoria che racchiude diversi tipi di dati. Lo sono per esempio il valore null applicato ad una variabile, oppure una variabile contenente un insieme di variabili, ... */

/* ESERCIZIO 2 
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Umberto";
console.log(name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let numero1 = 12;
let numero2 = 20;
let somma = numero1 + numero2;
console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
comsole.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

name = "Zappulla";
console.log(name);

/*Se avessi scritto:

    const name = "Umberto"; 
    name = 'Zappulla'; 
    console.log(name);

Avrei ottenuto un'errore alla riga 53 */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = 4 - x;
console.log(sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
let verifica = name1 === name2;
console.log(verifica);
let extra = name1.toLowerCase === name2.toLowerCase;
console.log(extra);
