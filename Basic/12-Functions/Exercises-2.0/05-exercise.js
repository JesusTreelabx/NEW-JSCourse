

/* Diseña una función llamada crearSandwichSubway que reciba el tipo de pan
("integral", "parmesano") una proteína ("pollo", "atun") y un booleano que 
indique si lleva vegetales extra. El precio base del sanwich es $4, si lleva 
vegetales extra se suma $1.
La funcion debe devolver un string:
"Sandwich de [proteina] en pan [pan] en pan [pan] con [extra/no extra]
 vegetales cuesta $ [total] */

function crearSandwichSubway(pan, proteina, extras) {
    let precioBase = 4
    let precioExtras = extras === true ? 1 : 0

    return `Sandwich de  ${proteina}  en pan  ${pan} 
        con extra vegetales  ${extras}  cuesta $  ${precioBase + precioExtras}`
}


console.log(crearSandwichSubway("parmesano", "pollo", true ))
console.log(crearSandwichSubway("integral", "atun", false))