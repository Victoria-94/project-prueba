//////////////////////////EXPLORACION 
export namespace navegacion {
export function exploracion(direccion:"Norte"| "Sur"| "Este"|"Oeste"): void {
    console.log(`Navegando hacia ${direccion}`);
    //if (direccion)
  //exploracion("|norte");
  }
  
  // Función para la recolección de recursos
  export function recoleccionRecursos<l>(recurso: l): void {
    console.log(`recurso adquirido: ${recurso}`);
  }
  
  // Función para el manejo de eventos aleatorios
  interface EventoBase {
    tipo: string;
    duracion: number;
    intensidad: string;
  }
  
  interface Tormenta_agua extends EventoBase {
    intensidad: string;
  }
  
  interface Tormenta_Granizo extends EventoBase {
    volumen: number;
  }
  
  interface Neblina_espesa extends EventoBase {
    intensidad: string;
  }
  
  export function manejoEvento(evento: Tormenta_agua | Tormenta_Granizo | Neblina_espesa): void {
    console.log(`Manejando evento de tipo: ${evento.tipo}, duracion: ${evento.duracion}, con una intensisad: ${evento.intensidad}`);
  }
  
  // Ejemplo de uso de las funciones
 // exploracion("Norte");
  //recoleccionRecursos<string>("Criptonita");
  //manejoEvento({ tipo: "tormenta_Graniso", duracion: 2, intensidad: "fuerte" });
  
};