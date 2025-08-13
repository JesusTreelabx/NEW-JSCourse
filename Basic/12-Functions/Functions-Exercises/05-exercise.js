

// 5. Crea una funcion que reciba un numero y devuelva true si es primo, y false en caso contrario.
function numeroTrueOFalse(numero) {
    if(numero > 1 && (numero % numero) === 0 && (numero % 1) === 0) {
        return true
    } else { 
        return false
    }

}

numeroTrueOFalse(7)
numeroTrueOFalse(9)
numeroTrueOFalse(5)