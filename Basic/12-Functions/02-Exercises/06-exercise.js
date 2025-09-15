

/* 6. Filtrar Menú por Categoría
Función: filtrarMenu(menu, categoria)

Contexto:
Se necesita mostrar solo los platos de cierta categoría.

Parámetros:
- menu: arreglo { nombre, tipo }
- categoria: string

Salida esperada:
Nuevo arreglo con los platos filtrados.

Ejemplo:
filtrarMenu(
[
{ nombre: "Taco",tipo: "mexicana" },
{ nombre: "Sushi", tipo: "japonesa" }
],
"mexicana"
);

Salida:
[
{ nombre: "Taco",tipo: "mexicana" }
] */

function filtrarMenu(menu, categoria){
    let platillos = []

    for(let i = 0; i < menu.length; i++){
        if(menu[i].tipo === categoria){
            platillos.push(menu[i])
        }
    }

    return platillos
}


const menu = [
    {
        nombre: "Taco",
        tipo: "Mexicana",
    },
    {
        nombre: "Sushi",
        tipo: "Japonesa"
    },
    {
        nombre: "Pizza",
        tipo: "Italiana"
    },
    {
        nombre: "Paella",
        tipo: "Española"
    }
]

const categoria = "Mexicana"
const categoria2 = "Italiana"


console.log(filtrarMenu(menu, categoria))
console.log(filtrarMenu(menu, categoria2))
