

//Cálculo del costo total de un pedido en McDonald's.
/* Crea una función llamada calcularTotalMcDonalds que reciba como parámetros 
la cantidad de hamburguesas, papas fritas y refrescos pedidos. 
Cada hamburguesa cuesta $5, cada porción de papas fritas $2 y cada refresco $1.5. 
La función debe devolver el costo total del pedido, incluyendo un 10% de impuestos. */
function calcularTotalMcDonalds(hamburguesas = 2, fries = 2, sodas = 2) {
    let sum = 0

    if(hamburguesas > 0) {
        sum += hamburguesas * 5  //Multiplicamos la hamburguesa por 5 ya que es el costo de la hamburguesa
    } 
    if(fries > 0) {
        sum += fries * 2
    }
    if(sodas > 0) {
        sum += sodas * 1.5
    }
    return sum * .90
}


console.log(calcularTotalMcDonalds())
console.log(calcularTotalMcDonalds(1, 1, 1)) // Aqui no es necesario escribir el argumento solo las cantidades.
console.log(calcularTotalMcDonalds(11, 6, 4))
console.log(calcularTotalMcDonalds(4, 2, 4))