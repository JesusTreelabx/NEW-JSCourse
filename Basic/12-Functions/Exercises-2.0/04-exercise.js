

// Tiempo de preparación en Starbucks
/* Crea una funcion llamada tiempoPreparacionStarbucks que recibe el tipo de bebida
("latte", "frapuccino", "te") y la cantidad de bebidas pedidas. Un latte toma 3 min.
un frapuccino 5 min. y un te 2 min. por bebida.
La funcion debe devolver el tiempo d total de preparacion en minutos. */

function tiempoPreparacionStarbucks(bebida) {
    let minutos = 0
    let sum = minutos

    for(let i = 0; i < bebida.length; i++) {
        if(bebida[i] === "Latte") {
            sum += 3 
        }
        if(bebida[i] === "Frapuccino") {
            sum += 5
        }
        if(bebida[i] === "Te") {
            sum += 2
        }
    }
    return "Su bebida " + bebida + " estara lista en " + sum + " minutos"
}


console.log(tiempoPreparacionStarbucks(["Latte"]))
console.log(tiempoPreparacionStarbucks(["Frapuccino"]))
console.log(tiempoPreparacionStarbucks(["Latte", "Frapuccino", "Te"]))