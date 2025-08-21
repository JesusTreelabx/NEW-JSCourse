// Common Methods (slice) and (splice)


let myArray

//slice
myArray = ["Yisus", "Alessa", "John", 37, true]

let myNewArray = myArray.slice(1, 4) // Los elementos 1 y 4 quedan eliminados y solo incluye a partir del elemento 1 hasta el 3.

console.log(myArray)
console.log(myNewArray)



// splice
myArray.splice(1, 3) // comenzando desde el elemento 1 hasta el elemento 3 los eleimina y solo queda elemento 0 y 4
console.log(myArray)

