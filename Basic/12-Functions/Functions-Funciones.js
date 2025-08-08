

// Functions (Funciones)

// Estructura por defecto de una Funcion.

// Simple
function myFunc() {
    console.log("Hola, Mundo!")
}

myFunc()
myFunc()
myFunc()



// for (let i = 0: i < 5; i++) {
//     myFunc()
// }




// Con parametros
function myFuncWithParams(name) {
    console.log(` Hola, ${name}!`)
}

myFuncWithParams("Ana Katy")
myFuncWithParams("Ronaldo")





// Funciones Anonimas. Se tienen que asignar a una variable a una constante, si no no habria manera de poder invocarla.
const myFunc2 = function(name) {
    console.log(`Hola, ${name}!`)
}

myFunc2("Kike")






// Arrow Functions. Tambien tenemos que terminar asignandolas a una variable o una constante.
const myFunc3 = (name) => {
    console.log(`Hola, ${name}!`)
}

myFunc3("Paola")



const myFunc4 = (name) => console.log(`Hola, ${name}!`)

myFunc4("Jessy")






// Parametros
function mySum(a, b) {
    console.log(a + b)
}

mySum(5, 10)
mySum(5)


function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}

defaultSum()
defaultSum(5)
defaultSum(5, 10)
defaultSum(b = 5)






// Retorno de valores
function multiplicar(a, b) {
    return a * b
}

let result = multiplicar(5, 10)
console.log(result)






// Funciones anidadas
