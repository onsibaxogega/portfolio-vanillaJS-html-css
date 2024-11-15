function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const userPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    document.documentElement.setAttribute(
        "data-theme",
        savedTheme || (userPrefersLight ? "light" : "dark")
    );
});
