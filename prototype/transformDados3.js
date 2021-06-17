// Manipulando Strings e Números

// Transformar um número quebrado com duas casas decimais e trocar ponto por virgula

let number = 123.3223442

console.log(number.toFixed(2).replace(".", ","))

// atrelei o metodo .toFixed que nos parametros espera o numero de casas decimais

// metodo .replace espera: .replace("trocar isso", "por isso")