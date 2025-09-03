/* 
Calcular se o aluno está aprovado, reprovado ou de recuperação.
 A menor nota deve ser descartada e a média deve ser feita com as duas maiores notas.
 Calcular a média do aluno utilizando as 2 maiores notas:
Status: Aprovado >= 7
        Recuperação >= 4 e < 7
        Reprovado < 4

Minha solução:
let maior1 = 0, maior2 = 0, menor = 0;

const nota1 = 7.8;
const nota2 = 3.1;
const nota3 = 6.7;

function maioresNotas(n1, n2, n3) {
    if(n1 < n2) {
        if (n1 < n3) {
            menor = n1;
            maior1 = n2;
            maior2 = n3
        } else if (n3 < n2){
            menor = n3;
            maior1 = n1;
            maior2 = n2;
        }
    } else {
        menor = n2;
        maior1 = n1;
        maior2 = n3;
    }
}

function calculaMedia (m1, m2) {
    return (m1 + m2) / 2;
}

function defineStatus(media) {
    
    //media = Math.ceil(media);
    if(media >= 7) {
        return "Status: Aprovado";
    } else if (media >= 4) {
        return "Status: Recuperação";
    } else
        return "Status: Reprovado";
}

maioresNotas(nota1, nota2, nota3);

console.log(`As duas maiores notas são: ${maior1} e ${maior2}, respectivamente.`);

let resultado = calculaMedia(maior1, maior2);
console.log(resultado);

let resultadoFinal = defineStatus(resultado);
console.log(resultadoFinal); 
*/

// Resolução:
const nota1 = 7.8;
const nota2 = 3.1;
const nota3 = 6.7;

function minimo(n1, n2) {
    return n1 < n2 ? n1 : n2;
}

function mediaDuasMaiores(n1, n2, n3) {
    const menorNota = minimo(n1, minimo(n2, n3))

    if(menorNota === n1) {
        return (n2 + n3) / 2;
    } else if(menorNota === n2) {
        return (n1 + n3) / 2;
    } else {
        return (n1 + n2) / 2;
    }
}

function mediaParaStatus(media) {
    if(media >= 7) {
        return "Aprovado";
    } else if(media >= 4) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

const mediaFinal = mediaDuasMaiores(nota1, nota2, nota3);
const statusFinal = mediaParaStatus(mediaFinal);
console.log(`O resultado final do aluno é ${statusFinal}!`);


