
// 1. Crea un Array llamado (fruits) y añade las siguientes frutas en el orden indicado: apple, banana, orange.
let fruits = ["Apple", "Banana", "Orange"]

console.log(fruits)



/* 2. Dado el arreglo numeros = [10, 20, 30, 40], cambia el segundo elemento (20) por 25 y el 
cuarto elemento (40) por 45. */
let numbers = [10, 20, 30, 40]

numbers[1] = 25
numbers[3] = 45

console.log(numbers)



/* 3. Toma el arreglo colores = ["Rojo", "Azul"] y añade "Verde" y "Amarillo" al final del arreglo 
usando asignación directa (por índices).*/
let colors = ["Red", "Blue"]

colors.push("Green", "Yellow")
console.log(colors)



/* 4 . Crea un arreglo llamado mixta que contenga los siguientes elementos: tu nombre (como string), 
tu edad (como número), un booleano que indique si te gusta programar */
let personalData = ["Yisus", " y tengo ", 24, "Y me encanta programar?", true]

console.log(` Soy ${personalData} ` )




/* 5. Crea un arreglo llamado peliculas con 3 nombres de películas. Luego, imprime en la consola 
un mensaje que diga: "El arreglo tiene X elementos", donde X es la longitud del arreglo.
Usa la propiedad length). */
let movies = ["Deadpool", "Spiderman", "Formula 1"]

console.log(`The Array ${movies} has ${movies.length} this elements `)