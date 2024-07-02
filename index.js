let valorTemp = '0';
let resultado;
let operacao = '+';
let valorUm = '0';
let valorDois = '0';

function attValor(valor) {
    if (valorTemp === '0') {
        valorTemp = valor;
    } else {
        valorTemp = valorTemp + valor;
    }
    console.log(valorTemp);
}

function escolheOperacao(op) {
    operacao = op;
    valorUm = valorTemp;
    valorTemp = '0';
    console.log(operacao);
}

function calcular() {
    let tagResultado = document.getElementById("resultado");

    valorDois = valorTemp;
    valorTemp = '0';

    if (operacao === '+') {
        resultado = Number(valorUm) + Number(valorDois);
    } else if (operacao === '-') {
        resultado = Number(valorUm) - Number(valorDois);
    } else if (operacao === '*') {
        resultado = Number(valorUm) * Number(valorDois);
    } else if (operacao === '/') {
        if (valorDois === '0') {
            resultado = 'Valor dois invalido';
        } else {
            resultado = Number(valorUm) / Number(valorDois);
        }
    }

    tagResultado.innerHTML = resultado;
    if(resultado < 0){
        tagResultado.style.color = 'red';
    }else{
        tagResultado.style.color = 'green';
    }
    console.log(resultado);
}