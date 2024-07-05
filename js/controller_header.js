export class MenuController {
    constructor() {
        this.icon = document.getElementById('icon');
        this.menu = document.getElementById('header');
    }
    
    attMenu() {
        if (icon.classList.contains('menu-icon')) {
            this.trocaXicon();
            this.menu.style.right = '0';
        } else {
            this.trocaHamburguerIcon();
            this.menu.style.right = '-100vw'
        }
    }

    trocaXicon() {
        icon.classList.remove('menu-icon');
        icon.classList.add('x-icon');
    }
    trocaHamburguerIcon() {
        icon.classList.remove('x-icon');
        icon.classList.add('menu-icon');
    }
}