// String


// Concatenación
let myName = "Yisus"
let greeting = "Hola, " + myName + "!"
let missed = " Me extrañaste" + "?"
console.log(greeting + missed)



// Longitud
console.log(greeting.length)



// Acceso a caracteres (cadena de texto)
console.log(greeting[0])
console.log(greeting[1])
console.log(greeting[2])
console.log(greeting[3])
console.log(greeting.indexOf("Yisus"))



// Métodos comunes
console.log(greeting.toUpperCase()) // Es una función, transforma la cadena de texto todo a MAYUSCULAS 
console.log(greeting.toLowerCase()) // Es una función, transforma la cadena de texto en minusculas.
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("Yisus"))
console.log(missed.indexOf("Me extrañaste"))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("Yisus"))
console.log(missed.includes("Hola"))
console.log(missed.slice(0,10))
console.log(greeting.replace("Hola", "Que onda"))




// Template literals (plantillas literales)
let message = `Hola, este es mi  
curso de JavaScript` // Con las comillas `` puedes escribir una cadena de texto en dos o más lineas
console.log(message)

console.log(`Hola, ${myName}!`) // Interpolando una variable por su valor real utilizando `` ${}

let email = "yisuscv@gmail.com"
console.log(`Hola, ${myName} Tu email es ${email}`) // Interpolando dos variables utilizando `` ${} 