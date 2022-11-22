const peso = 74;
const altura = 1.73;
const imc = (peso / Math.pow(altura,2))
console.log(imc)

if(imc < 18.5) {
    console.log("Adulto abaixo do peso")
} else if(imc >= 18.5 && IMC < 25) {
    console.log("Adulto peso normal")
} else if(imc >= 25 && IMC < 30) {
    console.log("Adulto acima do peso")
} else if (imc >= 30 && IMC < 40) {
    console.log("Adulto obeso")
};

if ((imc > 40)) {
    
    console.log("Adulto com obesidade grave, procurar ajuda com urgência!")
}

 
  
    