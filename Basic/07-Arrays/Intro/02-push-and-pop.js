// Metodos Comunes (Common methods)

let myArray = []

myArray = []

// push y pop
myArray.push("Yisus") // (push) agrega un elemento al array.
myArray.push("Alessa")
myArray.push("John")
myArray.push(37)

console.log(myArray)
console.log(myArray.pop()) // Elimina el último y lo devuelve.
myArray.pop()  // (pop) Elimina el úiltimo elemento del array.



// slice
myArray = ["Yisus", "Alessa", "John", 37, true]

let myNewArray = myArray.slice(1, 4) // selecciona el elemento 1 y 4 inicia desde el elemento 1 y el final no lo incluye.

console.log(myArray)
console.log(myNewArray)



// splice
myArray.splice(1, 3) // comenzando desde el elemento 1 hasta el elemento 3 los eleimina y solo queda elemento 0 y 4
console.log(myArray)