/*
SNACK 3:  
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/

var nomi = ["Pippo", "Pluto", "Luca", "Paolo", "Silvano", "Roberto", "Chiara", "Giovanni", "Andrea"];
var minimo = parseInt(prompt("Inserisci un numero compreso tra 1 e 8"));
var massimo = parseInt(prompt("Inserisci un numero compreso tra 1 e 8"));

var intervallo = filterArray(nomi, minimo, massimo);

function filterArray(myArray, min, max) {
    return myArray.filter((element, index) => (min <= index && max >= index));
}

console.log(nomi);
console.log(intervallo);