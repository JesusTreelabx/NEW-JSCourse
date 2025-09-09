

/* 14. Agenda de citas (sin traslapes)
Función: agendarCita(agenda, nuevaCita)
• agenda: [{ inicio, fin, pacienteId }], con horas/fechas.
• Validaciones: inicio < fin y no hay traslapes con citas existentes.
• Salida: { ok: boolean, agenda: [...], error?: string }.
Ejemplo
agendarCita( [{ inicio: 9, fin: 10, pacienteId: 1 }], { inicio: 10, fin: 11, pacienteId: 2
} )
Salida esperada
{ ok: true, agenda: [ { inicio:9, fin:10 }, { inicio:10, fin:11 } ] } */

function agendarCita(agenda, nuevaCita){
    const resultado = {
        ok: true,
        agenda: agenda,
        error: ""
    }

    if(nuevaCita.inicio < nuevaCita.fin){
        resultado.ok = true
        resultado.agenda = []
        resultado.error = "Su cita a sido agendada correctamente!"
    }
    if(nuevaCita.inicio >= nuevaCita.fin){
        resultado.ok = false
        resultado.agenda = []
        resultado.error = "Tu hora de inicio no puede ser a la hora de fin!"
    }

    for(let i = 0; i < agenda.length; i++){
        if(agenda[i].inicio === nuevaCita.inicio){
            resultado.ok = false
            resultado.agenda = []
            resultado.error = "La hora no puede ser asignada, esta reservada por otra persona!"
        }
    } 

    return resultado

}



const citaPaciente1 = {
    inicio: 8,
    fin: 9,
    pacienteId: 142
}

const citaPaciente2 = {
    inicio: 10,
    fin: 11,
    pacienteId: 143
}

const citaPaciente3 = {
    inicio: 12,
    fin: 13,
    pacienteId: 144
}
const citaPaciente4 = {
    inicio: 14,
    fin: 15,
    pacienteId: 145
}

const agenda = [
    {inicio: 8, fin: 9, pacienteId: 142},
    {inicio: 10, fin: 11, pacienteId: 143}, 
    {inicio: 12, fin: 13, pacienteId: 144},
    {inicio: 14, fin: 15, pacienteId: 145},

]


console.log(agendarCita(agenda, citaPaciente1 ))
console.log(agendarCita(agenda, citaPaciente2 ))
console.log(agendarCita(agenda, citaPaciente3 ))
console.log(agendarCita(agenda, citaPaciente4 ))


