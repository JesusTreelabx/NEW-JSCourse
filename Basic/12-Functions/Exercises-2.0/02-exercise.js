

// Descuento en Pizza Hut segun el dia
/* Diseña una función llamada aplicarDescuentoPizzaHut que reciba el monto total 
de un pedido y el día de la semana (como string, ej. "lunes"). 
Si el pedido se realiza un martes, aplica un descuento del 20%. 
Si es viernes, aplica un descuento del 10%. Para cualquier otro día, no hay descuento. 
La función debe devolver el monto final a pagar. */

function aplicarDescuentoPizzaHut(montoTotal, diaDeLaSemana) {  

const diaEnMinuscula = diaDeLaSemana.toLowerCase() // Agregamos esta (constante) junto con to.LowerCase() nos ayudara para solicitud de cualquier dia de la semana sea aceptada con mayusculas y minicusculas.

    if(diaEnMinuscula === "martes") {  // Agregamos una validacion (if) de diaDeLaSemana, === agregando un string "martes" el cual nos pide el problema.
        return montoTotal * .80  // Agregamos un (return) utilizando el argumento montoTotal, multiplicandolo por el descuento que seria * .80 que es el porcentaje el cual nos pide el ejercicio.
    }
    if(diaEnMinuscula === "viernes") { // Agregamos otra validacion (if) de diaDeLaSemana, === agregando un string "viernes" el cual nos pide el problema.
        return montoTotal * .90  // Agregamos un (return) utilizando el argumento montoTotal, multiplicandolo por el descuento que seria * .90 que es el porcentaje el cual nos pide el ejercicio.
    } else {
        return "Este dia no aplica descuento"
    }
}

// Argumentos                (montoTotal, diaDeLaSemana)
console.log(aplicarDescuentoPizzaHut(599, "martes"))
console.log(aplicarDescuentoPizzaHut(350, "viernes"))
console.log(aplicarDescuentoPizzaHut(120, "Viernes"))
console.log(aplicarDescuentoPizzaHut(630, "lunes"))