

/* 1. Registro de Clientes en Cafetería
Función: registrarCliente(baseClientes, nuevoCliente)
Contexto:
En una cafetería se debe registrar a cada nuevo cliente, asegurándose de que su correo 
no esté duplicado.

Parámetros:
- baseClientes: arreglo de objetos { nombre, email }
- nuevoCliente: objeto { nombre, email }

Reglas de validación:
- El nombre no puede estar vacío
- El email debe contener "@"
- No debe existir otro cliente con el mismo email (case-insensitive)

Salida esperada:
Si todo está bien: { ok: true, mensaje: "...", clientes: [...] }
Si hay errores: { ok: false, mensaje: "Error", clientes: [...] }

Ejemplo:
registrarCliente(
[ { nombre: "Ana", email: "ana@mail.com" } ],
{ nombre: "Luis", email: "luis@mail.com" }
);

Salida esperada:
{
ok: true,
mensaje: "Cliente registrado correctamente",
clientes: [
    { nombre: "Ana", email: "ana@mail.com" },
    { nombre: "Luis", email: "luis@mail.com" }
]
}
 */

//server
function registrarCliente(baseClientes, nuevoCliente){    
    if(!nuevoCliente.nombre){
        return {
            ok: false,
            mensaje: "El nombre tiene que ser valido"
        }
    }

    if(!nuevoCliente.email.includes("@")){
        return {
            ok: false,
            mensaje: "El email no es valido"
        }
    }

    for (let i = 0; i < baseClientes.length; i++) {
        if(baseClientes[i].email === nuevoCliente.email){
            return {
                ok: false,
                mensaje:  "este correo ya esta en uso"
            }
        }
    }

    return { 
        ok: true,
        mensaje: "Cliente registrado exitosamente"
    }
}



//client
const baseClientes = [
    {
        nombre: "diego herrera",
        email: "dan@gmail.com"
    },
    {
        nombre: "jesus capetillo",
        email: "jess@gmail.com"
    },
    {
        nombre: "brianda herrera",
        email: "brianda@gmail.com"
    }
]

const nuevoClienteFail = {
    nombre: "diego valdez",
    email: "otro@gmail.com"
}

const nuevoClienteCorrect = {
    nombre: "maria euge",
    email: "mar@gmail.com"
}


console.log(registrarCliente(baseClientes, nuevoClienteFail))