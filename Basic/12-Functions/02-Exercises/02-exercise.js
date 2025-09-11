

// 2. Calcular Propina para Meseros
// Función: calcularPropina(monto, porcentaje)
// Contexto:
// En un restaurante, se desea calcular la propina dada una cuenta.

// Parámetros:
// - monto: número mayor a 0
// - porcentaje: número entre 0 y 100

// Validaciones:
// - monto > 0
// - porcentaje entre 0 y 100

// Salida esperada:
// - Número redondeado a 2 decimales.

// Ejemplo:
// calcularPropina(250, 10); // 25.00


//servidor
function calcularPropina(monto, porcentaje){

    if(monto < 0){
        return "El monto tiene que ser mayor a 0"
    }

    if(porcentaje < 0 || porcentaje > 100){
        return "El porcentaje debe ser entre 0 y 100"
    }

    const propina =((monto*porcentaje)/100).toFixed(2)
    
    return `$${propina}`
}




//cliente
console.log(calcularPropina(250, 10)); //25
console.log(calcularPropina(500, 20)); //100