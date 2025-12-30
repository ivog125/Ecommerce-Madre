document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".formContacto");
    const mensajeExito = document.querySelector(".mensajeExito");

    form.addEventListener("submit", () => {
        // Mostrar mensaje de éxito
        mensajeExito.style.display = "block";
    });
});
