/*  Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas []
Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo
*/

const saldoFamiliar = {
    receitas: [5000, '900', 1800, '100'],
    despesas: [2200, 1300, 300, 1100, 500]
}

function sumBalance(objeto) {
    let Receita = 0
    let Despesas = 0

    for (indice of objeto.receitas) {
        Receita += Number(indice)
    }

    for (indice of objeto.despesas) {
        Despesas += Number(indice)
    }

    let total = Receita - Despesas

    return total > 0 ? 
        console.log(`Saldo positivo: R$ ${total.toFixed(2)}`) :
        console.log(`Saldo negativo: R$ ${total.toFixed(2)}`);
}

sumBalance(saldoFamiliar)