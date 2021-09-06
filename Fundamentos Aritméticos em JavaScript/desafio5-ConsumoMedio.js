let X = parseInt(gets());
let Y = parseFloat(gets());
let consumoMedio = parseFloat(X / Y).toFixed(3); //toFixed(3) para parar em 3 casas decimais

console.log(consumoMedio + " km/l");