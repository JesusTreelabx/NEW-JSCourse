

// 4. Crea una funcion que reciba un array de strings y devuelva un nuevo array con los strings en Mayusculas.
const palabras = ["pelicula", "de", "terror"]


function strMayusculas(arrStrings) {
    const palabrasMayusculas = []
    for (let i = 0; i < arrStrings.length; i++) {
        const palabra = arrStrings[i].toUpperCase()
        
        palabrasMayusculas.push(palabra)
    }
    return palabrasMayusculas
}

console.log(strMayusculas(palabras))