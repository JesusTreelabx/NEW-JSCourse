

// (return)
// Es una instruccion dentro de una funcion, la cual devuelve un valor especifico.
// Una vez que se ejecuta (return) la funcion termina inmediatamente y entrega ese valor.
function restaurantHamburguesa() {
    console.log("Hamburguesa grande")
    let str = 'i'
    if(str.startsWith("h")) {
        return true
    } else {
        return false
    }

    return 'na'
    return "Su pedido esta siendo realizado"
    console.log("Hamburguesa especial")
    console.log("Hamburguesa chica")
    return "Pedido en camino"
}

let pedidoDeHamburguesa = restaurantHamburguesa()

console.log(pedidoDeHamburguesa)



// Todo lo que esta despues del primer (return) se ignora