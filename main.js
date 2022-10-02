addEventListener("DOMContentLoaded", (e) => {
    let calcular = document.querySelector("#guia3");
    calcular.addEventListener("submit", (e) => {
        e.preventDefault();
        let contador = 1, notaPromedio = 0;
        while(contador <= 5){
            let nombre = prompt(`Ingrese el nombre del estudiante ${contador}`);
            let apellido = prompt(`Ingrese el apellido del estudiante ${contador}`);
            let edad = parseInt(prompt(`Ingrese la edad del estudiante ${contador}`));
            let nota = parseInt(prompt(`Ingrese la nota del estudiante ${contador}`));
            notaPromedio += nota;
            alert(`El estudiante ${nombre} ${apellido} de ${edad} años tiene una nota de ${nota}`);
            contador++; 
        }
        let promedio = notaPromedio / 5;
        document.querySelector("#resultado").innerHTML = `La nota promedio es de: ${promedio}`;
    })
})

function limpiar() {
    document.querySelector("#guia3").reset();
    document.querySelector("#resultado").innerHTML = "";
}

addEventListener('reset', limpiar);