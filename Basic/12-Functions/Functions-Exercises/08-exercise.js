

// 8. Crea una funcion que reciba un array de numeros y devuelva un array con cada numero elevado al cuadrado.
function arrayNum2(arr2) {
    const newArray = []

    for (let i = 0; i < arr2.length; i++) {
            newArray.push(arr2[i] * arr2[i])
    }
    return newArray;
}

console.log(arrayNum2([5, 8, 4, 10, 30]))
console.log(arrayNum2([25, 7, 9, 2, 3]))
console.log(arrayNum2([1, 2, 3, 4, 5]))
console.log(arrayNum2([11, 24, 6, 18, 12]))