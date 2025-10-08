// punto de entrada(main)
import { crearTarea, mostrarTareas } from './tareas';
import { buscarTareas } from './busquedas';
import { obtenerPrompt } from './utils';

const prompt = obtenerPrompt();

function main(): void {
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
        crearTarea(); //crea la tarea
        break;
      case '2':
        mostrarTareas(); //uestra las tareas
        break;
      case '3':
        buscarTareas(); //busca tareas
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
