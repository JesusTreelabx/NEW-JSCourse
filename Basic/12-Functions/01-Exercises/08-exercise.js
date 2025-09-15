

/* Personalización de donas en Krispy Kreme
Crea una función llamada personalizarDonasKrispy que reciba un array con 
los sabores de donas pedidos (ej. ["glaseada", "cajeta", "frambuesa"]) 
y la cantidad de cada una. Cada dona cuesta $1.2, 
pero si se piden más de 12 donas en total, se aplica un descuento del 10%. 
La función debe retornar un string como: "
Tu pedido de [cantidad] donas ([sabores]) cuesta $[total]". */

function personalizarDonasKrispy(cantidadDonas, donaSabores) {
    let precioBase = 1.2
    let totalDeDonas = 0
    // // let descuento = total * .90
    


    for(let i = 0; i < cantidadDonas.length; i++){
        totalDeDonas += cantidadDonas[i] 
    }

    let total = precioBase * totalDeDonas;
    
    if(totalDeDonas > 12) {
        total = total * .90
    }
    return `Tu pedido de ${totalDeDonas} donas ${donaSabores.join(", ")} cuesta $ ${total}`
}


console.log(personalizarDonasKrispy([4, 2, 5], ["glaseada", 'cajeta', "frambuesa"]))
console.log(personalizarDonasKrispy([5, 5, 5], ["frambuesa", "glaseada","cajeta"]))
console.log(personalizarDonasKrispy([7, 2, 1], ["cajeta", "frambuesa","glaseada"]))
console.log(personalizarDonasKrispy([4, 6, 2], ["cajeta", "glaseada","frambuesa"]))
console.log(personalizarDonasKrispy([7, 2, 1], ["glaseada", "cajeta","frambuesa"]))