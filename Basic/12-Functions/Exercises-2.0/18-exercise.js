
/* 18. Biblioteca: préstamo de libros
Función: prestarLibro(libros, usuarios, solicitud)
• libros: { id, titulo, categoria, copias }. usuarios: { id, nombre, edad }.

• Validaciones: 
existen usuario/libro; 
copias > 0; 
si categoria === "+18" entonces edad ≥ 18.
• Salida: { ok, librosActualizados, mensaje }.

Ejemplo
prestarLibro( [{ id: 1, titulo: "Novela", categoria: "general", copias: 2 }], [{ id: 7,
nombre: "Sofía", edad: 15 }], { usuarioId: 7, libroId: 1 } )
Salida esperada
{ ok: true, librosActualizados: [{ id:1, copias:1 }], mensaje: "Préstamo exitoso" } 
*/

function prestarLibro(libros, usuarios, solicitud){
    let resultado 

    const usuarioEncontrado = usuarios.find(usuario => usuario.idUsuario === solicitud.idUsuario) 
    if (!usuarioEncontrado){
        return "No se encontro este usuario!"
    } 

    const libroEncontrado = libros.find(libro => libro.idLibro === solicitud.idLibro)
    if (!libroEncontrado){
        return "No se encontro este libro!"
    }

    if(libroEncontrado.copias <= 0){
        return "El libro no disponible"
    }

    if(libroEncontrado.categoria === "+18" && usuarioEncontrado.edad < 18){
        return "Tienes que ser mayor a 18 anios"
    }

    return {
        ok: true, 
        mensaje: "Prestamo exitoso"
    }

console.log(libroEncontrado.categoria)

}

const libros = [
    {
        idLibro: 818,
        titulo: "Principito",
        categoria: "+18",
        copias: 1
    },
    {
        idLibro: 202,
        titulo: "Harry Potter",
        categoria: "Eeryone",
        copias: 1
    }
]

const usuarios = [
    {
        idUsuario: 11,
        nombre: "Leslie",
        edad: 22
    },
    {
        iusuario: 24,
        nombre: "Pedro",
        edad: 9
    },

]

const solicitud = {
    idUsuario: 11,
    idLibro: 818
}

console.log(prestarLibro(libros, usuarios, solicitud))
console.log(prestarLibro(libros, usuarios, solicitud))