
/* 6. Crea un arreglo vacío llamado (pairs). Usa .push() para añadir los números pares 
del 2 al 8 (2, 4, 6, 8). */
let pairs = []
pairs.push(2, 4, 6, 8)

console.log(pairs)



/* 7. Añade el arreglo (cities) = ["Madrid", "Lima", "Tokio"], usa .push() para añadir "Paris" y luego 
reemplaza el primer elemento por "Barcelona" */
let cities = ["Manchester", "Madrid", "Tokyo"]
cities.push("Paris")
cities[0] = "Barcelona"

console.log(cities)



/* 8. Crea un arreglo (greetings) con los elementos: "Hola", "Mundo". Usa .push() para añadir "!". 
Luego, imprime un mensaje concatenando todos los elementos usando interpolación */
let greetings = ["Hello", "World"]
greetings.push("!")

console.log(`${greetings[0]} ${greetings[1]} ${greetings[2]}`)




/* 9. Crea un arreglo (values) con los elementos: 1, 3, "cinco", 7, "nueve". Usa .push() para añadir 10. 
Luego, imprime solo los elementos que son números y cuenta cuántos son usando .length. */
let values = [1, 3, "cinco", 7, "nueve"]
values.push(10)

console.log(values[0], values[1], values[3], values[5])




/* 10. Crea un arreglo (mysHobbies) con 2 hobbies tuyos. Usa .push() para añadir un tercer hobby. 
Luego, imprime un mensaje que diga: "Tengo X hobbies: [hobby1], [hobby2] y [hobby3].", 
donde X es la longitud del arreglo. */

let myHobbies = ["Running", "Listen Music"]
myHobbies.push("Play Videogames")

console.log(`This is my hobbies ${myHobbies} and are ${myHobbies.length}`)