let listaConvidados = ['Jean', 'Jade'];

let nome
var idade
nome = process.argv[2]
Number(idade = process.argv[3])

const firstValid = (nome) => {
    if (!listaConvidados.includes(nome)) {
        console.log(`Desculpe sr. ${nome}, mas seu nome nao esta na lista`)
        return;
    }
}
const secondValid = () => {
    if (idade < 18) {
        console.log(`Desculpe Sr. ${nome}, mas sua idade é invalida`)
        return;
    }
}
const finalValid = () => {
    if (listaConvidados.includes(nome) && idade >= 18) {
        console.log(`Seja bem vindo Sr.${nome}`)
        return;
    } else {
        console.log(`Desculpe Sr.${nome}, não consiguimos validar seus dados`)
        return;
    }
}


firstValid(nome);

secondValid(idade);

finalValid(nome, idade);