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
