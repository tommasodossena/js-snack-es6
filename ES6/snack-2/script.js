/*
SNACK 2: Creare un array di oggetti di squadre di calcio. 
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

// FUNZIONI 
function randomNumber(min , max) {
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}

// 1 - Creare array di squadre: nome, punti fatti, falli subiti
const squadre = [
    {
        nome: "Empoli",
        punti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Venezia",
        punti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Cremonese",
        punti: 0,
        falliSubiti: 0,
    },
];

// 2 - Generare numeri random al posto degli 0 nelle proprietà:
for ( let i = 0; i < squadre.length; i++) {
    squadre[i].punti = randomNumber(0, 50);
    squadre[i].falliSubiti = randomNumber(0, 12);

}
console.log(squadre);

// METODO 1: CICLO FOR
// 3A - Creare nuovo array solo con nomi e falli subiti
// var contrasti = [];

// 4A - Ciclo per inserire nel nuovo array proprietà nome e falliSubiti degli oggetti del vecchio array
// for ( let i = 0; i < squadre.length; i++ ) {
//     const { nome, falliSubiti } = squadre[i];
//     contrasti.push({
//         nome: nome,
//         falliSubiti: falliSubiti,
//     });     
// }

// METODO 2: UTILIZZO METODO MAP
const contrasti = squadre.map((element) => {
    let { nome, falliSubiti: falli } = element;
    return {nome, falli};
});

// 5 - Stampare nuovo array 
console.log(contrasti);