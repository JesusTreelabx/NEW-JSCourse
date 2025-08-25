

// Con Loop for
// Crea una función que reciba un número (por ejemplo 5) y muestre en consola:
//"Preparando hamburguesa 1", "Preparando hamburguesa 2", … hasta llegar al número recibido.


function preparandoHamburguesas(numero) {
    for (let i = 1; i <= numero; i++) {
        console.log("Preparando Hamburguesa" + i)
    }
}

console.log(preparandoHamburguesas(5))