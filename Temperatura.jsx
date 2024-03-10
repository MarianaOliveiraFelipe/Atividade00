const Temperatura = ({temperatura}) => { //vazio
/*
    let c = 30;
    let f = 102;
    let k = 25;
*/
    function celsiusParaFahrenheit(c){
        return (c * (9/5)) + 32;
    }

    function fahrenheitParaCelsius(f){
        return (f - 32) * (5/9);
    }

    function kelvin(k){
        const celsius = k - 273.15
        const fahrenheit = celsiusParaFahrenheit(celsius)
        return { celsius, fahrenheit }
        
    }

    return(
        <div>
        <h2>Celsius para Fahrenheit: {celsiusParaFahrenheit(temperatura).toFixed(3)}</h2> 
        <h2>Fahrenheit para Celsius:{fahrenheitParaCelsius(temperatura).toFixed(3)}</h2>
        <h2>Kelvin para Celsius: {kelvin(temperatura).celsius.toFixed(3)}</h2>
        <h2>Kelvin para Fahrenheit: {kelvin(temperatura).fahrenheit.toFixed(3)}</h2>
       </div> 
    )
}

export default Temperatura; 