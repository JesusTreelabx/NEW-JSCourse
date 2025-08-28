

// Tiempo de preparación en Starbucks
/* Crea una funcion llamada tiempoPreparacionStarbucks que recibe el tipo de bebida
("latte", "frapuccino", "te") y la cantidad de bebidas pedidas. Un latte toma 3 min.
un frapuccino 5 min. y un te 2 min. por bebida.
La funcion debe devolver el tiempo d total de preparacion en minutos. */

function tiempoPreparacionStarbucks(bebida) {
    let sum = 0

    for(let i = 0; i < bebida.length; i++) {
        if(bebida[i] === "latte") {
            sum += 3 
        }
        if(bebida[i] === "frapuccino") {
            sum += 5
        }
        if(bebida[i] === "te") {
            sum += 2
        }
    }
    return "Su bebida " + bebida + " estara lista en " + sum + " minutos"
}


console.log(tiempoPreparacionStarbucks("latte"))
console.log(tiempoPreparacionStarbucks("frapuccino"))