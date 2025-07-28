// 8. Usa un Switch para imprimir unn mensaje de saludo diferente dependiendo del idioma

let country = "Italian"
let greeting 

switch (country) {
    case "Spanish":
    greeting = "Hola" 
    break
    case "Italian":
    greeting = "Ciao"
    break
    case "French":
    greeting = "Bonjour"
    break
    case "Portuguese":
    greeting = "Olá"
    break
    case "English":
    greeting = "Hello"
    break
    case "German": 
    greeting = "Hallo"
    break
    case "Turkish":
    greeting = "Merhaba"
    break
}

console.log(greeting)