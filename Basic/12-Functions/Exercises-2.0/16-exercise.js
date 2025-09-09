

/* 16. Filtrar catálogo de películas
Función: filtrarPeliculas(catalogo, filtros)
• catalogo: { titulo, genero, plataforma, rating }.
• filtros: { genero?, plataforma?, minRating? } con minRating entre 0 y 10.
• Salida: arreglo filtrado ordenado por rating descendente.
Ejemplo
filtrarPeliculas( [ { titulo: "X", genero: "Acción", plataforma: "Netflix", rating: 7.5 },
{ titulo: "Y", genero: "Drama", plataforma: "Prime", rating: 8.2 } ], { genero: "Drama",
minRating: 8 } )
Salida esperada
[ { titulo: "Y", genero: "Drama", plataforma: "Prime", rating: 8.2 } ] */

function filtrarPeliculas(catalogo, filtros){
    let resultado = []

    for(let i = 0; i < catalogo.length; i++){
        if(                                             // Se debe mantener este unico if ya que si usamos if separados, incluimos películas que solo cumplen un solo if, lo cual es incorrecto.
            (!filtros.genero || catalogo[i].genero === filtros.genero) &&
            (!filtros.plataforma || catalogo[i].plataforma === filtros.plataforma) &&
            (!filtros.minRating || catalogo[i].rating >= filtros.minRating)
            ){
                resultado.push(catalogo[i])
            }
    }

return resultado

}


// filtros: nos ayuda a identificar si existe esa pelicula dentro del catalogo
const filtro1 = {
    genero: "Terror",
    plataforma: "Max",
    minRating: 7
}
const filtro2 = {
    genero: "Accion",
    plataforma: "DisneyPlus",
    minRating: 8
}
const filtro3 = {
    genero: "Drama",
    plataforma: "Prime",
    minRating: 9
}


// Catalogo titulos de peliculas que contiene el castalogo
const catalogo = [
    {
    titulo: "EL Conjuro 4",
    genero: "Terror",
    plataforma: "Max",
    rating: 7
    },
    {
    titulo: "Oppenheimer",
    genero: "Drama",
    plataforma: "Prime",
    rating: 9
    },
    {
    titulo: "Superman",
    genero: "Accion",
    plataforma: "Max",
    rating: 8
    }
]

console.log(filtrarPeliculas(catalogo, filtro1))
console.log(filtrarPeliculas(catalogo, filtro2))
console.log(filtrarPeliculas(catalogo, filtro3))