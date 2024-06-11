document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector('.menu ul');
    const navbarToggle = document.createElement('div');
    navbarToggle.className = 'navbar-toggle';
    navbarToggle.innerHTML = '<span></span><span></span><span></span>';

    document.querySelector('.navbar').appendChild(navbarToggle);

    navbarToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
        navbarToggle.classList.toggle('active');
    });
});
