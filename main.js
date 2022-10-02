addEventListener("DOMContentLoaded", (e) => {
    let calcular = document.querySelector("#guia3");
    calcular.addEventListener("submit", (e) => {
        e.preventDefault();
        let velAvion = 800 * (1/0.001) * (1/3600) //velocidad inicial del avión en m/s
        let velProyectil = 0, acelAvion = 20, acelProyectil = 10, reccorridoAvion = 0, recorridoProyectil = 0, distancia = 0, tiempo = 0;
        while(distancia <= 10000){
            velAvion += 20;
            velProyectil += 10;
            reccorridoAvion = (velAvion * tiempo) + (acelAvion * (tiempo**2)) / 2;
            recorridoProyectil = (velProyectil * tiempo) + (acelProyectil * (tiempo**2)) /2;
            distancia = Math.sqrt(reccorridoAvion**2 + recorridoProyectil**2);
            if(tiempo == 0){
                alert(`segundo ${tiempo}: Distancia entre el avión y el proyectil: ${distancia.toFixed(2)} m/s`);
            } else if (tiempo < 10 && 100 < distancia < 1000){
                alert(`segundo ${tiempo}: Distancia entre el avión y el proyectil: ${distancia.toFixed(2)} m/s`);
            } else if (tiempo < 10 && 1000 < distancia < 10000){
                alert(`segundo ${tiempo}: Distancia entre el avión y el proyectil: ${distancia.toFixed(2)} m/s`);
            } else if (tiempo == 10){
                alert(`segundo ${tiempo}: Distancia entre el avión y el proyectil: ${distancia.toFixed(2)} m/s`);
            } else if (tiempo > 10 && distancia < 10000){
                alert(`segundo ${tiempo}: Distancia entre el avión y el proyectil: ${distancia.toFixed(2)} m/s`);
            } else {
                alert(`segundo ${tiempo}: Distancia entre el avión y el proyectil: ${distancia.toFixed(2)} m/s`);
                document.querySelector("#resultado").innerHTML = `Distancia final: segundo ${tiempo} - ${distancia.toFixed(2)} m/s`
            }
            tiempo +=1;
        }
    })
})

function limpiar() {
    document.querySelector("#guia3").reset();
    document.querySelector("#resultado").innerHTML = "";
    document.querySelector("#aprobados").innerHTML = "";
}

addEventListener('reset', limpiar);