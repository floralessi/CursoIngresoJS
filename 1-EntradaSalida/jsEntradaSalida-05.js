/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombreIngresado;
	let edadIngresada;
	let mensaje;

	nombreIngresado = document.getElementById("txtIdNombre").value;
	edadIngresado = document.getElementById("txtIdEdad").value;

	mensaje = "Su nombre es: ";
	mensaje = mensaje + nombreIngresado;
	mensaje = mensaje + " y tiene ";
	mensaje = mensaje + edadIngresada
	mensaje = mensaje + " años "


	//alert("Su nombre es: " + nombreIngresado + "y tiene" + edadIngresada + "años");
    alert(mensaje);
}

