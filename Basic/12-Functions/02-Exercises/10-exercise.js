

/* 10. Disponibilidad de Habitaciones
Función: verificarDisponibilidad(habitaciones, fecha)

Contexto:
Un hotel desea saber qué habitaciones están disponibles un día específico.

Parámetros:
- habitaciones: arreglo { numero, disponibleDesde, disponibleHasta }
- fecha: número (ej., día 15)

Reglas de validación:
- fecha debe estar entre disponibleDesde y disponibleHasta (inclusive)

Salida esperada:
Arreglo con habitaciones disponibles ese día.

Ejemplo:
verificarDisponibilidad(
[
{ numero: 101, disponibleDesde: 10, disponibleHasta: 20 },
{ numero: 102, disponibleDesde: 16, disponibleHasta: 30 }
],
15
);

Salida:
[
{ numero: 101, disponibleDesde: 10, disponibleHasta: 20 }
] */

function verificarDisponibilidad(habitaciones, fecha){
    let disponibles = []

    for(let i = 0; i < habitaciones.length; i++){
        if(habitaciones[i].disponibleDesde <= fecha && fecha <= habitaciones[i].disponibleHasta){
        disponibles.push(habitaciones[i])
    }

    }

    return disponibles
}

const habitaciones = [
    {
        numero: 101,
        disponibleDesde: 10,
        disponibleHasta: 20
    },
    {
        numero: 102,
        disponibleDesde: 16,
        disponibleHasta: 30
    },
    {
        numero: 103,
        disponibleDesde: 12,
        disponibleHasta: 25
    },
    {
        numero: 104,
        disponibleDesde: 18,
        disponibleHasta: 30
    }
]

const fecha = 15


console.log(verificarDisponibilidad(habitaciones,fecha))
