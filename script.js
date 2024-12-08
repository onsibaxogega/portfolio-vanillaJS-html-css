window.addEventListener('DOMContentLoaded', ()=> {
    if (localStorage.getItem('theme') === 'light') document.documentElement.classList.add('lightMode');
    else localStorage.setItem('theme', 'dark');
});

let toggleTheme = ()=> {
    const currentTheme = localStorage.getItem('theme');

    switch (currentTheme) {
        case 'dark':
            document.documentElement.classList.add('lightMode');
            localStorage.setItem('theme', 'light');
            break;
        default:
            document.documentElement.classList.remove('lightMode');
            localStorage.setItem('theme', 'dark');
            break;

    }
}


function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
