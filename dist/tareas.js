"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearTarea = crearTarea;
exports.mostrarTareas = mostrarTareas;
const data_1 = require("./data");
const utils_1 = require("./utils");
const prompt = (0, utils_1.obtenerPrompt)();
function crearTarea() {
    let continuar = true;
    while (continuar) {
        const titulo = prompt("Título: ");
        if (!(0, utils_1.validarTitulo)(titulo))
            continue;
        let descripcion = prompt("Descripción (opcional): ");
        if (!descripcion || descripcion.trim() === '')
            descripcion = "Sin descripción";
        if (!(0, utils_1.validarDescripcion)(descripcion))
            continue;
        const vencimientoInput = prompt("Fecha de vencimiento (DD/MM/YYYY, opcional): ");
        const vencimiento = vencimientoInput.trim() !== '' ? vencimientoInput : "No asignada";
        const dificultadInput = prompt("Dificultad [1 Fácil ⭐ / 2 Intermedio ⭐⭐ / 3 Dificil ⭐⭐⭐]: ");
        let dificultad;
        switch (dificultadInput) {
            case '2':
                dificultad = "intermedio";
                break;
            case '3':
                dificultad = "dificil";
                break;
            default:
                dificultad = "facil";
                break;
        }
        const tarea = {
            titulo,
            descripcion,
            fechaCreacion: (0, utils_1.obtenerFechaActual)(),
            fechaEdicion: "No editada",
            vencimiento,
            dificultad,
            estado: "pendiente"
        };
        (0, data_1.agregarTarea)(tarea);
        console.log("✅ Tarea creada con éxito.");
        const opcion = prompt("¿Desea crear otra tarea? [1] Sí [2] No: ");
        continuar = opcion === '1';
    }
}
function mostrarTareas() {
    const tareas = (0, data_1.obtenerTareas)();
    if (tareas.length === 0) {
        console.log(" No hay tareas cargadas");
        (0, utils_1.pausar)();
        return;
    }
    console.log("\n📋 Lista de tareas:");
    tareas.forEach((tarea, i) => {
        console.log(`[${i + 1}] ${tarea.titulo}`);
    });
    const opcion = prompt("Seleccione el número para ver detalles (0 para volver): ");
    const index = parseInt(opcion) - 1;
    if (opcion === '0')
        return;
    if (isNaN(index) || index < 0 || index >= tareas.length) {
        console.log("⚠️ Opción inválida.");
        return mostrarTareas();
    }
    mostrarDetalleTarea(tareas[index]);
}
function mostrarDetalleTarea(tarea) {
    console.log("\n Detalle de la tarea:");
    console.log("-----------------------------");
    console.log("Título: ${tarea.titulo}");
    console.log("Descripción: ${tarea.descripcion}");
    console.log("Fecha de creación: ${tarea.fechaCreacion}");
    console.log("Vencimiento: ${tarea.vencimiento}");
    console.log(`Dificultad: ${(0, utils_1.mostrarDificultad)(tarea.dificultad)}`);
    console.log("Estado: ${tarea.estado}");
    console.log("Última edición: ${tarea.fechaEdicion}");
    console.log("-----------------------------");
    console.log("\n[1] Modificar tarea");
    console.log("[0] Volver");
    const opcion = prompt('Seleccione una opción: ');
    if (opcion === '1') {
        modificarTarea(tarea);
    }
    else {
        return;
    }
}
function modificarTarea(tarea) {
    let salir = false;
    while (!salir) {
        console.log("\n--- Modificar Tarea ---");
        console.log("[1] Título");
        console.log("[2] Descripción");
        console.log("[3] Estado");
        console.log("[4] Vencimiento");
        console.log("[0] Volver");
        const opcion = prompt("Seleccione una opción: ");
        switch (opcion) {
            case '1':
                const nuevoTitulo = prompt("Nuevo título: ");
                if ((0, utils_1.validarTitulo)(nuevoTitulo)) {
                    tarea.titulo = nuevoTitulo;
                    console.log("✅ Título actualizado.");
                }
                break;
            case '2':
                const nuevaDesc = prompt("Nueva descripción: ");
                if ((0, utils_1.validarDescripcion)(nuevaDesc)) {
                    tarea.descripcion = nuevaDesc;
                    console.log("✅ Descripción actualizada.");
                }
                break;
            case '3':
                const nuevoEstado = prompt("Nuevo estado (pendiente / en curso / terminado / cancelada): ");
                tarea.estado = nuevoEstado;
                console.log("✅ Estado actualizado.");
                break;
            case '4':
                tarea.vencimiento = prompt("Nueva fecha de vencimiento: ");
                console.log("✅ Vencimiento actualizado.");
                break;
            case '0':
                tarea.fechaEdicion = (0, utils_1.obtenerFechaActual)();
                salir = true;
                break;
            default:
                console.log("⚠️ Opción inválida.");
                break;
        }
    }
}
