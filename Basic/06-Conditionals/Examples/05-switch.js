/* (Switch) es una alternativa para cuando tenemos que revisar condiciones que - 
se verifican contra una misma variable* */ 

let day = 7 
let dayName

switch (day) {
    case 1:               // case actuara como si fuera (if)
        dayName = "Lunes"
        break             // Se requiere (break) si no el switch se ejecutara de una manera anomala
    case 2:
        dayName = "Martes"
        break
    case 3:
        dayName = "Miercoles"
        break
    case 4:
        dayName = "Jueves"
        break
    case 5:
        dayName = "Viernes"
        break
    case 6:
        dayName = "Sabado"
        break
    case 7:
        dayName = "Domingo"
        break
    default:                 //default actuara como si fuera (else)
        dayName = "Numero de dia incorrecto"
}

console.log(dayName)