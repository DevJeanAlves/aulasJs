/* ### Celsius em fahrenheit

    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra
    
    C = (F- 32) * 5/9

    F= C * 9/5 + 32
*/
function calculeTemp(temp,weather) {
    let calculoFinal

    if (weather.includes('C')) {
        calculoFinal = (temp * 9/5 + 32).toFixed(null) + 'F'
    }else if(weather.includes('F')) {
        calculoFinal = ((temp - 32) * 5/9).toFixed(null) + 'C'
    }else {
        calculoFinal = console.log('Dados incorretos!')
    }
    return calculoFinal
}

function convertWeather(weather) {
    let temp
    weather.toUpperCase()

    if (weather.includes('C')) {
        temp = weather.replace('C', '')
    } else if (weather.includes('F')) {
        temp = weather.replace('F', '')
    }

    console.log(calculeTemp(temp, weather))

}

convertWeather('40C')