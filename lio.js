const themeToggle = document.getElementById('theme-toggle');
const body = document.documentElement;

// Check for saved theme in localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
    updateIcon(currentTheme);
}

themeToggle.addEventListener('click', () => {
    let theme = body.getAttribute('data-theme');
    
    if (theme === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        updateIcon('light');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        updateIcon('dark');
    }
});

function updateIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}