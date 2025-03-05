function copiarCorreo(event) {
    // Evita que el enlace recargue la página
    event.preventDefault(); 

    //Aqui pon el texto a copiar
    const correo = "adriannieto1@hotmail.com";

    //Esto copia al portapapeles
    navigator.clipboard.writeText(correo)
        .then(() => {
            //Esto muestra el mensaje en la consola de F12
            console.log("Correo copiado:", correo);

            //
            const mensaje = document.getElementById("mensaje");
            mensaje.style.display = "block";

            //Ocultamos el mensaje despues de 2 segundos (2000 milisegundos)
            setTimeout(() => {
                mensaje.style.display = "none";
            }, 2000);
        })
        .catch(err => console.error("Error al copiar:", err));
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".intro").classList.add("show");
});

document.querySelectorAll(".link-like").forEach(link => {
    link.addEventListener("click", function() {
        console.log("Funcion activada")
        const targetId = this.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);

        if (targetSection) {

            // Ocultar todas las secciones
            console.log("Secciones Ocultas.")
            document.querySelectorAll(".seccion").forEach(sec => {

                console.log("Elemento con clase 'activa':", sec);
                sec.classList.remove("activa");
            });

            // Mostrar la sección correspondiente
            targetSection.classList.add("activa");
        }
    });
});