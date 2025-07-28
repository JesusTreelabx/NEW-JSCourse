/* 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica 
cuantos aniosle faltan */

let edad = 35

if (edad == 18) {
    console.log("Cumple con la edad requerdida para votar")
} else if (edad < 18) {
    let aniosFaltantes = edad - 18
    console.log(`No cumple la edad requerida para votar le faltan ${aniosFaltantes} anios para tener 18`)
} else {
    console.log("Aun tiene la edad adecuada para votar")
}