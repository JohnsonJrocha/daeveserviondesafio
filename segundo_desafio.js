// Faça um programa para calcular o valor de uma viagem.

// Você terá 5 variável. Sendo elas:
// 1) Preço do Etanol; 2) Preço da Gasolina;3) O tipo de combustível que está no seu carro; 4) Gasto médio por KM; 5) Distância em KM percorrida.

const precoEtanol = 3.39;
const precoGasolina = 4.75;
const tipoCombustivel = "gasolina";
const gastoMedio = 10.1;
const distanciaEmKm = 100;

const litrosConsumosido = distanciaEmKm / gastoMedio;

if(tipoCombustivel === "gasolina") {
    const valorGasto = litrosConsumosido * precoGasolina;
        console.log(valorGasto);
} else { 
    const valorGasto = litrosConsumosido * precoEtanol;
    console.log(valorGasto);
}
	

    

