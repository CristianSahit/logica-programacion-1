// Solicitar al usuario tres números
let num1 = parseInt(prompt("Ingresa el primer número:"));
let num2 = parseInt(prompt("Ingresa el segundo número:"));
let num3 = parseInt(prompt("Ingresa el tercer número:"));

// Analizar los números para encontrar el mayor, el del centro y el menor
let mayor, centro, menor;

// Verificar si los tres números son iguales
if (num1 === num2 && num2 === num3) {
    console.log("Los números son iguales.");
} else {
    // Identificar el número mayor, el del centro y el menor
    if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
        if (num2 >= num3) {
            centro = num2;
            menor = num3;
        } else {
            centro = num3;
            menor = num2;
        }
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
        if (num1 >= num3) {
            centro = num1;
            menor = num3;
        } else {
            centro = num3;
            menor = num1;
        }
    } else {
        mayor = num3;
        if (num1 >= num2) {
            centro = num1;
            menor = num2;
        } else {
            centro = num2;
            menor = num1;
        }
    }

    // Imprimir los números ordenados de mayor a menor y de menor a mayor
    console.log(`De mayor a menor: ${mayor}, ${centro}, ${menor}`);
    console.log(`De menor a mayor: ${menor}, ${centro}, ${mayor}`);
}