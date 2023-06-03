
// FUNCION PARA RECOGER EL NOMBRE DEL JUGADOR EN EL INPUT CON LA CLASE "nombreInput"
// Y GUARDARLO EN EL SESSION STORAGE.

const guardarInput = () => {
    let jugador = document.getElementById("inputNombre").value;

    if (!jugador) {
        return;
    }

    sessionStorage.setItem("nombreJugador", jugador);

    window.location.href = "../pages/dificultad.html";
};