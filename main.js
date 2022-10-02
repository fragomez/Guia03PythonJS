addEventListener("DOMContentLoaded", (e) => {
    let calcular = document.querySelector("#guia3");
    calcular.addEventListener("submit", (e) => {
        e.preventDefault();
        let cantVendedores = parseInt(prompt("Ingrese la cantidad de vendedores: "));
        let sueldoBase = parseInt(prompt("Ingrese el sueldo base: "));
        const comision = 0.10;
        let contador = 1;
        while(contador <= cantVendedores){
            let nombre = prompt("Ingrese el nombre del vendedor");
            let venta1 = parseInt(prompt("Ingrese el valor de la primera venta"));
            let venta2 = parseInt(prompt("Ingrese el valor de la segunda venta"));
            let venta3 = parseInt(prompt("Ingrese el valor de la tercera venta"));
            let comVenta1 = venta1 * comision;
            let comVenta2 = venta2 * comision;
            let comVenta3 = venta3 * comision;
            let sueldoTotal = sueldoBase + comVenta1 + comVenta2 + comVenta3;
            let comTotal = comVenta1 + comVenta2 + comVenta3;
            let ventasTotal = venta1 + venta2 + venta3 + comTotal;
            alert(`El sueldo total de ${nombre} es: ${sueldoTotal}`);
            alert(`El valor total de comisiones de ${nombre} es: ${comTotal}`);
            alert(`El valor total de las ventas y las comisiones de ${nombre} es: ${ventasTotal}`);
            contador++;
        }
    })
})

function limpiar() {
    document.querySelector("#guia3").reset();
    document.querySelector("#resultado").innerHTML = "";
}

addEventListener('reset', limpiar);