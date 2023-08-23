function calcularPrestamo(monto, cuotas) {
    monto = parseFloat(monto);
    cuotas = parseInt(cuotas);

    let prestamoFinal = 0;

    if (cuotas === 1 && monto > 0) {
        return monto;
    } else if (cuotas === 3 && monto > 0) {
        prestamoFinal = monto + monto * 0.1;
        return prestamoFinal;
    } else if (cuotas === 6 && monto > 0) {
        prestamoFinal = monto + monto * 0.2;
        return prestamoFinal;
    } else if (cuotas === 12 && monto > 0) {
        prestamoFinal = monto + monto * 0.4;
        return prestamoFinal;
    }
}

console.log("Bienvenidos/as a préstamos del Banco BCI");

let monto = "";

while (monto !== "FIN") {
    monto = prompt("Ingrese el monto que desea solicitar o FIN");

    if (monto !== "FIN") {
        let cuotas = prompt("Ingrese la cantidad de cuotas: 1, 3, 6 o 12");

        let resultadoPrestamo = calcularPrestamo(monto, cuotas);
        let valorCuota = Math.floor(resultadoPrestamo / cuotas);

    console.log("Pediste:", monto);
    console.log("Cuotas:", cuotas);
    console.log("Monto Total a devolver:", resultadoPrestamo);
    console.log("Valor Cuota:", valorCuota);
    } else {
    console.log("¡Muchas gracias por utilizar nuestros servicios!");
    }
}