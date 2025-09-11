

/* 19. Pedido de pizza
Función: calcularPedidoPizza(pedido)
• pedido: { tamaño: "chica"|"mediana"|"grande", ingredientes[], orillaRellena:boolean }.
• Precios: base 80/110/140; ingrediente extra $12; orillaRellena +$20.
• Promoción: si incluye "peperoni" y hay ≥ 3 ingredientes, -$10.
• Validar tamaño válido
• Salida: { detalle, total }.
Ejemplo
calcularPedidoPizza({ tamaño: "mediana", ingredientes: ["peperoni", "piña", "jamón"],
orillaRellena: true })
Salida esperada
{ detalle: { base:110, extras:36, promo:-10 }, total: 156 } 
*/

function calcularPedidoPizza(pedido){
    const tamaños = ["chica", "mediana", "grande"]
    let precioTotal = 0

    //Validacion del tamaño de la pizza!
    if(!tamaños.includes(pedido.tamaño)){
        return "No esta disponible ese tamaño!"
    }
    
    //validacion de la promocion
    let tienePromo = false
    if(pedido.ingredientes.includes("peperoni") && pedido.ingredientes.length >= 3){  //Entrar al objeto es por .
        precioTotal -= 10
        tienePromo = true
    }

    let precioBase = 0
    if(pedido.tamaño === "chica"){
        precioBase = 80
    } else if(pedido.tamaño === "mediana"){
        precioBase = 110
    } else {
        precioBase = 140
    }
    //Respuesta valida porque es un pedido correcto!
    return {
        detalle: {
            base: precioBase,
            extras: pedido.orillaRellena ? 20 : 0,
            promo: tienePromo ? -10 : 0
        },
        total: precioTotal + precioBase
    }

}



const pedido = {
    tamaño: "chica",
    ingredientes: ["peperoni", "hawaiana", "mexicana", "champiñones"],
    orillaRellena: true
}

const precios = {
    base: 80,
    ingredienteExtra: 12,
    orillaRellena: 20
}


console.log(calcularPedidoPizza(pedido))