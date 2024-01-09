$(document).ready(function() {
    // Inicializa FancyBox
    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
            "zoom",
            "share",
            "slideShow",
            "fullScreen",
            "download",
            "thumbs",
            "close"
        ],
        loop: true, // Permite la navegación en bucle
        keyboard: true // Habilita la navegación con el teclado
    });
});

document.getElementById("desplegable").addEventListener("click", function() {
    var menu_ordenador = document.querySelector(".menu_ordenador");
    console.log("Botón de menú clicado");
    menu_ordenador.classList.toggle("visible");
});

  
