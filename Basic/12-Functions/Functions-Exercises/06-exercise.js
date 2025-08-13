

// 6. Crea una funcion que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos.
function creandoArrays(array1, array2) {
    const newArray = []

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                newArray.push(array1[i])
            }
        }
    }

    return newArray; 
}

console.log(creandoArrays(["Sky", "Dog", "Dragon"], ["Perro", "Dog", "Pato"]))
console.log(creandoArrays(["Cuahtemoc", "Ronaldinho", "Ochoa"], ["Ronaldinho", "Xavi", "Iniesta"]))
console.log(creandoArrays(["Mexico", "Noruega", "Tailandia"], ["Nigeria", "Tailandia", "Korea Sur"]))
console.log(creandoArrays(["Guayaba", "Manzana", "Mango"], ["Uva", "Guayaba", "Sandia"]))
console.log(creandoArrays(["Adidas", "Nike", "Reebok"], ["Puma", "New Balance", "Adidas"]))