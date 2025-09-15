

// Tiempo de preparación en Starbucks
/* Crea una funcion llamada tiempoPreparacionStarbucks que recibe el tipo de bebida
("latte", "frapuccino", "te") y la cantidad de bebidas pedidas. Un latte toma 3 min.
un frapuccino 5 min. y un te 2 min. por bebida.
La funcion debe devolver el tiempo d total de preparacion en minutos. */

function tiempoPedidoStarbucks(bebidas) {
    let tiempo = 0
    let sum = tiempo

    for(let i = 0; i < bebidas.length; i++) {
        if(bebidas[i] === "Latte") {
            sum += 3
        }
        if(bebidas[i] === "Frapuccino") {
            sum += 5
        }
        if(bebidas[i] === "Te") {
            sum += 2
        }
    }

    return "Su bebida " + bebidas + " estara lista en " + sum + " minutos." 
}


console.log(tiempoPedidoStarbucks(["Frapuccino", "Latte", "Frapuccino", "Te", "Frapuccino"]))
console.log(tiempoPedidoStarbucks(["Latte"]))