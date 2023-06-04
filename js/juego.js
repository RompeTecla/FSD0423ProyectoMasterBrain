
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el nivel de dificultad del sessionStorage
    const dificultad = sessionStorage.getItem('dificultad');
  
    // Obtener el elemento contenedor
    const selectColorsGameDiv = document.querySelector('.select-colors-game-div');
  
    // Determinar la cantidad de divs según el nivel de dificultad
    let botonColorJugador;
    
    switch (dificultad) {
      case "medio":
        botonColorJugador = 5;
        break;
        
      case "dificil":
        botonColorJugador = 6;
        break;

      default:
        botonColorJugador = 4;
        break;
    }
    const colores = JSON.parse(sessionStorage.getItem('arrayColors'));
  
    // Generar los divs dinámicamente
    for (let i = 1; i <= botonColorJugador; i++) {
      const div = document.createElement('div');
      div.classList.add('colorParaJugar');
      div.id = `colorParaJugar${i}`;
      div.style.backgroundColor = colores[i - 1];
      filaEleccionColores.appendChild(div);
    }
});