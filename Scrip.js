// script.js

// Example: Handle search button click
const searchButton = document.querySelector('.search-container button');
searchButton.addEventListener('click', () => {
    const searchInput = document.querySelector('.search-container input');
    const searchTerm = searchInput.value;
    // Perform search logic using the searchTerm
    console.log('Searching for:', searchTerm);
});

// Example: Handle notifications click
const notifications = document.querySelector('.notifications');
notifications.addEventListener('click', () => {
    // Show notification details or perform other actions
    console.log('Notifications clicked');
});