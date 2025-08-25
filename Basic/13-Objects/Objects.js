

// Objects


// Sintaxis

let person = {
    name: "Vanessa",
    age: 35,
    Profession: "Actress"
}




// Acceso a Propiedades. Tenemos dos formas para acceder a las propiedades del objeto.

// Notación punto.
console.log(person.name)

// Notación de corchetes.
console.log(person["name"])




// Modificación de Propiedades. Podemos modificar las propiedades del objeto, incluso cambiar el tipo de dato de (number) a (string).

person.name = "Vanessa Kirby"
console.log(person.name)

person.age = "37"       //Cambio de dato de tipo (number) a tipo (string).
console.log(person.age)




// Eliminación de Propiedades. Podemos eliminar las ropiedades que deseamos quitar y que ya no necesitamos.

delete person.age
console.log(person) // Aqui nos imprime todas las propiedades del objeto excepto la propiedad (age) que fue la que eliminamos.




// Agregar Nueva Propiedad. Podemos agregar una nueva propiedad a el objeto.

person.email = "vanessakirby@gmail.com"
console.log(person)

person["age"] = 35 // Podemos agregarle nuevas propiedades con
console.log(person)




// Métodos (Funciones).

let person2 = {
    name: "Camila",
    lastname: "Cabello",
    age: 27,
    singer: function () {
        console.log("Camila is a singer!!")
    }
}

console.log(person2)
person2.singer()




// Anidación de Objetos. Podemos agregar objetos dentro de un objeto, es decir (objetos anidados).

let person3 = {
    name: "Virginia",
    age: 40,
    nickname: "Vicky",
    job: {
        name: "English teacher",
        exp: 10,
        work: function() {
            console.log("Vicky works as english teacher!")
        }
    }
}

console.log(person3)
console.log(person3.job)
person3.job.work()