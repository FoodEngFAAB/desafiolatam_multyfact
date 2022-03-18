//Cálculo de operaciones para Colegio

//Datos iniciales del problema
var nombre = ""
var num = 0
var seleccion = 0
var i = 0

//Mensaje de bienvenida
alert(`¡¡Hola!! \nMe contrataron para hacer algunos cálculos.\nComencemos.`)
nombre = prompt("¿Cuál es tu nombre?: ")

//Llama a función para requerir datos
dataInicial(nombre)
//Llama a la función de multiplicación
calcMultiplicacion(seleccion)
//Llama a la función de cálculo de números factoriales
calcFactorial(seleccion)
