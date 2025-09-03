// Parâmetro (Nota) -> Retorno (Conceito)

// Minha resolução:
// function notaConceito(nota) {
//     switch(nota) {
//         case 10: return 'A+'; break;
//         case 9: return 'A'; break;
//         case 8: return 'B+'; break;
//         case 7: return 'B'; break;
//         case 6: return 'C+'; break;
//         case 5: return 'C'; break;
//         case 4: return 'D+'; break;
//         case 3: return 'D'; break;
//         case 2: return 'E+'; break;
//         case 1: return 'E'; break;
//         case 0: return 'F'; break;
//         default: return null; 
        
//     }
// }

// let exibirConceito = notaConceito(7);
// console.log(exibirConceito);

function notaParaConceito(nota) {
    switch (Math.ceil(nota)) {
        case 10: return 'A+';
        case 9: return 'A'; 
        case 8: return 'B+'; 
        case 7: return 'B'; 
        case 6: return 'C+'; 
        case 5: return 'C'; 
        case 4: return 'D+'; 
        case 3: return 'D'; 
        case 2: return 'E+'; 
        case 1: return 'E'; 
        case 0: return 'F'; 
        default: return null;
    }
}

console.log(`O conceito do Bruno é ${notaParaConceito(6.001)}`)
console.log(`O conceito da Laura é ${notaParaConceito(8.9)}`)