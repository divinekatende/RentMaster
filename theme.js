// theme.js

// Charger le thème enregistré ou définir le thème clair par défaut
let theme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', theme);

// Fonction pour basculer le thème
function toggleTheme() {
    let current = document.documentElement.getAttribute('data-theme');
    let next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);

    // changer l'icône
    let icon = document.getElementById('theme-icon');
    if(icon) icon.className = next === 'light' ? 'fas fa-sun' : 'fas fa-moon';
}

// Mettre à jour l'icône au chargement
window.onload = () => {
    let icon = document.getElementById('theme-icon');
    if(icon) icon.className = theme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
};