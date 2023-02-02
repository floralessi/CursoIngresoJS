/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

    let primerNumeroIngresado;
	let primeNumero;
	let segudnoNumeroIngresado;
	let segundoNumero;
	let resultado;

	//primeNumero = 66;
	//segundoNumero = 24;

	primerNumero = document.getElementById("txtIdNumeroUno").value; //"66"
	segundoNumero = document.getElementById("txtIdNumeroDos").value; //"24"

	//primerNumero = parseInt(primerNumero);
    //segundoNumero = parseInt(segundoNumero);

	primerNumero = parseFloat(primerNumero);
    segundoNumero = parseFloat(segundoNumero);
	
	
	resultado = primerNumero + segundoNumero;

	alert("El resultado es: " + resultado);

	//"66"
	//"24"


}
