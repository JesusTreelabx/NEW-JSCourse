

// 3. Crea una funcion que reciba un string y devuelva el número de vocales que contiene.

const texto = "Castillo y Piramide"
const vocales = "aeio"

function myString(str) {
    let sum = 0
    for(let i = 0; i < str.length; i++) {
        if (vocales.includes(str[i].toLowerCase())) {
            sum++
        }
    }
    console.log(texto)
    return sum
}


console.log(myString(texto)) // Invocando a la función