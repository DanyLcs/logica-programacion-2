let esNumero = true;
let grados;

do {
    grados = Number(prompt("Ingresa la temperatura en grados Celsius"));
    if (!isNaN(grados)) {
        console.log("Grados Fahrenheit " + gradosFahrenheit(grados));package
        console.log("Grados Kelvin " + gradosKelvin(grados));
        esNumero = false;
    } else {
        alert("Error, ingresa un número");
    }
} while (esNumero);

function gradosFahrenheit(gradosCelsius) {
    return (gradosCelsius * 1.8) + 32;
}

function gradosKelvin(gradosCelsius) {
    return gradosCelsius + 273.15;
}