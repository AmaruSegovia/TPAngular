import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

imports: [
  // ...
  FormsModule
]

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {
  puntos: number = 0;
  preguntas: string[] = [
    '¿Cuántas vocales tiene la palabra?',
    '¿Cuántas consonantes tiene la palabra?',
    '¿Cuántas letras tiene la palabra?',
    '¿Cuántas sílabas tiene la palabra?'
  ];
  palabras: string[] = [
    'desayuno',
    'animal',
    'casa',
    'mesa',
    'loco',
    'locura',
    'celu',
    'sol',
    'raton',
    'facultad'
  ];
  respuestas: number[] = [];
  preguntaActual: string = '';
  palabraActual: string = '';
  opciones?: number[];
  respuestaCorrecta?: number;
  preguntasRespondidas: number = 0;
  respuestaSeleccionada: number = 0;
  mostrarPuntaje: boolean = false;
  contadorPreguntas: number = 0;
  juegoComenzado = false;
  respuestasCorrectas: number = 0;
  respuestasIncorrectas: number = 0;

  ngOnInit() {
    this.siguientePregunta();
  }

  comenzarJuego() {
    this.juegoComenzado = true;
  }
  siguientePregunta() {
    // Seleccionar pregunta y palabra aleatoria
    this.preguntaActual = this.preguntas[Math.floor(Math.random() * this.preguntas.length)];
    this.palabraActual = this.palabras[Math.floor(Math.random() * this.palabras.length)];
  
    // Seleccionar cantidad de opciones aleatoria (entre 2 y 4)
    let cantidadOpciones = Math.floor(Math.random() * 3) + 2;
  
    // Crear arreglo de opciones y respuesta correcta aleatoria
    let opciones = [];
    let respuestaCorrecta = this.calcularRespuestaCorrecta();
    opciones.push(respuestaCorrecta);
    for (let i = 1; i < cantidadOpciones; i++) {
      let respuestaIncorrecta = this.calcularRespuestaIncorrecta();
      while (opciones.includes(respuestaIncorrecta)) {
        respuestaIncorrecta = this.calcularRespuestaIncorrecta();
      }
      opciones.push(respuestaIncorrecta);
    }

    // Mezclar opciones de forma aleatoria
    opciones = opciones.sort(() => Math.random() - 0.5);

    // Actualizar valor de opciones y respuesta correcta
    this.opciones = opciones;
    this.respuestaCorrecta = opciones.indexOf(respuestaCorrecta);
  
    // Aumentar contador de preguntas respondidas
    this.preguntasRespondidas++;
}


  calcularRespuestaCorrecta(): number {
    switch (this.preguntaActual) {
      case '¿Cuántas vocales tiene la palabra?':
        return this.calcularVocales(this.palabraActual);
      case '¿Cuántas consonantes tiene la palabra?':
        return this.calcularConsonantes(this.palabraActual);
      case '¿Cuántas letras tiene la palabra?':
        return this.palabraActual.length;
      case '¿Cuántas sílabas tiene la palabra?':
        return this.calcularSilabas(this.palabraActual);
      default:
        return 0;
    }
  }

calcularRespuestaIncorrecta(): number {
const maximo = 10;
let respuestaIncorrecta = this.calcularRespuestaCorrecta();
do {
respuestaIncorrecta = Math.floor(Math.random() * maximo) + 1;
} while (respuestaIncorrecta === this.respuestaCorrecta);

return respuestaIncorrecta;
}

  calcularVocales(palabra: string): number {
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    let cantidad = 0;
    palabra = palabra.toLowerCase();
    for (let letra of palabra.split('')) {
      if (vocales.includes(letra)) {
        cantidad++;
      }
    }
    return cantidad;
  }

  
  verificarRespuesta(): void {
    const respuestaEsCorrecta = this.respuestaSeleccionada === this.respuestaCorrecta;
    if (respuestaEsCorrecta) {
      this.puntos++;
      console.log('¡Respuesta correcta!');
    }
    this.siguientePregunta();    
}


reiniciar() {
  this.puntos = 0;
  this.preguntasRespondidas = 0;
  this.respuestas = [];
  this.mostrarPuntaje = false;
  this.respuestasCorrectas = 0;
  this.respuestasIncorrectas = 0;
  this.siguientePregunta();
}


  calcularConsonantes(palabra: string): number {
    // Eliminar acentos y caracteres especiales
    palabra = palabra.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
    let cantidadConsonantes = 0;
  
    // Recorrer la palabra letra por letra y contar consonantes
    for (let i = 0; i < palabra.length; i++) {
      const letra = palabra.charAt(i);
  
      if (!['a', 'e', 'i', 'o', 'u', ' '].includes(letra)) {
        cantidadConsonantes++;
      }
    }
  
    return cantidadConsonantes;
  }
  

  calcularSilabas(palabra: string): number {
    // Eliminar acentos y caracteres especiales
    palabra = palabra.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    // Crear arreglo de vocales
    let vocales = ['a', 'e', 'i', 'o', 'u', 'y'];
  
    // Agregar una letra ficticia al final para poder detectar sílabas al final de la palabra
    palabra += ' ';
  
    // Inicializar contador de sílabas
    let cantidadSilabas = 0;
  
    // Recorrer la palabra buscando patrones de sílabas
    for (let i = 0; i < palabra.length - 1; i++) {
      let letraActual = palabra.charAt(i);
      let letraSiguiente = palabra.charAt(i + 1);
  
      // Si la letra actual es una vocal, sumar una sílaba
      if (vocales.includes(letraActual)) {
        cantidadSilabas++;
      }
  
      // Si la letra actual es una "u" y la letra siguiente es una vocal, y la letra anterior no es una "q", sumar una sílaba
      if (letraActual === 'u' && vocales.includes(letraSiguiente) && letraActual !== palabra.charAt(i - 1)) {
        cantidadSilabas++;
      }
  
      // Si la letra actual es una "y" y la letra siguiente es una vocal, sumar una sílaba
      if (letraActual === 'y' && vocales.includes(letraSiguiente)) {
        cantidadSilabas++;
      }
    }
  
    return cantidadSilabas;
  }


}
