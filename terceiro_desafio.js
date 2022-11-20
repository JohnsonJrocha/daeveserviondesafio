const nota1 = 3;
const nota2 = 8;
const nota3 = 2;

const mediaNota = (nota1 + nota2 + nota3)/3;
console.log(mediaNota.toFixed(2));


if (mediaNota > 7) { 
    console.log("aluno passou no semestre")
}
else if (mediaNota >= 5 && mediaNota <= 7)
    console.log("aluno esta em recuperacao");

else{console.log("aluno esta reprovado")
};

    

