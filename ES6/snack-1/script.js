/*
SNACK 1:
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

// 1 - Inizializzo array biciclette
const biciclette = [
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
let leggera = null;

// 3 - Ciclo per confrontare proprietà peso degli oggetti dell'array
for (let i = 0; i < biciclette.length; i++) {
    if ( leggera == null || biciclette[i].peso < leggera.peso ) {
        leggera = biciclette[i];
    }
}

// 4 - Stampare il risultato
const { nome, peso } = leggera;
console.log(`La bicicletta più leggera è la ${nome} poichè pesa ${peso} grammi`)
