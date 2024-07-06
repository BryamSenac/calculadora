import { Calculadora } from './calculadora.js';
import { MenuController } from './controller_header.js';

document.addEventListener("DOMContentLoaded", () => {
    const menuController = new MenuController();
    const calculadora = new Calculadora();

    window.attNumero = (valor) => calculadora.attNumero(valor);
    window.attOperacao = (op) => calculadora.attOperacao(op);
    window.attCalcular = ()=> calculadora.attCalcular();
    window.controleMenu = () => menuController.attMenu();
});