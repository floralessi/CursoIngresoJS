/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
     let sueldo;
	 let aumento;
	 let incremento;
	 let resultado;

	 incremento= 10

	 sueldo= document.getElementById("txtIdSueldo").value;
	 sueldo= parseInt(sueldo);

	 aumento= (sueldo * incremento)/100
	 resultado= aumento + sueldo


	 document.getElementById("txtIdResultado").value= resultado


}
