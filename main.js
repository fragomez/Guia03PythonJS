addEventListener("DOMContentLoaded", (e) => {
    let calcular = document.querySelector("#guia3");
    calcular.addEventListener("submit", (e) => {
        e.preventDefault();
        let damas = 1, caballeros = 7;
        while(damas + caballeros < 42){
            damas++;
            caballeros++;
        }
        document.querySelector("#resultado").innerHTML = `La cantidad de damas es: ${damas}`;
        document.querySelector("#caballeros").innerHTML = `La cantidad de caballeros es: ${caballeros}`
    })
})

function limpiar() {
    document.querySelector("#guia3").reset();
    document.querySelector("#resultado").innerHTML = "";
}

addEventListener('reset', limpiar);