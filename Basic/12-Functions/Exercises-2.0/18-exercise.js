
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
    if (!usuarioEncontrado)
        return "No se encontro este usuario!"

    const libroEncontrado = libros.find(libro => libro.idLibro === solicitud.idLibro)
    if (!libroEncontrado)
        return "No se encontro este libro!"

    console.log(libroEncontrado)
}

const libros = [
    {
        idLibro: 818,
        titulo: "Principito",
        categoria: "Novela",
        copias: 2
    }
]

const usuarios = [
    {
        idUsuario: 11,
        nombre: "Leslie",
        edad: 22
    }
]

const solicitud = {
    idUsuario: 11,
    idLibro: 818
}

console.log(prestarLibro(libros, usuarios, solicitud))