

// 13. Crea un Bucle que imprima una cuenta regresiva del 30 al 0 de 5 en 5.
const valorInicial = 40

for(let i = valorInicial; i >= 5; i = i-5) {
    console.log(i)
}

// otra manera con While.
let i = valorInicial
while (i >= 5) {
    console.log(i)
    i = i - 5
}