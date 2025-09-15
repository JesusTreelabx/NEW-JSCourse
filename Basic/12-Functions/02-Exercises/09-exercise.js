

/* 9. Top 3 Productos Más Vendidos
Función: topProductos(ventas)

Contexto:
Un sistema de ventas desea mostrar los más populares.

Parámetros:
- ventas: arreglo { producto, vendidos }

Salida esperada:
Arreglo con los 3 productos más vendidos, ordenados:

Ejemplo:
topProductos([
{ producto: "Camiseta", vendidos: 10 },
{ producto: "Gorra", vendidos: 20 },
{ producto: "Zapatos", vendidos: 5 },
{ producto: "Pantalón", vendidos: 15 }
]);

Salida:
[
{ producto: "Gorra", vendidos: 20 },
{ producto: "Pantalón", vendidos: 15 },
{ producto: "Camiseta", vendidos: 10 }
] */

function topProductos(ventas){
    let masVendidos = [] // Agregue una variable con un arreglo vacio que recibira los argumentos del objeto. 

    for(let i = 0; i < ventas.length; i++){ // Agregue un for para recorrer las ventas.
        if(ventas[i].producto === "gorra"){ // Dentro del for agregue los if para validar los productos y agregandolos al arreglo con el método .push()
            masVendidos.push(ventas[i]) 
        }
        if(ventas[i].producto === "pantalon"){
            masVendidos.push(ventas[i])
        }
        if(ventas[i].producto === "camiseta"){
            masVendidos.push(ventas[i])
        }

    }
        return masVendidos

}


const ventas = [
    {
        producto: "gorra",
        vendidos: 20
    },
    {
        producto: "pantalon",
        vendidos: 15
    },
    {
        producto: "camiseta",
        vendidos: 10
    },
    {
        producto: "zapatos",
        vendidos: 5
    }
]

console.log(topProductos(ventas))
