//Creamos un evento para cuando se carge el documento modifique los campos y traiga la información
document.addEventListener('DOMContentLoaded', function cargar() {
   traerInformacion();  
});

//Recuperamos informacion de https://randomuser.me/
async function traerInformacion(){
	const repositorio = await fetch('https://randomuser.me/api/');
	const persona=await repositorio.json();
	
	//Llamamos la funcion para cambiar los datos de la Web y le pasamos el Objeto recibido con los datos
	cambiar_datos(persona.results);
}
//Función para cambiar los datos del documento
function cambiar_datos(persona){

	//cambiamos titulo del documeto para que diga cuando se registro el Curriculum
	document.getElementById("titulo").innerHTML = "Curriculum registrado " 
		+ persona['0'].registered.date;
	
	//cambiamos el nombre de usuario
	document.getElementById('nombre_usuario').innerHTML=persona['0'].name.title + 
		' ' + persona['0'].name.first + 
		' ' + persona['0'].name.last;
	
	//Cambiamos el correo electrónico
	document.getElementById('email').innerHTML='<span>Correo electrónico:</span> ' + persona['0'].email;
	
	//Cambiamos el número de teléfono
	document.getElementById('telefono').innerHTML='<span>Nº de Teléfono:</span> ' + persona['0'].phone;
	
	//Cambiamos la dirección por una compuesta (Calle n° - Ciudad - País)
	document.getElementById('cuidad').innerHTML='<span>Dirección:</span> ' + persona['0'].location.street.name + 
		' ' + persona['0'].location.street.number + 
		' - ' + persona['0'].location.city + 
		' - ' + persona['0'].location.country;
	
	//Cambiamos el Usuario anexando su codificacion MD5
	document.getElementById('username').innerHTML='<span>Usuario:</span> ' 
		+ persona['0'].login.username + 
		' [MD5: ' + persona['0'].login.md5 + ']';
	
	//Cambiamos su contraseña agregando el ID de la sesión
	document.getElementById('password').innerHTML='<span>Contraseña:</span> ' 
		+ persona['0'].login.password + 
		' - ' + persona['0'].login.uuid;
	
	//Cambiamos el pie de página para dar información de donde se obtudo la información y el ID usado
	document.getElementById('pie_de_pagina').innerHTML="Datos obtenidos de <span>https://randomuser.me</span> || " 
		+ persona['0'].id.name + 
		' | ' + persona['0'].id.value;
	
	//Cambiamos la Foto del curriculum para la suministrada por la fuente gratuita
	document.getElementById('foto_user').src=persona['0'].picture.large;
}
