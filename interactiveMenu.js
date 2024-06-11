document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector('.menu ul');
    const navbar = document.querySelector('.navbar');

    navbar.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});
