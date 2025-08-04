

// 6. Escribe un bucle que cuente el numero de vocales en una cadena de texto.

const vocales = ["a", "e", "i", "o", "u"]
let contador = 0

for (let i = 0; i < vocales.length; i++) {
    console.log(` ${contador} ${vocales[i]}`)
    contador++
}