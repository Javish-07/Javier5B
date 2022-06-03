class Display{
    constructor(displayVAnter,displayVActu){
        this.displayVActu=displayVActu;
        this.displayVAnter=displayVAnter;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual='';
        this.valorAnterior='';
        this.signos = {
            sumar: '+',
            dividir: '÷',
            multiplicar: 'x',
            restar: '-',
        }
    }

    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }
    delete(){
        this.valorActual='';
        this.valorAnterior='';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }
    computar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    }
    agregarNumero(numero){
        if(numero == '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }
    imprimirValores(){
        this.displayVActu.textContent = this.valorActual;
        this.displayVAnter.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;

    }
    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);
        if(isNaN(valorActual) || isNaN(valorAnterior)) return
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior,valorActual);
    }
    /* funciones para navbar */
    Slider() {
        window.location = "Slider.html";
    }
    index(){
        window.location="index.html";
    }
    Video() {
        window.location = "Videos.html";
    }
    
    Curriculum() {
       window.location = "Curriculum.html";
    
    }
    Inicio() {
        window.location = "Pagina.html";
     
     }
    Tablas() {
        window.location = "tablas.php";
    }
    
    Horario() {
        window.location = "horario.php";
    }
    
}