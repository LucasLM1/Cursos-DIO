let notas = [100, 50, 20, 10, 5, 2, 1];
let compNotas = [0, 0, 0, 0, 0, 0, 0];
let qtd = parseInt(gets());
let resto = qtd;

while (resto >= 1) {
    nota = notas.findIndex(value => value <= resto);
    compNotas[nota] = Math.trunc(resto / notas[nota]);
    resto = resto % notas[nota];
}

console.log(qtd);
console.log(compNotas[0] + " nota(s) de R$ 100,00");
console.log(compNotas[1] + " nota(s) de R$ 50,00");
console.log(compNotas[2] + " nota(s) de R$ 20,00");
console.log(compNotas[3] + " nota(s) de R$ 10,00");
console.log(compNotas[4] + " nota(s) de R$ 5,00");
console.log(compNotas[5] + " nota(s) de R$ 2,00");
console.log(compNotas[6] + " nota(s) de R$ 1,00"); let notas = [100, 50, 20, 10, 5, 2, 1];
let compNotas = [0, 0, 0, 0, 0, 0, 0];
let qtd = parseInt(gets());
let resto = qtd;

while (resto >= 1) {
    nota = notas.findIndex(value => value <= resto);
    compNotas[nota] = Math.trunc(resto / notas[nota]);
    resto = resto % notas[nota];
}

console.log(qtd);
console.log(compNotas[0] + " nota(s) de R$ 100,00");
console.log(compNotas[1] + " nota(s) de R$ 50,00");
console.log(compNotas[2] + " nota(s) de R$ 20,00");
console.log(compNotas[3] + " nota(s) de R$ 10,00");
console.log(compNotas[4] + " nota(s) de R$ 5,00");
console.log(compNotas[5] + " nota(s) de R$ 2,00");
console.log(compNotas[6] + " nota(s) de R$ 1,00");