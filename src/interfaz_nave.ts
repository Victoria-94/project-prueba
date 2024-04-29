
export namespace interfaz_nave {
    
export interface nave_prop {
    salud: string;
    carga: number;
    velocidad: number; 
  }
  
  // Uso de la interfaz
  function imprimirEstado (nave_prop: nave_prop) {
    console.log(`Salud: ${nave_prop.salud}, carga: ${nave_prop.carga} kg, velocidad: ${nave_prop.velocidad} km/h`);
    //if (persona.direccion) {
      //console.log(`Dirección: ${persona.direccion}`);
    //}
  }
  
  
  // Creación de un objeto que cumple con la interfaz
  
  
  // Llamada a la función con el objeto
  
export function Estado (a:string, b:number, c:number){
  const datos_nave: nave_prop = {
    salud: a ,// pude ser buena regular y mala
    carga: b,
    velocidad: c,
  };
  imprimirEstado(datos_nave);

}
  //////////////////////////////////////////PLANETA/////////////////////////////
export enum recurso {
    fuego = "fuego",
    hielo = "hielo",
    viento = "viento",
    agua = "agua",
  }
  export class Planet {
    public  Peligro_asociado: string;
    public Recurso: recurso;
    constructor(Peligro_asociado:string ,Recurso:recurso){
        this.Peligro_asociado = Peligro_asociado;
        this.Recurso = Recurso;
    }
    getPeligro(){
       return this.Peligro_asociado;
    }
    setPeligro(Peligro_asociado:string){
       this.Peligro_asociado = Peligro_asociado;
    }
    getRecurso(){
       return this.Recurso;
    }
    setRecurso(Recurso:recurso){
       this.Recurso = Recurso;
    }
    planeta() {
    console.log(`Se proxima una amenaza ${this.Peligro_asociado}, que contiene como recurso: ${this.Recurso}`);
    }
  }
  // Crear una instancia de la clase Persona
  
  
  // Llamar al método presentarse()
 /*
  export function Peligro ( amenaza: string, material:recurso){

    const planeta1 = new Planet(amenaza, material);
    planeta1.planeta()
  //Cuando tengo clase uso este molde 
  }
  */
};
