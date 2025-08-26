

// Personzalizacion de helados en Dairy Queen.
/* Crea una función llamada personalizarHeladoDQ que reciba un array con los ingredientes 
seleccionados para un helado (ej. ["chocolate", "caramelo", "fresa"]) y devuelva un 
mensaje con el precio total. 
Cada ingrediente tiene un costo adicional de $0.5, y el helado base cuesta $3. 
La función debe retornar un string como: "Tu helado con [ingredientes] cuesta $[total]". */

function personzalizarHeladoDQ(helado = 3) {
    const ingredeientes = ["chocolate", "Caramelo", "Fresa"]
    let sum = 0

    if(helado === "chocolate") {
        sum += helado + 0.5
    }
}


console.log(personzalizarHeladoDQ())