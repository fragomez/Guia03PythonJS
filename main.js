addEventListener("DOMContentLoaded", (e) => {
    let calcular = document.querySelector("#guia3");
    calcular.addEventListener("submit", (e) => {
        e.preventDefault();
        let vehiculos = parseInt(prompt("Ingrese la cantidad de vehículos"));
        let contador = 1,amarillo = 0,rosa = 0,roja = 0,verde = 0,azul = 0;
        while(vehiculos>=con){
            let numeroPlaca=parseInt(prompt("Ingrese el numero de la placa"));
            if (numeroPlaca == 1 || numeroPlaca==2){
                amarillo++;
            } else if (numeroPlaca == 3 || numeroPlaca==4){
                rosa++;
            } else if (numeroPlaca == 5 || numeroPlaca==6){
                roja++;
            } else if( numeroPlaca ==7 || numeroPlaca ==8){
                verde++;
            } else if (numeroPlaca == 9 || numeroPlaca==0){
                azul++;
            } else {
                continue;
            }
            contador++;
        }
        document.querySelector("#amarillo").innerHTML = `La cantidad de vehiculos con color amarillo son: ${amarillo}`;
        document.querySelector("#rosa").innerHTML = `La cantidad de vehiculos con color rosa son: ${rosa}`;
        document.querySelector("#roja").innerHTML = `La cantidad de vehiculos con color roja son: ${roja}`;
        document.querySelector("#verde").innerHTML = `La cantidad de vehiculos con color verde son: ${verde}`;
        document.querySelector("#azul").innerHTML = `La cantidad de vehiculos con color azul son: ${azul}`;
    })
})

function limpiar() {
    document.querySelector("#guia3").reset();
    document.querySelector("#amarillo").innerHTML = "";
    document.querySelector("#rosa").innerHTML = "";
    document.querySelector("#roja").innerHTML = "";
    document.querySelector("#verde").innerHTML = "";
    document.querySelector("#azul").innerHTML = "";
}

addEventListener('reset', limpiar);