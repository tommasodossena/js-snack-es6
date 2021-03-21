/*
SNACK 1:
Creare un array di oggetti
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
Stampare a schermo la bici con peso minore
*/

// 1 - Creare un array di oggetti
var biciclette = [
    {
        nome: "Bianchi",
        peso: 7000,
    },
    {
        nome: "Bottecchia",
        peso: 9500,
    },
    {
        nome: "Legnano",
        peso: 5000,
    },
];
console.log(biciclette);

// 2 - Inizializzare variabile per confrontare proprietà peso degli oggetti dell'array
var leggera = biciclette[0];

// 3 - Ciclo per confrontare proprietà peso degli oggetti dell'array
for ( let i = 0; i < biciclette.length; i++) {
    if ( biciclette[i].peso < leggera.peso ) {
        leggera = biciclette[i];
    }
}

// 4 - Stampare il risultato
console.log("La bibicletta più leggera è " + leggera.nome);

