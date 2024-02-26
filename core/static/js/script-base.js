document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const nav = document.querySelector('nav');
    const intelligentLamp = document.querySelector('#inicio .titles');

    menuIcon.addEventListener('click', function () {
        nav.classList.toggle('active');
    });

    document.body.onload = function () {
        intelligentLamp.classList.add('animate');
        const intelligent = document.querySelector('#inicio .intelligent');
        const lamp = document.querySelector('#inicio .lamp');
        intelligent.classList.add('animate');
        lamp.classList.add('animate');
    };

    const iconImages = document.querySelectorAll('.icon-container img');
    iconImages.forEach(icon => {
        icon.addEventListener('mouseover', function () {
            icon.style.transform = 'scale(1.5)';
        });

        icon.addEventListener('mouseout', function () {
            icon.style.transform = 'scale(1)';
        });
    });

    intelligentLamp.addEventListener('mouseover', function () {
        intelligentLamp.style.color = '#EDD4D2'; 
        intelligentLamp.style.transform = 'translateY(-3px)'; /* Agrega un ligero desplazamiento hacia arriba */
    });

    intelligentLamp.addEventListener('mouseout', function () {
        intelligentLamp.style.color = '#fff'; 
        intelligentLamp.style.transform = 'translateY(0)'; /* Restaura el desplazamiento original */
    });
});
