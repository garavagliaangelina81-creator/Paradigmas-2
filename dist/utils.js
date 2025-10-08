"use strict";
//funciones auxiliares reutilizables (validaciones, fechas)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerPrompt = obtenerPrompt;
exports.obtenerFechaActual = obtenerFechaActual;
exports.pausar = pausar;
exports.validarTitulo = validarTitulo;
exports.validarDescripcion = validarDescripcion;
exports.mostrarDificultad = mostrarDificultad;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)({ sigint: true });
function obtenerPrompt() {
    return prompt;
}
function obtenerFechaActual() {
    return new Date().toISOString().split('T')[0];
}
function pausar() {
    prompt("\nPresiona Enter para continuar...");
}
function validarTitulo(titulo) {
    if (!titulo || titulo.trim() === '') {
        console.log("⚠️ El título no puede estar vacío.");
        return false;
    }
    if (titulo.length > 100) {
        console.log("⚠️ El título no puede exceder los 100 caracteres.");
        return false;
    }
    return true;
}
function validarDescripcion(descripcion) {
    if (descripcion.length > 500) {
        console.log("⚠️ La descripción no puede exceder los 500 caracteres.");
        return false;
    }
    return true;
}
function mostrarDificultad(dificultad) {
    switch (dificultad) {
        case 'intermedio': return '⭐⭐';
        case 'dificil': return '⭐⭐⭐';
        default: return '⭐';
    }
}
