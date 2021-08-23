/* Celsius em fahrenheit

Crie uma função que receba uma string em calsius ou fahrenheit e faça a transformação de uma para a outra 

C = (F - 32) * 5/9

F = C * 9/5 + 32

*/


function calculaTemp(temp) {
    let temperature = temp.toUpperCase()

    
    temperature.includes('C') ?
    temperature = temperature.replace('C', '') :
    temperature = temperature.replace('F', '')
    
    
    let convertedTemp
     
    temp.includes('C' || 'c') ?
    convertedTemp = temperature * 9/5 + 32 :
    convertedTemp = (temperature - 32) * 5/9;

    return temp.includes('C' || 'c') ?
    console.log(convertedTemp + 'F') :
    console.log(convertedTemp + 'C')
    
}

calculaTemp('212F')