/*
const precoEtiqueta = 100;
const formaDePagamento = 3;

if(formaDePagamento === 1)
{console.log(precoEtiqueta - (precoEtiqueta*0.1))};

if (formaDePagamento === 2)
{console.log(precoEtiqueta - (precoEtiqueta*0.15))};

if (formaDePagamento === 3)
{console.log( precoEtiqueta)};

if (formaDePagamento === 4)
{console.log(precoEtiqueta + (precoEtiqueta*0.10))
};
*/

function aplicarDesconto (valor, desconto) {
    return (valor - (valor * (desconto / 100)))
};

function aplicarJuros (valor, juros){
    return (valor + (valor * (juros / 100)))
};

const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log (aplicarDesconto(precoEtiqueta, 10))
} else if (formaDePagamento === 2) {
    console.log (aplicarDesconto(precoEtiqueta, 15))
} else if (formaDePagamento ===3) { 
    console.log (precoEtiqueta)
} else {console.log(aplicarJuros(precoEtiqueta, 10)) 
};