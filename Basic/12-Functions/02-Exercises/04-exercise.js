


/* 4. Validar Registro en App de Reparto
Función: validarUsuario(usuario)
Contexto:
Un repartidor debe registrarse con datos mínimos.

Parámetros:
- usuario: objeto { nombre, edad, email, licencia }

Reglas de validación:
- nombre no vacío
- edad "e18
- email contiene "@"
- licencia no vacía

Salida esperada:
{ valido: true, errores: [] }
o
{
valido: false,
errores: ["Edad inválida", "Email inválido"]
}

Ejemplo:
validarUsuario({
nombre: "Carlos",
edad: 17,
email: "carlosmail.com",
licencia: ""
});
*/

function validarUsuario(usuario){
    const resultado = {
        valido: true,
    }


    if(usuario.nombre === ""){
        return "El campo nombre no debe quedar vacio"
    }
    if(usuario.edad <= 18){
        return  "La edad debe ser mayor o igual a 18"
    }
    if(usuario.email.includes("@")){
        return "El email debe incluir el caracter especial @"
    }
    if(usuario.licenia === ""){
        return "El campo licencia no puede quedar vacia"
    }

    return resultado
}




const usuario01 = {
    nombre: "Carlos",
    edad: 17,
    email: "carlos@gmail.com",
    licenia: "1415kl"
}
const usuario02 = {
    nombre: "Juan Perez",
    edad: 60,
    email: "juanp-gmail.com",
    licenia: "5565mf"
}
const usuario03 = {
    nombre: "Dayana",
    edad: 19,
    email: "dayana@gmail.com",
    licenia: ""
}



console.log(validarUsuario(usuario01))
console.log(validarUsuario(usuario02))
console.log(validarUsuario(usuario03))

