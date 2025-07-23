// 6. Muestra en que estación del año nos encontramos, dependiendo del valor de una variable "mes"

let month = "December"
let seasonsYear

if (month == "July") {
    seasonsYear = "Summer"
} else if (["June", "July", "August"].includes(month)) {
    seasonsYear = "Summer"
} else if (["September", "October", "November"].includes(month)) {
    seasonsYear = "Fall"
} else if (["December", "January", "February",].includes(month)) {
    seasonsYear = "Winter"
} else if (["March", "April", "May"].includes(month)) {
    seasonsYear = "Spring"
} else {
    seasonsYear = "Invalid Season!"
}

console.log(`${month} is ${seasonsYear} Season now!`)