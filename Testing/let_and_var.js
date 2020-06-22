<script>
/**
 * En ECMAScript 6 (2015) se incorporó una nueva forma de declarar variables utilizando la palabra reservada -let-. Este nuevo modo de declarar variables viene a ofrecer una nueva manera de delimitar el entorno de una variable.
 *
 * var: La visibilidad de una variable declarada con -var- es el ambito de la función que la contiene
 * let: La visibilidad de una variable declarada con -let- es unicamente dentro de las llaves en la que se ha definido.
 *
 * A continuación mostraremos varios ejemplos.
 */

"use strict"  //Expresíón literal que obliga a correctas expresiones en JavaScript


/**
 * Una de las principales diferencias entre -let- y -var- es la integridad declarativa, -let- no permite declarar dos veces la misma variable.
 * (Cambiar @ por / en la linea de abajo para ver el ejemplo)
 *@

function var_or_let_redeclare(){
	var test_var_1 = "Declare var";	var test_var_1 = "redeclare var";	console.log("test1: "+test_var);
	var test_var_2 = "Declare var";	let test_var_2 = "redeclare let";	console.log("test2: "+test_var_2); // TypeError: redeclaration of variable
	let test_var_3 = "declare let";	let test_var_3 = "redeclare let";	console.log("test3: "+test_var_3); // TypeError: redeclaration of variable
	let test_var_4 = "declare let";	var test_var_4 = "redeclare var";	console.log("test4: "+test_var_4); // TypeError: redeclaration of variable
	// Es una mala practica haber declarado los console.log() antes de haber declarado todas las variables, ya que disimula el izado.
}

	// No se utiliza try...catch por que el izado de variables genera la excepcion fuera del bloque.
	function var_or_let_try_catch_redeclare(){
		try 	{ let test_var = "declare let";	var test_var = "redeclare var";	console.log("test: "+test_var); }
		catch	{ console.log("in catch"); } // TypeError: redeclaration of variable
	}
/*  Fin ejemplo  */



/**
 * Declaración de variables en el entorno de una función. (No hay diferencias)
 */
function var_or_let(){
	var test_var = "Declare var";	let test_let = "declare let";
	console.log(test_var);				console.log(test_let);
}
// window.addEventListener("ready",var_or_let());


/**
 * Declaración de variables en el entorno de funciones con hijos internos (No hay diferencias)
 */
function var_or_let_with_internal_sun(){
	var test_var = "Declare var";	let test_let = "declare let";
	function sun_var_or_let(){
		console.log(test_var);			console.log(test_let);
	}
	sun_var_or_let();
}

/**
 * Declaración de variables en el entorno de funciones con hijos externos (No hay diferencias).
 */
function var_or_let_with_external_sun(){
	var test_var = "Declare var";	let test_let = "declare let";
	sun_var_or_let();
}
function sun_var_or_let(){
	console.log(test_var); // Error: Uncaught ReferenceError (Variable no definida)
	console.log(test_let); // Error: Uncaught ReferenceError (Variable no definida)
}


/**
 * Declaración de variables en hijos en el entorno de funciones con hijos internos (No hay diferencias)
 */
function var_or_let_with_internal_sun_2(){
	function sun_var_or_let(){
		var test_var = "Declare var";	let test_let = "declare let";
	}
	sun_var_or_let();
	console.log(test_var); // Error: Uncaught ReferenceError (Variable no definida)
	console.log(test_let); // Error: Uncaught ReferenceError (Variable no definida)
}

// window.addEventListener("ready",var_or_let());
window.addEventListener("ready",var_or_let_with_internal_sun_2());

</script>