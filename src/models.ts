// definiciones de tipos e interfaces 

export interface Tarea {
    titulo: string; 
    descripcion: string; 
    fechaCreacion: string; 
    fechaEdicion: string; 
    vencimiento: string; 
    dificultad: "facil" | "intermedio" | "dificil"; 
    estado: "pendiente" | "en curso"   | "terminado" | "cancelada";

}