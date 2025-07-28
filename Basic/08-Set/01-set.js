// set

// Declaración
let mySet = new Set()

console.log(mySet)


// Inicialización
mySet = new Set(["Yisus", "Alessa", "John", 37, "jesscv24@gmail.com"])

console.log(mySet) // Arroja un set de 6 elementos con todos sus datos!



// Métodos comunes

// add 
mySet.add("www.youtube.com") // Con set y agregando.add agrega un elemento al final del array. Tiene una similitud con los arrays pero cambia la sintaxis.
mySet.add("www.youtube.com") // No admite elementos duplicados.
console.log(mySet)



// delete
mySet.delete("Alessa") // No se tiene el acceso directo a los indices, por lo cual para poder eliminar el elemento que tu necesitas, solo hay que escribirlo.

console.log(mySet)

console.log(mySet.delete("John")) // Retorna (true) si ene este set el elemento si exitia y fue eliminado o retorna (false) si elemento no se encontraba en el set.



// has
console.log(mySet.has("Yisus")) // Retorna un (true) si el elemento existe en el set, y retornara un (false) si el elemento no existe en el set 



// size
console.log(mySet.size) // Mostrará el numero de elementos que tengas actualmente, size es como si fuera length.