
import { navegacion} from './navegacion';
import { gestios_eventos } from './gestios_eventos';
import { interfaz_nave } from './interfaz_nave';



////////////////////////////// cCONTROL DE ERRORES
import * as readline from 'readline';

// Función para capturar entrada del usuario desde la consola
function capturarEntrada(prompt: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(prompt, (input) => {
      rl.close();
      resolve(input);
    });
  });
}

// Función para simular el viaje
function simularViaje(direccion: string, distancia: number): void {
  console.log(`Viajando hacia ${direccion} por ${distancia} años luz...`);
  // Lógica de simulación del viaje aquí
}

// Función principal para tomar decisiones del usuario y simular viajes
async function main() {
  try {
    const direccion = await capturarEntrada("Ingrese la dirección a la que desea viajar: ");
    const distanciaStr = await capturarEntrada("Ingrese la distancia del viaje en años luz: ");
    const distancia = parseFloat(distanciaStr);

    if (isNaN(distancia)) {
      throw new Error("La distancia ingresada no es válida.");
    }

    simularViaje(direccion, distancia);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Llama a la función principal para iniciar el programa
//main();  


interfaz_nave.Estado("regular", 300, 120);
//interfaz_nave.Peligro("tormenta granizo",interfaz_nave.recurso.viento );
const plan= new interfaz_nave.Planet ("tormenta fuego", interfaz_nave.recurso.fuego); //clase se asigna en la siguiente linea para la consola 
plan.planeta();
gestios_eventos.Event("viento", 3); 
navegacion.manejoEvento ({ tipo: "tormenta_Graniso", duracion: 2, intensidad: "fuerte" });
navegacion.exploracion('Norte');
navegacion.recoleccionRecursos("Criptonita");k 




