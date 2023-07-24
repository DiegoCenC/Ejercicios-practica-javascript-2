//Encontrar el numero mas grande
let numeros = [];

function agregarNumero() {
    const numeroInput = document.getElementById("numberInput").value;
    if (numeroInput === "") {
        alert("Ingresa un número válido.");
        return;
    }

    const numero = parseInt(numeroInput);
    numeros.push(numero);
    document.getElementById("numberInput").value = "";
}

function encontrarNumeroMasGrande() {
    if (numeros.length === 0) {
        alert("No has ingresado ningún número.");
        return;
    }

    const maximo = Math.max(...numeros);
    const resultado = document.getElementById("resultado");
    resultado.innerText = "El número más grande es: " + maximo;
}

//Si es palindromo
function validarPalindromo() {
    const palabra = document.getElementById("palindromeInput").value.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    if (palabra === "") {
        alert("Por favor, ingresa una palabra o frase válida.");
        return;
    }

    const esPalindromo = palabra === palabra.split("").reverse().join("");
    const resultado = document.getElementById("resultado2");
    resultado.innerText = esPalindromo ? "Es un palíndromo." : "No es un palíndromo.";
}

//Calcula la suma de los digitos ingresados
function calcularSumaDigitos() {
    const numero = document.getElementById("numberInput2").value;
    if (numero === "") {
        alert("Por favor, ingresa un número válido.");
        return;
    }

    const digitos = Array.from(numero.toString()).map(Number);
    const suma = digitos.reduce((acumulador, valor) => acumulador + valor, 0);

    const resultado = document.getElementById("resultado3");
    resultado.innerText = "La suma de los dígitos es: " + suma;
}

//Numero aleatorio
function generarAleatorio() {
    const min = parseInt(document.getElementById("minInput").value);
    const max = parseInt(document.getElementById("maxInput").value);

    if (isNaN(min) || isNaN(max)) {
        alert("Por favor, ingresa valores válidos para el rango.");
        return;
    }

    if (min >= max) {
        alert("El valor mínimo debe ser menor que el valor máximo.");
        return;
    }

    const aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    const resultado = document.getElementById("resultado4");
    resultado.innerText = "Número aleatorio dentro del rango: " + aleatorio;
}

//Fibonnacci
function generarFibonacci() {
    const numero = parseInt(document.getElementById("numberInput3").value);

    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, ingresa un número válido mayor a 0.");
        return;
    }

    let fibonacciSecuencia = [0, 1];

    while (fibonacciSecuencia[fibonacciSecuencia.length - 1] + fibonacciSecuencia[fibonacciSecuencia.length - 2] <= numero) {
        fibonacciSecuencia.push(fibonacciSecuencia[fibonacciSecuencia.length - 1] + fibonacciSecuencia[fibonacciSecuencia.length - 2]);
    }

    const resultado = document.getElementById("resultado5");
    resultado.innerText = "Secuencia de Fibonacci hasta " + numero + ": " + fibonacciSecuencia.join(", ");
}
