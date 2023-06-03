
const guardarDificultad = (dificultad) => {
    sessionStorage.setItem("dificultad", dificultad);
    window.location.href = ("../pages/colores.html")
}