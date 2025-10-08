"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listaTareas = void 0;
exports.agregarTarea = agregarTarea;
exports.obtenerTareas = obtenerTareas;
exports.listaTareas = [];
function agregarTarea(tarea) {
    exports.listaTareas.push(tarea);
}
function obtenerTareas() {
    return exports.listaTareas;
}
