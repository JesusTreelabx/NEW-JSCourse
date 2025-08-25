

// Con condicionales
// Crea una función que reciba el nombre de una hamburguesa ("Whopper") y regrese:
//"Disponible" si está en el menú.
//"No disponible" si no lo está.
//(Ejemplo menú: ["Big Mac", "CHeese Burger", "Whopper"])
const burgerMenu = ["BigMac", "CheeseBurger", "Whopper"]

function pedido(Hamburger) {
    if(Hamburger === "Whopper") {
        return "Available"
    } else {
        return "Unavailable"
    }
}

console.log(pedido("Whopper"))
console.log(pedido("BigMac"))
console.log(pedido("CheeseBurger", "Whopper"))
