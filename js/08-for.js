console.clear();
/*
FOR - ciklas ("tevinis")
*/

const users = ['Petras', 'Maryte', 'Jonas', 'Ona'];

let userIndex = 0;

console.log(`Labas rytas, ${users[userIndex]}!`);
userIndex = userIndex + 1;

console.log(`Labas rytas, ${users[userIndex]}!`);
userIndex = userIndex + 1;

console.log(`Labas rytas, ${users[userIndex]}!`);
userIndex = userIndex + 1;

console.log(`Labas rytas, ${users[userIndex]}!`);
userIndex = userIndex + 1;

const money = [10, 50, 20, 13];

let wallet = 0;
let moneyIndex = 0;

wallet = wallet + money[moneyIndex];
moneyIndex = moneyIndex + 1;

wallet = wallet + money[moneyIndex];
moneyIndex = moneyIndex + 1;

wallet = wallet + money[moneyIndex];
moneyIndex = moneyIndex + 1;

wallet = wallet + money[moneyIndex];
moneyIndex = moneyIndex + 1;

console.log('Wallet:', wallet);

const marks = [10, 2, 8, 4];
let total = 0;

for (let i = 0; i < marks.length; i = i + 1) {
    console.log(i, '->', marks[i]);
    total = total + marks[i];
}

const count = marks.length;
const average = total / count;

console.log('Average:', average);

for (let i = marks.length - 1; i >= 0; i = i - 1) {
    console.log(i, '->', marks[i]);
}


const a = -12;
const b = 3;

for (let i = a; i <= b; i = i + 1) {
    console.log(i);
}

console.log('### Skaiciu suma intervale');



function sumaIntervale(start, end) {
    let suma = 0;

    for (let i = start; i <= end; i = i + 1) {
        suma = suma + i;
    }
    console.log(`${start}..${end} = ${suma}`);

    return suma;
}

sumaIntervale(0, 0);
sumaIntervale(0, 4);
sumaIntervale(0, 100);
sumaIntervale(574, 815);
sumaIntervale(-50, 50);
sumaIntervale(-70, 30);
sumaIntervale(5, 5);
sumaIntervale(-5, -5);