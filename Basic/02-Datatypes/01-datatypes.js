// TIPOS DE DATOS PRIMITIVOS

// Cadenas de texto (String)
let name = "Jesus Capetillo"
let alias = 'Yisus'
let email = `jesscvdevops@gmail.com`


// Numeros (Nummbers)
let age = 31 // Entero
let heigh = 1.77 // Decimal


// Booleanos (Boolean)
let isStudent = true
let isTeacher = false


//Indefinido (Undefined)
let sinDefinir 
console.log(sinDefinir)
/* Una variable que si no le asigno un valor, es una variable no definida! */


//Nulo (Null)
let nullValue = null 
/* null en realidad lo que esta representando es que intencionadamente
yo estoy indicando que hay una ausencia de valor, es decir esta variable no contiene -
ningun valor por lo tanto es nula */


// Simbolo (Symbol)
let mysymbol = Symbol("mysymbol")
/* Valor unico inmutable y que habitualmente lo utilizamos para representar
identificadores unicos */


// Gran entero (BigInt)
let myBigInt = BigInt(75111191934743984392002934837747674635485866748406835387)
let myBigInt2 = 75111191934743984392002934837747674n 
/* Utilizamos un BigInt cuando intentammos representar un numero tan -
extremadamente grande que no puede ser representado con -
el tipo de dato primitivo number (numero), 
esta es otra forma de agregar el BigInt con tan solo agregar la letra (n) al final. */ 


//Mostramos los tipos de datos
console.log(typeof name)
console.log(typeof alias)
console.log(typeof email)
/* al agregar este console.log(typeof) nos arrojara el tipo de dato que tenemos -
que en este caso son string. */