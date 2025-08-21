



// Funciones con parametros. Pedido de Hamburguesas
function mcDonalds(pedido, precio) {
    console.log(`Su pedido es ${pedido} precio total ${precio}`)
}

mcDonalds("BigMac", 79.90)



function burgerShot(pedido = "Special Burger", precio = 129.90) {
    console.log(`Su pedido es ${pedido} precio total ${precio}`)
}

burgerShot()