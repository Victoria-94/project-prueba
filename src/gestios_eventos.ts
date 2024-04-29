////////////////////////////EVENTOS//////////////////////////////
export namespace gestios_eventos {
export class Eventos {
    tormenta: string;
    temperatura: number;
  
    constructor(tormenta: string, temperatura: number) {
      this.tormenta = tormenta;
      this.temperatura= temperatura;
    }
  
    // Sobrescribir el método toString()
    toString(): string {
      return `Tormenta: ${this.tormenta}, Temperatura: ${this.temperatura}`;
    }
  }
  
  // Crear una instancia de la clase Persona
  
  // Imprimir la instancia en la consola
  
  export function Event (tormenta: string, temperatura: number){
    const ejecutar = new Eventos(tormenta, temperatura);
    console.log(ejecutar);
  ejecutar.toString();
}
};