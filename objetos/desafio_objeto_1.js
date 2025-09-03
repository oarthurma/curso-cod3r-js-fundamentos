// data (
// Atributos: dia, mes, ano
// Método: exibir -> "dia/mes/ano"

//Minha resolução:
// const dataNasc = {
//     dia: 22,
//     mes: 5,
//     ano: 1985,
//     function() {
//     return (`${this.dia}/${this.mes}/${this.ano}`);
//     }
// }; 

// console.log(dataNasc.function());

const nascimento = {
    dia: 9,
    mes: 10, 
    ano: 2010,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }

};

console.log(nascimento.exibir())
