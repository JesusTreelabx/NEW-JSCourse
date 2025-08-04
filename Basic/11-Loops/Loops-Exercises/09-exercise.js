

// 9. Usa un bucle para invertir una cadena de texto.
const text = "Bienvenido al Restaurante xD"
let inversa = ""

for (let i = text.length -1; i >=0; i--) {
    inversa += text[i];
}

console.log(inversa)