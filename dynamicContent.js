document.addEventListener("DOMContentLoaded", function() {
    const joinUsButton = document.querySelector('.cn a');
    const welcomeMessage = document.querySelector('.content h1');

    joinUsButton.addEventListener('click', function(event) {
        event.preventDefault();
        welcomeMessage.textContent = "Thank you for joining us!";
    });
});
