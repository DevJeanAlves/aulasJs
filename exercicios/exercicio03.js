/* ### Celsius em fahrenheit

    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra
    
    C = (F- 32) * 5/9

    F= C * 9/5 + 32
*/

function convC() {
    let convertTempC = temperature * 9 / 5 + 32
    console.log('Temperatura: ' + convertTempC + 'F')
}

function convF() {
    convertTempF = (temperature - 32) * 5 / 9
    console.log('Temperatura: ' + convertTempF + 'C')
}

let temperature = '19'
let tempMed = 'C'

let temperatureFinal = temperature + tempMed

function transfTemp(temp) {
    let checkTempC = temp.includes('C') || temp.includes('c')
    let checkTempF = temp.includes('f') || temp.includes('F')

    if (checkTempC) {
        convC()
    } else if (checkTempF) {
        convF()
    }

}

transfTemp(temperatureFinal)