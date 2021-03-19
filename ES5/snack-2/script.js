/*
SNACK 2:
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

// FUNZIONI 
function randomNumber(min , max) {
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}

// 1 - Creare array di squadre: nome, punti fatti, falli subiti
var squadre = [
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
for ( i = 0; i < squadre.length; i++) {
    squadre[i].punti = randomNumber(0, 50);
    squadre[i].falliSubiti = randomNumber(0, 12);

}
console.log(squadre);

// 3 - Creare nuovo array solo con nomi e falli subiti
var contrasti = [];
var oggetto;

for ( i = 0; i < squadre.length; i++ ) {
    oggetto = {
        nome: squadre[i].nome,
        falliSubiti: squadre[i].falliSubiti,
    };
    contrasti.push(oggetto);     
}

console.log(contrasti);



