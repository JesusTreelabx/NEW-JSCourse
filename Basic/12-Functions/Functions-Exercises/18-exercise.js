

// Con arrays
//Crea una función que reciba un array de precios de hamburguesas ([80, 95, 120]) y regrese el precio más caro.
const burgerArray = [80, 95, 120, 150]

function burgerPrices(burger) {
    
    if(burger === 150) {
        return "150, es el precio más caro de Hamburguesa"
    } else {
        return " Este no es el precio más caro de Hamburguesa"
    }
        
}

console.log(burgerPrices(150))