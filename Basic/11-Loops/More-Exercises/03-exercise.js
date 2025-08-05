

/* 3. Buscar Cliente VIP
CONTEXTO: Tienes un arreglo de nombres de clientes.
EJERCICIO: Verifica si el cliente “Diego” está en la lista y muestra un mensaje -
especial si lo está. */
const nombresClientes = ["Luca", "Diego", "Katy", "Suzi", "Ronaldo", "Dany"]


for (let i = 0; i < nombresClientes.length; i++) {
    if (nombresClientes[i] === "Diego") {
        console.log(`${nombresClientes[i]} si se encuentra en la lista de clientes VIP`)
    }
}


// Con Metodo .find()
const existeDiego = nombresClientes.find(nombresClientes => nombresClientes === "Diego")

console.log(existeDiego)



// Con Metodo .filter()
const ubicarDIego = nombresClientes.filter(nombresClientes => nombresClientes === "Diego")

console.log(ubicarDIego)