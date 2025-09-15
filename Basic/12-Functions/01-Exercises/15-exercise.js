

/* 15. Promedio con pesos de materias
Función: promedioConPesos(materias)
• materias: { nombre, calificacion (0–10), porcentaje }.
• Validar 0 ≤ calificacion ≤ 10 y suma de porcentajes = 100.
• Salida: { promedio, estatus }, donde estatus = "aprobado" si promedio ≥ 6.
Ejemplo
promedioConPesos([ { nombre: "Mate", calificacion: 8, porcentaje: 50 }, { nombre: "Hist",
calificacion: 6, porcentaje: 50 } ])
Salida esperada
{ promedio: 7, estatus: "aprobado" } */

function promedioConPesos(materias){
    const resultado = {
        error: "",
        estatus: "",
        promedio: 0
    }

    if(materias.nombre === ""){
        resultado.error = "El campo no debe estar vacio"
    }
    if(materias.calificacion >= 6){
        resultado.estatus = "aprobado"
    } else { 
        materias.calificacion <= 5
        resultado.error = "reprobado"
    }
    if(materias.porcentaje !== 100){
        resultado.error = "El porcentaje debe ser 100"
    }

    return resultado
}

const alumno1 = {
    nombre: "Daniela",
    calificacion: 9,
    porcentaje: 90
}

console.log(promedioConPesos(alumno1))