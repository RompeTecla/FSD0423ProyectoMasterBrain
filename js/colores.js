
// Este evento se ejecuta cuando el contenido del DOM ha sido completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtenemos la dificultad almacenada en el Session Storage
    const dificultad = sessionStorage.getItem('dificultad');
    // Obtenemos el contenedor de colores del tablero de juego
    const containerColores = document.getElementById('containerBolasColores');
    // Obtenemos el input de selección de color
    const inputColor = document.getElementById('inputColor');
    // Obtenemos el botón de confirmación
    const botonConfirmarColores = document.getElementById('botonConfirmarColores');
  
    // Determinamos el número de divs de colores según la dificultad seleccionada
    let numberDivs = 4;
  switch (dificultad) {
      case "medio":
          numberDivs = 5;
          break;
      case "dificil":
          numberDivs = 6;
          break;
      default:
          numberDivs = 4;
          break;
  }
  
    // Creamos los divs de colores y los agregamos al contenedor
    for (let i = 0; i < numberDivs; i++) {
      const div = document.createElement('div');
      div.classList.add('color');
      containerColores.appendChild(div);
    }
  
    // Obtenemos los divs de colores después de que el contenido del DOM haya sido cargado
    const colorDivs = Array.from(document.getElementsByClassName('color'));
    // Array para almacenar los colores seleccionados por el jugador
    const arrayColors = [];
  
    // Añadimos eventos a los divs de colores
    // Evento para anular la función del menú contextual al hacer clic derecho con el ratón 
      // y la cambia por la de cambiar el estilo "background-color" del css de unos div en específico
    colorDivs.forEach((div, index) => {
        div.addEventListener('contextmenu', (event) => {
          event.preventDefault();
          div.style.backgroundColor = '';
          arrayColors[index] = null;
      });
  
      // Evento para seleccionar un color al hacer clic izquierdo sobre la bola que quieres pintar
      div.addEventListener('click', () => {
        selectColor(index);
      });
    });
  
    // Función para seleccionar un color y almacenarlo en el array de colores seleccionados
    const selectColor = (index) => {
      colorDivs[index].style.backgroundColor = inputColor.value;
      arrayColors[index] = inputColor.value;
    }
  
    // Evento para el botón de confirmación de colores,
    // Se almacenan los colores seleccionados en el Session Storage,
    // Generamos la combinación secreta aleatoria con los colores seleccionados,
    botonConfirmarColores.addEventListener('click', () => {
      if (arrayColors.every(color => color !== null)) {
  
        sessionStorage.setItem('arrayColors', JSON.stringify(arrayColors));
        
        const coloresSeleccionados = JSON.parse(sessionStorage.getItem('arrayColors'));
        const combinacionSecreta = generarCombinacionSecreta(coloresSeleccionados);
        sessionStorage.setItem('combinacionSecreta', JSON.stringify(combinacionSecreta));
  
        // Redirigimos a la página del tablero de juego
        window.location.href = '../pages/game.html';
      }
    });
  });
  
  // Función para generar una combinación secreta aleatoria con los colores seleccionados sin repetir colores
  const generarCombinacionSecreta = (coloresSeleccionados) => {
    const combinacion = [];
  
    // Creamos una copia del array de colores seleccionados
    const coloresDisponibles = [...coloresSeleccionados];
  
    for (let i = 0; i < 4; i++) {
      // Seleccionamos un color aleatorio de los colores disponibles
      const colorAleatorio = coloresDisponibles[Math.floor(Math.random() * coloresDisponibles.length)];
      // Añadimos el color a la combinación secreta
      combinacion.push(colorAleatorio);
      // Se elimina el color disponibles de "colorAleatorio" para la combinacion secreta y así evitar repeticiones en su patrón
      coloresDisponibles.splice(coloresDisponibles.indexOf(colorAleatorio), 1);
    }
  
    return combinacion;
  }
  
