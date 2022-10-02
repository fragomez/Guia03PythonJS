let suma = (numero1, numero2) => numero1 + numero2;
let resta = (numero1, numero2) => numero1 - numero2;
let multiplicacion = (numero1, numero2) => numero1 * numero2;
let division = (numero1, numero2) => numero1 / numero2;


addEventListener("DOMContentLoaded", (e) => {
    let calcular = document.querySelector("#guia3");
    calcular.addEventListener("submit", (e) => {
        e.preventDefault();
        let contador = 1;
        while(contador <= 10){
            numero1 = parseInt(prompt("Ingrese el primer número"));
            numero2 = parseInt(prompt("Ingrese el segundo número"));
            let sumar = suma(numero1, numero2);
            let restar = resta(numero1, numero2);
            let multiplicar = multiplicacion(numero1, numero2);
            let dividir = division(numero1, numero2);
            alert("La suma de ambos números es: " + sumar);
            alert("La resta de ambos números es: " + restar);
            alert("La multiplicación de ambos números es: " + multiplicar);
            alert("La división de ambos números es: " + dividir);
            contador++; 
        }
    })
})

function limpiar() {
    document.querySelector("#guia3").reset();
    document.querySelector("#resultado").innerHTML = "";
}

addEventListener('reset', limpiar);