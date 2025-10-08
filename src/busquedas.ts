// bsuqueda por estado, dificltad, y titulo 
import { obtenerTareas } from './data';
import { obtenerPrompt, pausar } from './utils';
import { Tarea } from './models';

const prompt = obtenerPrompt();

export function buscarTareas(): void {
  console.log("\n--- Buscar Tareas ---");
  console.log("\nQué deseas hacer?");
  console.log("[1] Por estado");
  console.log("[2] Por dificultad");
  console.log("[3] Por títul");
  console.log("[0] Volver");

  const opcion = prompt("Seleccione una opción: ");
  switch (opcion) {
    case '1': buscarPorEstado(); break;
    case '2': buscarPorDificultad(); break;
    case '3': buscarPorTitulo(); break;
    case '0': return; 
    default:
      console.log("⚠️ Opción inválida.");
      break; 
  }
}

function buscarPorEstado(): void {
  console.log("\n--- Buscar por Estado ---");
  console.log("[1] Pendiente");
  console.log("[2] En curso");
  console.log("[3] Terminado");
  console.log("[4] Cancelada");
  console.log("[0] Volver");

  const opcion = prompt("Seleccione una opción: ");
  let estado: Tarea['estado'] | null = null;

  switch (opcion) {
    case '1': estado = "pendiente"; break;
    case '2': estado = "en curso"; break;
    case '3': estado = "terminado"; break;
    case '4': estado = "cancelada"; break;
    case '0': return; // vuelve al menú principal
    default:
      console.log("⚠️ Opción inválida.");
      return; 
  }

  const resultados = obtenerTareas().filter(t => t.estado === estado);
  mostrarResultadosBusqueda(resultados);
}

function buscarPorDificultad(): void {
  console.log("\n--- Buscar por Dificultad ---");
  console.log("[1] Fácil");
  console.log("[2] Intermedio");
  console.log("[3] Difícil");
  console.log("[0] Volver");

  const opcion = prompt("Seleccione una opción: ");
  let dificultad: Tarea["dificultad"] | null = null;

  switch (opcion) {
    case '1': dificultad = "facil"; break;
    case '2': dificultad = "intermedio"; break;
    case '3': dificultad = "dificil"; break;
    case '0': return; 
    default:
      console.log("⚠️ Opción inválida.");
      return; 
  }

  const resultados = obtenerTareas().filter(t => t.dificultad === dificultad);
  mostrarResultadosBusqueda(resultados);
}

function buscarPorTitulo(): void {
  const texto = prompt("Ingrese parte del título: ").toLowerCase();
  if (texto.trim() === '') {
    console.log("⚠️ Texto inválido.");
    return; 
  }

  const resultados = obtenerTareas().filter(t => t.titulo.toLowerCase().includes(texto));
  mostrarResultadosBusqueda(resultados);
}

function mostrarResultadosBusqueda(resultados: Tarea[]): void {
  if (resultados.length === 0) {
    console.log(" No se encontraron tareas.");
    pausar();
    return; 
  }

  console.log("\n📋 Resultados:");
  resultados.forEach((tarea, i) => {
    console.log("\n#${i + 1}");
    console.log("Título: ${tarea.titulo}");
    console.log("Descripción: ${tarea.descripcion}");
    console.log("Vencimiento: ${tarea.vencimiento}");
    console.log("Dificultad: ${tarea.dificultad}");
    console.log("Estado: ${tarea.estado}");
  });

  pausar();

}
