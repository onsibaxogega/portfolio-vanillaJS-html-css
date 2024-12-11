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

const scrollers = document.querySelectorAll(".scroller");


function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

addAnimation();
