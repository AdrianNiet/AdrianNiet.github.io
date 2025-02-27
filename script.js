function copiarCorreo(event) {
    event.preventDefault(); // Evita que el enlace recargue la página

    // Texto del correo a copiar
    const correo = "adriannieto1@hotmail.com";

    // Copiar al portapapeles
    navigator.clipboard.writeText(correo)
        .then(() => {
            console.log("Correo copiado:", correo);

            // Mostrar mensaje
            const mensaje = document.getElementById("mensaje");
            mensaje.style.display = "block";

            // Ocultar mensaje después de 2 segundos
            setTimeout(() => {
                mensaje.style.display = "none";
            }, 2000);
        })
        .catch(err => console.error("Error al copiar:", err));
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".intro").classList.add("show");
});