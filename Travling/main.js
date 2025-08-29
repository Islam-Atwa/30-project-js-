// Function to toggle between light and dark mode
function toggleDarkMode() {
    const body = document.body;
    const header = document.querySelector('header');
    const tripCards = document.querySelectorAll('.trip-card');
    const contactSection = document.querySelector('#contact');
    const button = document.getElementById('darkModeToggle');

    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    contactSection.classList.toggle('dark-mode');
    tripCards.forEach(card => card.classList.toggle('dark-mode'));
    
    // Change button text based on mode
    if (body.classList.contains('dark-mode')) {
        button.textContent = "🌞 Light Mode";
    } else {
        button.textContent = "🌙 Dark Mode";
    }
}
