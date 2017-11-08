window.onload = function() {

	//Llamando al botón
	var boton = document.getElementById("btn");
	boton.addEventListener("click", function(){
		//obteniendo lo que se escriba en el textarea
		var comments = document.getElementById("textarea").value; 
		document.getElementById("textarea").value = ""; //para borrar luego de que presiones el botón.


	//llamando al contenedor que va a tener los comentarios ya submitidos.
		var container = document.getElementById("container");
		//creamos un nuevo elemento p
		var parrafo = document.createElement("p");
		//creamos un nuevo nodo de texto que contiene lo escrito en el textarea
		var text = document.createTextNode(comments);

		parrafo.appendChild(text); //añadiendo el texto al p
		container.appendChild(parrafo); //añadiendo parrafo con texto al contenedor que se encuentra en el html

	})
};