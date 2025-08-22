


// Eliminar productos descontinuados, Contexto:
// Una tienda tiene un arreglo de productos con un campo isDiscontinued: true/false.
// Crea un nuevo arreglo que excluya los productos descontinuados.




function prodDescontinuados(articulos) { 
    const prodConExistencia = []

    for(let i = 0; i < articulos.length; i++) {
        if(articulos[i].isDiscontinued === false){
            prodConExistencia.push(articulos[i])
        } 
    }
    return prodConExistencia
}


const productos = [
    {
        // clave: "valor"
        tipo: "Laptop 💻",
        modelo: "HP Envy",
        color: "Silver",
        os: "Windows 11",
        pantalla: "13 Pulgadas HD",
        isDiscontinued: false
    },
    {
        tipo: "Celular 📱",
        modelo: "iPhone 16",
        color: "Rosa",
        os: "iOS 16",
        pantalla: "6.1 Pulgadas",
        isDiscontinued: true
    },
    {
        tipo: "TV 📺",
        modelo: "Samsung",
        pantalla: "75 Pulgadas",
        imagen: "UHD QLED 4K",
        isDiscontinued: false
    },
    {
        tipo: "Videojuego 🎮",
        nombre: "Grand Theft Auto VI",
        categoria: "Acción y Aventura",
        clasificacion: "M (Mature)",
        isDiscontinued: true
    }
]


console.log(prodDescontinuados(productos))

// console.log(productos[0].tipo)
// console.log(productos[0].pantalla)

// console.log(productos[1].tipo)
// console.log(productos[1].isDiscontinued)

// console.log(productos[2].tipo)
// console.log(productos[2].isDiscontinued)

// console.log(productos[3].tipo)
// console.log(productos[3].nombre)



// Comentarios

/* function prodDescontinuados(articulos) {}
Define una función llamada prodDescontinuados que recibe un arreglo de productos 
como parámetro */


/* const prodConEsxistencia = [] 
Crea un nuevo arreglo vacío para almacenar los productos que no están descontinuados 
*/


/* for(i = 0; i < articulos.length; i++) {}
Inicia un bucle for para recorrer cada producto en el arreglo articulos 
*/


/* if(articulos[i].isDiscontinued === false){}
Comprueba si el producto en la posición i no está descontinuado (isDiscontinued es false)
*/


/* prodConEsxistencia.push(articulos[i])
Si el producto no está descontinuado, lo agrega al arreglo prodConEsxistencia.
*/


/* return prodConEsxistencia
Devuelve el arreglo con los productos que no están descontinuados.
*/


/* const productos = []
Define un arreglo de productos, donde cada producto es un objeto con propiedades como tipo, modelo, etc.
*/