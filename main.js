// Programa Conversion Temperaturas //
function convertir() {
    var tempC = parseFloat(document.getElementById("temp").value);

    if (!isNaN(tempC)) {
        var tempF = (tempC * 9/5) + 32;
        var tempK = tempC + 273.15;
        console.log("En grados Fahrenheit es: " + tempF);
        console.log("En grados Kelvin es: " + tempK);
    } else {
        console.log("Error: No letras ni caracteres, ingresa un número válido.");
    }
}

document.querySelector("button").addEventListener("click", convertir);