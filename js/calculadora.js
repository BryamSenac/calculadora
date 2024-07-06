export class Calculadora{
    constructor(){
        this.resultado = document.getElementById('resultado');
        this.previa = document.getElementById('previa');
        this.historico = document.getElementById('historico');

        this.valorPrincipal = '0';
        this.valorSecundario = '0';
        this.resultadoCalculo = '0';
        this.operacao = '+';
        this.calculando = false;
        this.historicoCalculos = [];
    }

    attValores(){
        this.resultado.textContent = this.valorPrincipal;
        this.previa.textContent = this.valorSecundario;

        this.historico.innerHTML = '';
        for ( let i = 0; i < this.historicoCalculos.length; i++){
            let p = document.createElement('p');
            p.textContent = this.historicoCalculos[i];
            this.historico.appendChild(p);
        }
    }

    attNumero(valor){
        switch (valor){
            case '<':
                if( this.valorPrincipal.length > 1){
                    this.valorPrincipal = this.valorPrincipal.slice(0, -1);
                }else{
                    this.valorPrincipal = '0';
                }
                                break;
            case 'C':
                this.valorPrincipal = '0';
                this.valorSecundario = '0';
                this.operacao = '+';
                this.calculando = false;
                break;
            case '.':
                if( !this.valorPrincipal.includes('.') ){
                    this.valorPrincipal += valor;
                }
                break;
            default:
                if ( this.valorPrincipal === '0'){
                    this.valorPrincipal = valor;
                } else {
                    this.valorPrincipal += valor;
                }
                break;
        }
        this.attValores();
    }

    attOperacao(op){
        this.operacao = op;
        if( this.calculando ){
            this.calcular();
            this.valorSecundario = this.resultadoCalculo;
        }else{
            this.valorSecundario = this.valorPrincipal;
        }
        this.valorPrincipal = '0';
        this.attValores();  
        this.calculando = true;
    }

    attCalcular(){
        this.calculando = false;
        this.calcular();
        this.valorPrincipal = this.resultadoCalculo;
        this.valorSecundario = '0';
        this.attValores();
    }

    calcular(){
        switch ( this.operacao ){
            case '+':
                this.resultadoCalculo = parseFloat(this.valorSecundario) + parseFloat(this.valorPrincipal);             
                break;
            case '-':
                this.resultadoCalculo = parseFloat(this.valorSecundario) - parseFloat(this.valorPrincipal);
                break;
            case '*':
                this.resultadoCalculo = parseFloat(this.valorSecundario) * parseFloat(this.valorPrincipal);
                break;
            case '/':
                if ( this.valorPrincipal != '0'){
                    this.resultadoCalculo = parseFloat(this.valorSecundario) / parseFloat(this.valorPrincipal);
                }else{
                    alert('Divsão por 0 não existe!!!')
                }                
                break;
            case '%':
                this.resultadoCalculo = this.valorPrincipal / 100;
                this.operacao = '*'; 
                break;
            default:
                this.valorPrincipal = '0';
                this.valorSecundario = '0';
                this.operacao = '+';
                break;
        }
        this.historicoCalculos.push(this.valorSecundario + '  ' + this.operacao + '  ' + this.valorPrincipal + '  =  ' + this.resultadoCalculo);
    }
}