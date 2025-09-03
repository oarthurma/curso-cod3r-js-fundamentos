
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Minha resolução:
// for(let i = 8; i >= 0; i -= 2){
//     console.log(numeros[i]);
// }

for(let i = numeros.length - 2; i >= 0; i -= 2) {
    console.log(numeros[i]);
}