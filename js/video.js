var miVideo = document.getElementById("video1");
function playPause() {
    if (miVideo.paused)
        miVideo.play();
    else
        miVideo.pause();

}

function stop() {
    miVideo.pause();
    miVideo.currentTime = 0;
}

function skip(value) {
    miVideo.currentTime += value;
}


/* Funciones para cambiar de pagina */

function Slider() {
    window.location = "Slider.html";
}
function index(){
    window.location="index.html";
}
function Video() {
    window.location = "Videos.html";
}

function Curriculum() {
   window.location = "Curriculum.html";

}
function Inicio() {
    window.location = "Pagina.html";
 
 }
function Tablas() {
    window.location = "tablas.php";
}

function Horario() {
    window.location = "horario.php";
}
function Calculadora(){
    window.location = "calculadora.html";
}
