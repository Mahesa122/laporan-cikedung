const body = document.body;

function toggleDarkMode() {
    body.classList.toggle('dark');
    localStorage.setItem(
        'darkMode',
        body.classList.contains('dark')
    );
}

// Load mode from localStorage
if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark');
}