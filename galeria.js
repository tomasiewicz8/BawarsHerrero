$(document).ready(function() {
    // Verificar si el elemento existe antes de agregar el evento click
    var elemento = $('#tuElemento');
    if (elemento.length > 0) {
        elemento.on('click', function() {
            // Tu lógica aquí
        });
    }

    // Verificar si FancyBox está definido antes de usarlo
    if (typeof $.fancybox === 'function') {
        // Lógica relacionada con FancyBox aquí
        // Por ejemplo: $('selector').fancybox();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("desplegable").addEventListener("click", function() {
        var menu_ordenador = document.querySelector(".menu_ordenador");
        menu_ordenador.classList.toggle("visible");
    });
});

  
