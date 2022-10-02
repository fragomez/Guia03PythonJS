function calc(cantidadGallinas) {
    let contador = 1, calidad = 0;
    const precio = 500;
    while (cantidadGallinas >= contador) {
        let peso = parseInt(prompt(`Ingrese el peso de la gallina ${contador} (en kilos)`));
        let altura = parseInt(prompt(`Ingrese la altura de la gallina ${contador} (en cm)` ));
        let huevos = parseInt(prompt(`Ingrese la cantidad de huevos de la gallina ${contador}`));
        calidad += (peso * altura) / huevos;
        contador++;
    }
    let promedio = calidad / cantidadGallinas;
    let kilos = parseInt(prompt("Ingrese la cantidad de kilos deseados"));
    let resultado = (kilos * promedio) * precio;
    document.querySelector("#resultado").innerHTML = kilos + " kilos: $" + resultado  + " pesos";
}

addEventListener("DOMContentLoaded", (e) => {
    let calcular = document.querySelector("#guia3");
    calcular.addEventListener("submit", (e) => {
        e.preventDefault();
        let cantidadGallinas = document.querySelector("#cantidadGallinas").value;
        calc(cantidadGallinas);
    })
})

function limpiar() {
    document.querySelector("#guia2").reset();
    document.querySelector("#resultado").innerHTML = "";
    document.querySelector("#subtotal").innerHTML = "";
    document.querySelector("#iva").innerHTML = "";
}

addEventListener('reset', limpiar);