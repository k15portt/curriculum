//Creamos un evento para cuando se carge el documento modifique los campos
document.addEventListener('DOMContentLoaded', function cargar() {
   traerInformacion();  
});

//Recuperamos informacion de https://randomuser.me/
async function traerInformacion(){
	const repositorio = await fetch('https://randomuser.me/api/');
	const persona=await repositorio.json();
	cambiar_datos(persona.results);
}
//Función para cambiar los datos del documento
function cambiar_datos(persona){
	//cambiamos titulo del documeto para que diga cuando se registro el Curriculum
	document.getElementById("titulo").innerHTML = "Curriculum registrado " + persona['0'].registered.date;
	//cambiamos el titulo principal
	//let parrafo = document.getElementById('h1principal');
	//parrafo.innerHTML='Curriculum Vitae de ' + persona['0'].login.username;
	let nombre=persona['0'].name.title + ' ' + persona['0'].name.first + ' ' + persona['0'].name.last;
	document.getElementById('nombre_usuario').innerHTML=nombre;
	let email = persona['0'].email;
	document.getElementById('email').innerHTML='Correo electrónico: ' + email;
	document.getElementById('telefono').innerHTML='Nº de Teléfono: ' + persona['0'].phone;
	document.getElementById('cuidad').innerHTML='Dirección: ' + persona['0'].location.street.name + 
	' ' + persona['0'].location.street.number + ' - ' + persona['0'].location.city + ' - ' + persona['0'].location.country;
	document.getElementById('username').innerHTML='Usuario: ' + persona['0'].login.username + ' [MD5: ' + persona['0'].login.md5 + ']';
	document.getElementById('password').innerHTML='Contrseña: ' + persona['0'].login.password + ' - ' + persona['0'].login.uuid;
	document.getElementById('pie_de_pagina').innerHTML="Datos obtenidos de https://randomuser.me --> " + persona['0'].id.name + ' | ' + persona['0'].id.value;
	document.getElementById('foto_user').src=persona['0'].picture.large;
}
