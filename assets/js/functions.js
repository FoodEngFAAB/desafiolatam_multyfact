
let dataInicial=(usuario)=> {

    do {
        seleccion = parseFloat(prompt(`${usuario}, ingresa un número entre 1 y 20 (inclusive).`))

        if (seleccion <= 0 || seleccion > 20 || isNaN(seleccion)) {
            alert(`Número fuera de rango.`)
        }

    } while (seleccion <= 0 || seleccion > 20 || isNaN(seleccion))

    return seleccion
}


let calcMultiplicacion = (num) => {
     console.log(`Los siguientes son los resultados de la multiplicación del ${num}:`)   
    for (i = 1; i <= num; i++) {
        document.write(`<br>${num} * ${i} = ${num * i}`)
        console.log(`\n${num} * ${i} = ${num * i}`)
    }
}

let calcFactorial = (num) => {
    console.log(`\n\nLos siguientes son los resultados de los factoriales hasta el ${num}:`) 
    for (var i = 1; i <= num; i++) {
        let acum = 1
        for (let j = 1; j <= i; j++) {
            acum = acum * j
        }
        document.write(`<br>El factorial de ${i} es ${acum}`)
        console.log(`\nEl factorial de ${i} es ${acum}`)
    }
}
