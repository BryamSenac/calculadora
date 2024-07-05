import { MenuController } from './controller_header.js';

document.addEventListener("DOMContentLoaded", () => {
    const menuController = new MenuController();
    window.controleMenu = () => menuController.attMenu();
});