addEventListener("DOMContentLoaded", (e) => {
    let calcular = document.querySelector("#guia3");
    calcular.addEventListener("submit", (e) => {
        e.preventDefault();
        let vehiculos = document.querySelector("#vehiculos").value;
        let contador = 1, autobus = 0, camion = 0, motocicleta = 0, turismo = 0, pasajeros = 0;
        while(vehiculos >= contador){
            let vehiculo = prompt("Ingrese el tipo de vehiculo");
            if (vehiculo == "autobus"){
                autobus++;
            } else if (vehiculo == "camion"){
                camion++;
            } else if (vehiculo == 'motocicleta'){
                motocicleta++;
            } else if (vehiculo = 'turismo'){
                pasajeros += parseInt(prompt("Cantidad de turistas en el vehiculo: "));
                turismo++;
            }
            contador++;
        }
        document.querySelector("#resultado").innerHTML = `La cantidad de autobuses son: ${autobus}`;
        document.querySelector("#camion").innerHTML = `La cantidad de camiones es: ${camion}`;
        document.querySelector("#motocicleta").innerHTML = `La cantidad de motocicletas es: ${motocicleta}`;
        document.querySelector("#turismo").innerHTML = `La cantidad de turismo son ${turismo} y el total de pasajeros es: ${pasajeros}`;
    })
})

function limpiar() {
    document.querySelector("#guia3").reset();
    document.querySelector("#resultado").innerHTML = "";
}

addEventListener('reset', limpiar);