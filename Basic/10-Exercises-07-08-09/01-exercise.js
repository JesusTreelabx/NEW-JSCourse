
// 1. Crea un array que almacene cinco animales.
let theAnimals = ["Tiger", "Dog", "Cat", "Horse", "Pig"]

console.log(theAnimals)



// 2. Aniade dos mas, uno al principio y otro al final.
theAnimals.unshift("Rabit")


theAnimals.push("Duck")

console.log(theAnimals)



// 3. Elimina el que se encuentra en tercera posicion.
theAnimals.splice(2,1)

console.log(theAnimals)



// 4. Crea un set que almacene cinco libros.
let setBooks = new Set(["Matilda", "El Principito", "Dracula", "Frankenstein", "Harry Potter"])

console.log(setBooks)



// 5. Aniade dos mas, uno de ellos repetido.
setBooks.add("Juegos Del Hambre")
setBooks.add("Dune")
setBooks.add("Dune")

console.log(setBooks)



// 6. Elimina uno concreto a tu eleccion.
setBooks.delete("Matilda")

console.log(setBooks)



// 7. Crea un mapa que asocie el numero del mes a su nombre.
let numberMonth = new Map([
    [1, "January"],
    [2, "February"],
    [3, "March"],
    [4, "April"],
    [5, "May"],
    [6, "June"],
    [7, "July"],
    [8, "August"],
    [9, "September"],
    [10, "October"],
    [11, "November"],
    [12, "December"],
])

console.log(numberMonth)



// 8. Comprueba si el mes numero 5 existe en el map e imprime su valor.
console.log(numberMonth.has(5))



// 9. Aniade al mapa una clave con un array que almacene los meses de verano.
numberMonth = new Map([
    [1, "January",],
    [2, "February"],
    [3, "March"],
    [4, "April"],
    [5, "May"],
    [6, "June"],
    [7, "July"],
    [8, "August"],
    [9, "September"],
    [10, "October"],
    [11, "November"],
    [12, "December"],
    ["Summer", ["July", "August", "September"]]
])

console.log(numberMonth)



// 10. Crea un array, transformalo a un set y almacenalo en un Map