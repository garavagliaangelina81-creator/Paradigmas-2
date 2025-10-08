"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// punto de entrada(main)
const tareas_1 = require("./tareas");
const busquedas_1 = require("./busquedas");
const utils_1 = require("./utils");
const prompt = (0, utils_1.obtenerPrompt)();
function main() {
    console.log("\nHola Angelina ❤️");
    let salir = false;
    while (!salir) {
        console.log("\n===== GESTOR DE TAREAS =====");
        console.log("[1] Crear tarea");
        console.log("[2] Mostrar mis tareas");
        console.log("[3] Buscar tareas");
        console.log("[0] Salir");
        const opcion = prompt("Seleccione una opción: ");
        switch (opcion) {
            case '1':
                (0, tareas_1.crearTarea)(); //crea la tarea
                break;
            case '2':
                (0, tareas_1.mostrarTareas)(); //uestra las tareas
                break;
            case '3':
                (0, busquedas_1.buscarTareas)(); //busca tareas
                break;
            case '0':
                console.log("👋 ¡Hasta luego!");
                salir = true;
                break;
            default:
                console.log("⚠️ Opción inválida.");
                break;
        }
    }
}
main();
