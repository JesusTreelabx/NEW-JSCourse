// Map ("clave", "valor")


// Statement
let myMap = new Map()

console.log(myMap)


// Initialization

//Map
myMap = new Map([    // Lo que arroja Map son claves con su valor, es decir clave valor.
    ["name", "Yisus"],
    ["email", "jesscv24@gmail.com"],
    ["age", 99]
])

console.log(myMap)


// Metodos y propiedades

// set
myMap.set("alias", "chuy") // Agrega una nueva clave con su valor.
myMap.set("name", "JahlilYisus") // Si la clave ya existe pero agregar un nuevo valor el valor se actualizará.

console.log(myMap)



// get, 
// (get) imprime el valor de la clave que le estamos solicitando. Es decir le estamos solicitando un valor especifico de una clave.
console.log(myMap.get("name"))
console.log(myMap.get("age"))
console.log(myMap.get("alias"))



// has
// (has) es como preguntar: contiene la clave "name"? y retornará un (true) o un (false) si es que existe esa clave.
console.log(myMap.has("name")) 
console.log(myMap.has("lastname"))