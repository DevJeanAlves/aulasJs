/* ### Sistema de gastos familiar

Crie um objeto que possuirá duas propriedades, ambas do tipo
array:
    *receitas: []
    *despesas: []

Agora crie uma função que irá calculas o total de receitas e despesas
e mostrar uma mensagem se a família está com saldo positivo ou negativo,
seguido de valor do saldo


*/

let family = {
    receita: [1800, 4000],
    despesa: [200, 500, 700]
}

function sum(array) {
    let total = 0

    for(value of array) {
        total += value
    }

    return total;
}

function calculate() {
    let receitaTotal = sum(family.receita)
    let despesaTotal = sum(family.despesa)

    let total = receitaTotal - despesaTotal

    let saldoPositivo = total > 0
    if(!saldoPositivo) {
        console.log(`Saldo negativo: ${total}`)
    }else{
        console.log(`Saldo positivo ${total}`)
    }
}

calculate()
