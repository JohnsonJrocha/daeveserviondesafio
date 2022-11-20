const precoCombustivel = 4.75;
const gastoMedioCarro = 9.4;
const distanciaEmKm = 150;

const litrosConsumidor = distanciaEmKm / gastoMedioCarro;
const combustivelGasto = litrosConsumidor * precoCombustivel;

console.log(combustivelGasto.toFixed(2));
