

// 10. Usa un bucle para generar los primeros 10 numeros de la secuencia de Fibonacci.
let numFib = [0,1];

for (let i = 2; i < 10; i++) {
    numFib[i] = numFib[i-1] + numFib[i-2];
}

console.log(numFib)