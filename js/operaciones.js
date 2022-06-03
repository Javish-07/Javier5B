function validar() {
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;
    if (usuario == "javier" && clave == "123") {
        alert("datos correctos Bienvenido");
        window.location = "Slider.html";
    } else if (usuario == "javier") {
        alert("clave incorrecta");
    } else if (clave == "123") {
        alert("usuario incorrecto");
    } else {
        alert("usuario y clave incorrectos");
    }

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
/*Ocultar y MOstrar input*/
function Mostrar(){
    document.getElementById("caja").style.display = "block";
}

function Ocultar(){
    document.getElementById("caja").style.display = "none";
}

/*COntar etiquetas*/
function contar() {

    var caja = document.getElementById("caja");
    if(caja.style.display =="block"){
        Ocultar();
        document.getElementById("boton").value = "Mostrar";

     
    }else{
        Mostrar();
        document.getElementById("boton").value = "Ocultar";
        /*mostrar etiquetas*/
        objdiv = document.getElementsByTagName('div').length;
        objimg = document.getElementsByTagName('img').length;
        objinput = document.getElementsByTagName('input').length;
        objli = document.getElementsByTagName('li').length;
        objnav = document.getElementsByTagName('nav').length;
        
    
        document.getElementById('div').value = 'Etiqueta DIV: '+objdiv;
        document.getElementById('img').value = 'Etiqueta IMG: '+objimg;
        document.getElementById('input').value = 'Etiqueta INPUT: '+objinput;
        document.getElementById('li').value = 'Etiqueta LI: '+objli;
        document.getElementById('nav').value = 'Etiqueta NAV: '+objnav;
       
    }
     
}
function Buscar() {
    var tabla = document.getElementById('tblPersonas');
    var busqueda = document.getElementById('txtBusqueda').value.toLowerCase();
    var cellsOfRow="";
    var found=false;
    var compareWith="";
    for (var i = 1; i < tabla.rows.length; i++) {
        cellsOfRow = tabla.rows[i].getElementsByTagName('td');
        found = false;
        for (var j = 0; j < cellsOfRow.length && !found; j++) { compareWith = cellsOfRow[j].innerHTML.toLowerCase(); if (busqueda.length == 0 || (compareWith.indexOf(busqueda) > -1))
            {
                found = true;
            }
        }
        if(found)
        {
            tabla.rows[i].style.display = '';
        } else {
            tabla.rows[i].style.display = 'none';
        }
    }
}