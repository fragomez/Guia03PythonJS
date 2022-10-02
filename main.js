addEventListener("DOMContentLoaded", (e) => {
    let calcular = document.querySelector("#guia3");
    calcular.addEventListener("submit", (e) => {
        e.preventDefault();
        let contador = 1, aprobados = 0, reprobados = 0;
        while(contador <= 2){
            let nota1 = parseInt(prompt(`Ingrese la primera nota del estudiante ${contador}`));
            let nota2 = parseInt(prompt(`Ingrese la segunda nota del estudiante ${contador}`));
            let nota3 = parseInt(prompt(`Ingrese la tercera nota del estudiante ${contador}`));
            let nota4 = parseInt(prompt(`Ingrese la cuarta nota del estudiante ${contador}`));
            let nota5 = parseInt(prompt(`Ingrese la quinta nota del estudiante ${contador}`));
            let promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
            if(promedio <3){
                reprobados++;
            } else {
                aprobados++;
            }
            contador++;
        }
        document.querySelector("#resultado").innerHTML = `Cantidad de alumnos reprobados: ${reprobados}`;
        document.querySelector("#aprobados").innerHTML = `Cantidad de alumnos aprobados: ${aprobados}`;
    })
})

function limpiar() {
    document.querySelector("#guia3").reset();
    document.querySelector("#resultado").innerHTML = "";
    document.querySelector("#aprobados").innerHTML = "";
}

addEventListener('reset', limpiar);