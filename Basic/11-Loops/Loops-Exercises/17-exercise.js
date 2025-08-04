

// 17. Escribe un bucle que cuente cuantas vocales hay en un texto solamente (a, e, i, o)

const texto = "Castillo y Piramide"
const vocales = "aeio"
let sum = 0

for (let i =0; i < texto.length; i++) {
    if (vocales.includes(texto[i].toLowerCase())) {
        sum++
    }
}
console.log(sum)