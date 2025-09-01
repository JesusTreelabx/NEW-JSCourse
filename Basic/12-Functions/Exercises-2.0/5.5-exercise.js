

/* Diseña una función llamada crearSandwichSubway que reciba el tipo de pan
("integral", "parmesano") una proteína ("pollo", "atun") y un booleano que 
indique si lleva vegetales extra. El precio base del sandwich es $4, si lleva 
vegetales extra se suma $1.
La funcion debe devolver un string:
"Sandwich de [proteina] en pan [pan] en pan [pan] con [extra/no extra] vegetales cuesta $ [total] */


function pedidoSandwichSubway(proteina, pan, vegetales) {
    let costoBase = 4
    let extrass = vegetales === true ? 1 : 0

    return `Sandwich de ${proteina} en pan ${pan} 
    con o sin extra vegetales ${vegetales} cuesta $ ${costoBase + extrass}`
}



console.log(pedidoSandwichSubway("pollo", "parmesano", true))
console.log(pedidoSandwichSubway("atun", "integral", false))