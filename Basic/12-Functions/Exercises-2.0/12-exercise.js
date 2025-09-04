

/*  12. Validar registro de usuario.
Función: validarRegistroUsuario(datos)
• datos: { nombre, email, password, edad, intereses[] }.
• Validaciones: nombre no vacío; email con formato simple x@y.z; password ≥ 8 
y contiene número; edad ≥ 18; intereses con ≥ 1 elemento.
• Salida: { ok: boolean, errores: string[] }.

Ejemplo
validarRegistroUsuario({ nombre: "Ana", email: "ana@mail.com", password: "abc12345", edad:
22, intereses: ["tech"] })
Salida esperada
{ ok: true, errores: [] } */

function validarRegistroUsuario(datos){
    const resultado = {
        ok: true,
        errores: []
    }

    if(datos.nombre === ""){
        resultado.errores.push("EL campo nombre no debe estar vacio")
        resultado.ok = false;
    }
    if(datos.email === "x@y.z"){
        resultado.errores.push("El email no tiene un formato valido")
        resultado.ok = false
    }
    if(datos.password.length < 8){
        resultado.errores.push("La password debe contener al menos 8 caracteres")
        resultado.ok = false
    }
    if(datos.edad < 18){
        resultado.errores.push("La edad debe ser mayor o igual a 18")
        resultado.ok = false
    }
    if(datos.intereses){
        resultado.errores.push("El campo intereses no debe estar vacio")
        resultado.ok = false
    }

    return resultado
}


const usuario = {
    nombre: "Paola",
    email: "paogonzalez@gmail.com",
    password: "99ghdilkZ2",
    edad: 28,
    intereses: ["admin"] 
}

const usuario2 = {
    nombre: "",
    email: "",
    password: "xlmiji",
    edad: 15,
    intereses: ["alumno"]
}


const usuario3 = {
    nombre: "Melissa",
    email: "555555555555j",
    password: "j32u2P-wifa",
    edad: 55,
    intereses: [""]
}


console.log(validarRegistroUsuario(usuario))
console.log(validarRegistroUsuario(usuario2))
console.log(validarRegistroUsuario(usuario3))