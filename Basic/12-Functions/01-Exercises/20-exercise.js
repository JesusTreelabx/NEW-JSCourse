// 20. Top de palabras en un texto

// Función: topPalabras(texto, n)
// • Devolver las n palabras más frecuentes ignorando mayúsculas/minúsculas y signos.
// • Validar n ≥ 1. Si el texto está vacío, devolver [].
// • Salida: [{ palabra, conteo }] ordenado por conteo descendente.

// Ejemplo
// topPalabras("Hola hola, mundo! mundo mundo.", 2)
// Salida esperada
// [ { palabra: "mundo", conteo: 3 }, { palabra: "hola", conteo: 2 } ]


//servidor
function topPalabras(texto,n){
    const palabras = texto.split(" ")
    console.log(palabras);
    const map = new Map()

    for (let i = 0; i < palabras.length; i++) {
        console.log(palabras[i].toLowerCase());
        map.set(palabras[i].toLowerCase(), map.get(palabras[i].toLowerCase() || 0) + 1)
    }

    console.log(map);
    
    
}




//client
const texto = "Hola hola mundo mundo mundo"
const n = 2
console.log(topPalabras(texto,n));
