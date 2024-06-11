document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.querySelector('.search .btn');
    const searchInput = document.querySelector('.search .srch');

    searchButton.addEventListener('click', function(event) {
        event.preventDefault();
        const query = searchInput.value.trim();

        if (query) {
            alert(`You searched for: ${query}`);
            // For redirecting to a search results page, you can use:
            // window.location.href = `search.html?query=${encodeURIComponent(query)}`;
        } else {
            alert('Please enter a search query.');
        }
    });
});
