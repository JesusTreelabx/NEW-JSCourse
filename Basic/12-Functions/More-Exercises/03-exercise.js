

// Buscar Cliente VIP
// Contexto: Una tienda tiene un arreglo de precios.
// Verifica si el cliente “Diego” está en la lista y
// muestra un mensaje especial si lo está.

const clientesVIP = ["", "Yisus", "Paola", "Melissa"]


function listaVIP(clientes) {
    for(let i = 0; i < clientes.length; i++) {
        if(clientes[i] === "Diego") 
            return "El cliente Diego si se encuentra en nuestra lista VIP"
    } 

    return "El cliente Diego no se encuentra en la lista VIP"
}

console.log(listaVIP(clientesVIP))