// Función para alternar la visibilidad del menú desplegable
document.getElementById('menu-icon').addEventListener('click', function() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
});
