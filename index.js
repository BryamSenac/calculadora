const icon = document.getElementById('icon');
const menu = document.getElementById('header');

function controleMenu() {
    if (icon.classList.contains('menu-icon')) {
        trocaXicon();
        menu.style.right = '0';
    } else {
        trocaHamburguerIcon();
        menu.style.right = '-100vw'
    }
}

function trocaXicon() {
    icon.classList.remove('menu-icon');
    icon.classList.add('x-icon');
}
function trocaHamburguerIcon() {
    icon.classList.remove('x-icon');
    icon.classList.add('menu-icon');
}