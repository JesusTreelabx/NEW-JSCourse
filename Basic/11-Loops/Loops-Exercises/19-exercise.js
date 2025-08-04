

// 19. Convierte un texto a mayúsculas.
const texto = "sol y luna pelicula"
let resultado = ""

for (let i = 0; i < texto.length; i++) {
    resultado += texto[i].toUpperCase();
}
console.log(resultado)