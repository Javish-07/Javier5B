<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- -->
    <link rel="stylesheet" href="css/footer.css">
    <link rel="icon" href="img/favicon.jpg">
    <script src="js/operaciones.js"></script>
    <title>Document</title>
</head>

<body>

    <div id="container-footer">
        <div id="menu">
            <input type="checkbox" id="check__menu">
            <label id="label__check" for="check__menu">
                <i class="fa-solid fa-bars icon__menu"></i>
            </label>
            <nav>
                <ul>
                    <li><a href="#login" onclick="index()"></a></li>

                    <li><a href="#Slider" onclick="Slider()"> Carrusel</a></li>
                    <li><a href="#Nosotros" onclick="Nosotros()">Nosotros</a></li>
                    <li><a href="#Videos" onclick="Video()">Videos</a></li>
                    <li><a href="#Tablas" id="selected" onclick="Tablas()">Tablas</a></li>
                    <li><a href="#Horario" onclick="Horario()">Horario</a></li>
                    <li><a href="#Presentacion" onclick="Inicio()"> Audio/AJAX</a></li>
                    <li><a href="#Calculadora" onclick="Calculadora()">Calculadora</a></li>

                </ul>
            </nav>
        </div>
        <h1>Tabla Estudiantes</h1>
        <div class="Formato-tabla">
            <form>
                <input id="txtBusqueda" placeholder="Buscar datos" type="text" onkeyup="Buscar();" /></form>
            </form>

            <table id="tblPersonas">
                <thead>
                    <tr>
                        <th>Cedula</th>
                        <th>Genero|Matriculado|ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Celular</th>
                    </tr>
                </thead>


                <?php
                echo ('<link rel="stylesheet" href="css/tablas.css">');

                if (file_exists('xml/Estudiantes.xml')) {
                    $xml = simplexml_load_file('xml/Estudiantes.xml');
                    foreach ($xml->estudiante as $key0 => $est) {
                        echo '<tr">';
                        echo '<td>' . $est->cedula . '</td>';
                        echo '<td>' . $est->cedula['genero'] . ' - ' . $est->cedula['matriculado'] . ' - ' . $est->cedula['id'] . '</td>';
                        echo '<td>' . $est->nombre . '</td>';
                        echo '<td>' . $est->apellido . '</td>';
                        echo '<td>' . $est->celular . '</td>';
                        echo '</tr>';
                    }
                } else {
                    exit('No se puede abrir el xml');
                }
                ?>
            </table>
        </div>
    </div>
</body>

</html>