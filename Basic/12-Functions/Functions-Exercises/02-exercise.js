

// 2. Crea una función que recibaun array de números y devuelva el mayor de ellos utilizando condicional ternario.
function mayorArray(array) {
    return array.length ? Math.max(...array) : undefined
}

const numeros = [18, 64, 15, 33, 10, 44, 59]

console.log(mayorArray(numeros))

