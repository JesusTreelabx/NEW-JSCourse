

/* Diseña una función llamada crearSandwichSubway que reciba el tipo de pan
("integral", "parmesano") una proteína ("pollo", "atun") y un booleano que 
indique si lleva vegetales extra. El precio base del sanwich es $4, si lleva 
vegetales extra se suma $1.
La funcion debe devolver un string:
"Sandwich de [proteina] en pann [pan] en pan [pan] con [extra/no extra] vegetales cuesta $ [total] */

function crearSandwichSubway(pan){
    let sanwichBase = 4
    let sum = sanwichBase

    for(let i = 0; i< pan.length; i++) {
        if(pan[i] === "integral" + "pollo") {
            "vegetales" = true + sum += 1 
        }
    }
}