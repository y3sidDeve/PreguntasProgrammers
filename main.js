const preguntas = [
  '¿Qué es una variable en programación?',
  '¿Qué es un algoritmo?',
  '¿Qué es la programación orientada a objetos?',
  '¿Qué es una base de datos?',
  '¿Qué es un servidor web?',
  '¿Qué es una red de computadoras?',
  '¿Qué es la criptografía?',
  '¿Qué es la ingeniería de software?',
  '¿Qué es la inteligencia artificial?',
  '¿Qué es el lenguaje de programación Python?',
  '¿Qué es un lenguaje de programación?',
  '¿Cuáles son los principales tipos de datos en programación?',
  '¿Qué es una función en programación?',
  '¿Qué es un bucle en programación?',
  '¿Cuál es la diferencia entre un compilador y un intérprete?',
  '¿Qué es una API?',
  '¿Qué es un framework en programación?',
  '¿Qué es el desarrollo web?',
  '¿Qué es el testing o pruebas en el desarrollo de software?',
  '¿Qué son los patrones de diseño en programación?'
];

const respuestas = [
  'Es un espacio en la memoria de la computadora que almacena un valor.',
  'Es una secuencia de pasos que resuelve un problema.',
  'Paradigma de programación basado en objetos.',
  'Colección organizada de datos.',
  'Programa que se ejecuta en un servidor y gestiona solicitudes HTTP.',
  'Conjunto de dispositivos interconectados que se comunican entre sí.',
  'Cifrar y descifrar información para proteger su confidencialidad.',
  'Disciplina que se ocupa del diseño, desarrollo y mantenimiento de software.',
  'Capacidad de las máquinas para realizar tareas que requieren inteligencia humana.',
  'Lenguaje de alto nivel y fácil de aprender.',
  'Forma de comunicación entre una persona y una computadora para escribir programas.',
  'Números, las cadenas de texto, los booleanos y los objetos.',
  'Bloque de código que realiza una tarea específica y puede ser llamado desde otros lugares del programa.',
  'Estructura de control que permite ejecutar un bloque de código varias veces.',
  'Programa que traduce el código fuente a lenguaje de máquina, mientras que un intérprete ejecuta el código fuente directamente.',
  '(Interfaz de Programación de Aplicaciones) es un conjunto de reglas y protocolos que especifican cómo interactuar con una aplicación o sistema.',
  'Conjunto de herramientas y librerías que facilitan el desarrollo de aplicaciones.',
  'Creación de sitios web y aplicaciones web que se ejecutan en un navegador.',
  'Proceso de verificar que un programa funciona como se espera.',
  'Soluciones comunes y probadas para problemas de diseño de software.'
];


let preguntaSeleccionada;
let respuestaCorrecta;

function generarPregunta() {
  //  Math.floor(Math.random() * arreglo.length formula sacada de https://parzibyte.me/
  // math.floor redondea el numero, math.random da un numero aleatorio entre 0 y 1, "0 ,0.1 ,0.2..."
  // al multiplicar por la longitud del arreglo da un numero aleatorio dentro del arreglo
  // Obtener un número aleatorio entre 0 y 9
  // Selecciona una pregunta aleatoria del array de preguntas
  const preguntaSeleccionada = preguntas[Math.floor(Math.random() * preguntas.length)];

  // Inicializa una variable "i" para recorrer la cadena de texto
  let i = 0;

  // Crea un intervalo que se ejecuta cada 30 milisegundos
  const interval = setInterval(() => {

    // Obtiene la etiqueta HTML con el ID "pregunta"
    const preguntaHtml = document.getElementById("pregunta");

    // Agrega un carácter de la pregunta seleccionada al contenido de la etiqueta HTML
    preguntaHtml.textContent += preguntaSeleccionada.charAt(i);

    // Incrementa la variable "i" para avanzar al siguiente carácter
    i++;

    // Si se han mostrado todos los caracteres de la pregunta, detiene el intervalo
    if (i > preguntaSeleccionada.length) {
      clearInterval(interval);
    }
  }, 30);


  // Obtenemos el índice de la pregunta seleccionada
  const indicePregunta = preguntas.indexOf(preguntaSeleccionada);

  // Obtenemos la respuesta correcta correspondiente a la pregunta seleccionada
  respuestaCorrecta = respuestas[indicePregunta];

  // Generamos un índice aleatorio para seleccionar una respuesta incorrecta
  let indiceRespuestaIncorrecta = Math.floor(Math.random() * respuestas.length);

  // Aseguramos que la respuesta incorrecta no sea la respuesta correcta
  while (indiceRespuestaIncorrecta === indicePregunta) {
    indiceRespuestaIncorrecta = Math.floor(Math.random() * respuestas.length);
  }

  // Obtenemos la respuesta incorrecta correspondiente al índice generado
  const respuestaIncorrecta = respuestas[indiceRespuestaIncorrecta];

  // Obtenemos un número aleatorio para determinar en qué lugar se mostrará la respuesta correcta
  const respuestaCorrectaIndex = Math.floor(Math.random() * 2);


  if (respuestaCorrectaIndex === 0) {
    document.getElementById("respuesta1").textContent = respuestaCorrecta;
    document.getElementById("respuesta2").textContent = respuestaIncorrecta;
  } else {
    document.getElementById("respuesta1").textContent = respuestaIncorrecta;
    document.getElementById("respuesta2").textContent = respuestaCorrecta;
  }
}
var aciertos = 0;
var errores = 0;
function validar(btnId) {
  // const respuestaId = btnId === 'btn1' ? 'respuesta1' : 'respuesta2';
  let respuestaId;
  if (btnId === 'btn1') {
    respuestaId = 'respuesta1';
  } else {
    respuestaId = 'respuesta2';
  }
  const respuestaSeleccionada = document.getElementById(respuestaId).textContent;
  if (respuestaSeleccionada === respuestaCorrecta) {
    aciertos++;
    document.getElementById(respuestaId).style.color = "green";
    document.getElementById("aciertos").textContent = aciertos;
    animarAciertos();
  } else {
    errores++;
    document.getElementById(respuestaId).style.color = "red";
    document.getElementById("errores").textContent = errores;
    animarErrores();
    if (errores > 3) {
      alert("Perdiste")
      location.reload();
    }
  }
  const interval = setInterval(() => {
    document.getElementById(respuestaId).style.color = "white";
  }, 1500);
  document.getElementById("pregunta").textContent = ""
  generarPregunta()
}

generarPregunta();

function animarAciertos() {
  const aciertosEl = document.getElementById("aciertos");
  aciertosEl.style.transition = "transform 0.3s ease-in-out";
  aciertosEl.style.transform = "translateY(-10px)";
  setTimeout(() => {
    aciertosEl.style.transform = "none";
  }, 300);
}
function animarErrores() {
  const erroresEl = document.getElementById("errores");
  erroresEl.style.transition = "transform 0.3s ease-in-out";
  erroresEl.style.transform = "translateY(10px)";
  setTimeout(() => {
    erroresEl.style.transform = "none";
  }, 300);
}
