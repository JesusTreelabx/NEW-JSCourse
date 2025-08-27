

// Personzalizacion de helados en Dairy Queen.
/* Crea una función llamada personalizarHeladoDQ que reciba un array con los ingredientes 
seleccionados para un helado (ej. ["chocolate", "caramelo", "fresa"]) y devuelva un 
mensaje con el precio total. 
Cada ingrediente tiene un costo adicional de $0.5, y el helado base cuesta $3. 
La función debe retornar un string como: "Tu helado con [ingredientes] cuesta $[total]". */

function pedidoHeladoDQ(ingredientes) {
    let heladoBase = 3
    let sum = heladoBase

    for(let i = 0; i < ingredientes.length; i++) {
        if(ingredientes[i] === "chocolate") {
            sum += 0.5
        }
        if(ingredientes[i] === "caramelo") {
            sum += 0.5
        }
        if(ingredientes[i] === "fresa") {
            sum += 0.5
        }
    }

    return "Tu helado con " + ingredientes.join(" y ") + " cuesta $" + sum
}

console.log(pedidoHeladoDQ(["chocolate"]))
console.log(pedidoHeladoDQ(["fresa", "caramelo"]))
console.log(pedidoHeladoDQ(["fresas", "chocolate"]))