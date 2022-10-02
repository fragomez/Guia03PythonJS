addEventListener("DOMContentLoaded", (e) => {
    let calcular = document.querySelector("#guia3");
    calcular.addEventListener("submit", (e) => {
        e.preventDefault();
        let cantEstudiantes = parseInt(prompt("Ingrese la cantidad de estudiantes: "));
        let credFundamentos = parseInt(prompt("Ingrese los créditos de Fundamentos: "));
        let credBD = parseInt(prompt("Ingrese los créditos de Base de datos:"));
        let credEtica = parseInt(prompt("Ingrese los créditos de Ética"))
        let contador = 1, promedio = 0;
        while(contador <= cantEstudiantes){
            let nombre = prompt("Ingrese el nombre del estudiante");
            let notaFundamentos = parseInt(prompt("Ingrese la nota de Fundamentos")) / credFundamentos;
            let notaBD = parseInt(prompt("Ingrese la nota de Base de Datos")) / credBD;
            let notaEtica = parseInt(prompt("Ingrese la nota de Ética")) / credEtica;
            promedio = (notaFundamentos + notaBD + notaEtica);
            alert(`El promedio ponderado de ${nombre} es: ${promedio.toFixed(2)}`);
            contador++;
            promedio++;
        }
        let promedioEstudiantes = promedio / cantEstudiantes;
        document.querySelector("#resultado").innerHTML = `La nota promedio de los estudiantes es de: ${promedioEstudiantes.toFixed(2)}`;
    })
})

function limpiar() {
    document.querySelector("#guia3").reset();
    document.querySelector("#resultado").innerHTML = "";
}

addEventListener('reset', limpiar);