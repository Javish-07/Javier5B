const displayVAnter= document.getElementById('vant');
const displayVActu= document.getElementById('vact');
const btnNumero=document.querySelectorAll('.numeros');
const btnOperador=document.querySelectorAll('.operador');

const display = new Display(displayVAnter,displayVActu);

btnNumero.forEach(boton => {
    boton.addEventListener('click',() =>display.agregarNumero(boton.innerHTML));
});

btnOperador.forEach(boton => {
    boton.addEventListener('click',() =>display.computar(boton.value));
});


