

// 7. Crea una funcion que reciba un array de numeros y devuelva la suma de todo los numeros pares.
function arrayNumeros(array) {
    let sum = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sum += array[i];         //
        }
        
    }
    return sum;
}

console.log(arrayNumeros([7, 4, 9, 5, 8, 2, 4]))
console.log(arrayNumeros([15, 21, 55, 44, 66, 33]))
console.log(arrayNumeros([8, 3, 64, 1, 11, 13]))
console.log(arrayNumeros([99, 24, 11, 77, 32, 60]))
console.log(arrayNumeros([88, 56, 93, 6, 29, 17]))
console.log(arrayNumeros([4, 19, 48, 55, 34, 58, 10]))
console.log(arrayNumeros([8, 18, 28, 38, 48, 58, 68, 78, 88, 98]))