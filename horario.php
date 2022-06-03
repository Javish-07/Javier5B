<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">

	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="stylesheet" href="css/horario.css">
	<link rel="stylesheet" href="css/footer.css">
	<script src="js/operaciones.js"></script>
	<link rel="icon" href="img/favicon.jpg">
	<title>Horario</title>
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

					<li><a href="#Slider" onclick="Slider()"> Slider</a></li>
					<li><a href="#Nosotros" onclick="Nosotros()">Curriculum</a></li>
					<li><a href="#Videos" onclick="Video()">Videos</a></li>
					<li><a href="#Tablas" onclick="Tablas()">Tablas</a></li>
					<li><a href="#Horario" id="selected" onclick="Horario()">Horario</a></li>
					<li><a href="#Presentacion" onclick="Inicio()"> Audio/AJAX</a></li>
					<li><a href="#Calculadora" onclick="Calculadora()">Calculadora</a></li>

				</ul>
			</nav>
		</div>
	</div>

	<h2>HORARIO ACADEMICO</h2>
	<table>
		<tr>
			<th>Hora</th>
			<th>Lunes</th>
			<th>Martes</th>
			<th>Miercoles</th>
			<th>Jueves</th>
			<th>Viernes</th>
		</tr>
		<?php

		$json_data = file_get_contents("json/horario.json");
		$horario = json_decode($json_data, true);
		if (count($horario) != 0) {
			foreach ($horario as $dia) {
		?>
				<tr>
					<td>
						<?php echo $dia['id']; ?>
					</td>
					<td>
						<?php echo $dia['Lunes']; ?>
					</td>
					<td>
						<?php echo $dia['Martes']; ?>
					</td>
					<td>
						<?php echo $dia['Miercoles']; ?>
					</td>
					<td>
						<?php echo $dia['Jueves']; ?>
					</td>
					<td>
						<?php echo $dia['Viernes']; ?>
					</td>
				</tr>
		<?php
			}
		}
		?>
	</table>
	
</body>

</html>