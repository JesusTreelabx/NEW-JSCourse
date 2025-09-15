


/* 7. Validar Cupón de Descuento
Función: validarCupon(cuponesDisponibles, cuponIngresado)

Contexto:
El usuario introduce un código de descuento.

Parámetros:
- cuponesDisponibles: arreglo de strings
- cuponIngresado: string

Salida esperada:
{ valido: true, mensaje: "Cupón válido" }

Ejemplo:
validarCupon(["DESC10", "PROMO20"], "DESC10"); */

function validarCupon(cuponesDisponibles, cuponIngresado){
    let esCanjeable = false

    for(let i =0; i < cuponesDisponibles.length; i++){
        if(cuponesDisponibles[i] === cuponIngresado){
            return esCanjeable = {valido: true, mensaje: "Cupon valido!"}
        } else {
            return esCanjeable = {valido: false, mensaje: "Cupon no valido"}
        }
    }

    return esCanjeable
}

const cuponesDisponibles = ["DESC10", "PROMO20"]

const cuponIngresado = "DESC10"
const cuponIngresado2 = "DESC11"
const cuponIngresado3 = "DESC33"

console.log(validarCupon(cuponesDisponibles, cuponIngresado))
console.log(validarCupon(cuponesDisponibles, cuponIngresado2))
console.log(validarCupon(cuponesDisponibles, cuponIngresado3))
