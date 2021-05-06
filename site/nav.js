const menu = document.getElementById('menu')
const back = document.getElementById("background-active");

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        menu.classList.add('background-active');
    } else {
        menu.classList.remove('background-active');
    }
})