// 7. Muestra el número de días que tiene un mes, dependiendo de la variable del ejercicio anterior

let month = "March"
let days

if (month == "February") {
    days = 28
} else if (["April", "June", "September", "November"].includes(month)) {
    days = 30
} else if (["Janary", "March", "May", "July", "August", "October", "December"].includes(month)) {
    days = 31
} else {
    days = "Invalid month!"
}

console.log(`${month} has ${days} days`)