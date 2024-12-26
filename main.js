/*console.log("Bienvenido al Simulador de Rutinas de Gym");
console.log("Selecciona tu objetivo: 'fuerza', 'hipertrofia' o 'resistencia'");*/

/*let objetivo = ""; // Variable para almacenar el objetivo
let intentos = 0;  // Contador de intentos

// Bucle que seguirá ejecutándose hasta que el usuario introduzca un objetivo válido
    While (!(objetivo== "fuerza") && !(objetivo== "hipertrofia") && !(objetivo== "resistencia")); {
    objetivo = prompt("¿Cuál es tu objetivo? (fuerza/hipertrofia/resistencia)").toLowerCase();
    intentos++; // Incrementar el contador de intentos

    if (objetivo === "fuerza") {
        console.log(" Objetivo: Fuerza");
        console.log("- Series: 4-6");
        console.log("- Repeticiones: 3-6");
        console.log("- Peso: 80-90% de tu máximo.");
    } else if (objetivo === "hipertrofia") {
        console.log(" Objetivo: Hipertrofia");
        console.log("- Series: 3-5");
        console.log("- Repeticiones: 8-12");
        console.log("- Peso: 65-75% de tu máximo.");
    } else if (objetivo === "resistencia") {
        console.log(" Objetivo: Resistencia");
        console.log("- Series: 2-4");
        console.log("- Repeticiones: 12-20");
        console.log("- Peso: 40-50% de tu máximo.");
    } else {
        console.log(" Opción no válida. Por favor, elige entre 'fuerza', 'hipertrofia' o 'resistencia'.");
    }
}

// Mostrar el número de intentos al final
console.log(`¡Has seleccionado tu objetivo en ${intentos} intento(s)!`);*/




//PRE-ENTREGA2


function registrarEjercicio() {
    // Pedimos al usuario el nombre del ejercicio
    let ejercicio = prompt("Ingresa el nombre del ejercicio que realizaste:");
    if (!ejercicio) {
        alert("No ingresaste ningún ejercicio.");
        return null;
    }

    // Pedimos al usuario la cantidad de calorías quemadas
    let calorias = parseFloat(prompt(`¿Cuántas calorías quemaste en "${ejercicio}"?`));
    if (isNaN(calorias) || calorias <= 0) {
        alert("El valor ingresado para calorías no es válido.");
        return null; // Salimos si las calorías no son válidas
    }

    // Retornamos un objeto con los datos del ejercicio
    return { ejercicio, calorias };
}

// Función 2: Calcular el total de calorías
function calcularTotal(ejercicios) {
    return ejercicios.reduce((total, ejercicio) => total + ejercicio.calorias, 0);
}

// Función principal: Proceso completo
function sistemaRegistroGimnasio() {
    let ejercicios = []; // Lista para almacenar los ejercicios registrados

    // Bucle para registrar ejercicios
    while (true) {
        let registro = registrarEjercicio();
        if (registro) {
            ejercicios.push(registro); // Agregamos el ejercicio registrado a la lista
            alert(`¡Has registrado "${registro.ejercicio}" con ${registro.calorias} calorías quemadas!`);
        }


        let continuar = confirm("¿Quieres registrar otro ejercicio?");
        if (!continuar) break;
    }

    // Calculamos el total de calorías quemadas
    let totalCalorias = calcularTotal(ejercicios);

    // Mostramos el resumen final
    mostrarResumen(ejercicios, totalCalorias);
}


sistemaRegistroGimnasio();
