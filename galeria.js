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
    if (menu_ordenador.style.display === "block") {
      menu_ordenador.style.display = "none";
    } else {
        menu_ordenador.style.display = "block";
    }
  });
  
