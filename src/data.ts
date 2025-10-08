import { Tarea } from './models';

export const listaTareas: Tarea[] = [];

export function agregarTarea(tarea: Tarea): void {
  listaTareas.push(tarea);
}

export function obtenerTareas(): Tarea[] {
  return listaTareas;
}
