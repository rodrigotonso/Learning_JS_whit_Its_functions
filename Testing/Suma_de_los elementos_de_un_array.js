/**
 * # Suma de los elementos de un array
 *
 * Con la función -reduce()- se puede obtener la suma de todos los números de un array.
 * Existen varios métodos para lograrlo, comparamos algunos y únicamente en rendimiento.
 * Presione "F12" para abrir la consola y ver el resultado.
 */

"use strict"  //Expresíón literal que obliga a correctas expresiones en JavaScript
/**
 * # Variables globales
 * Llama a intBetween para obtener un array con todos los enteros entre dos números.
 * @type {Array}
 */
 var values = intBetween(0, 1000000);

/**
 * Crea un array con todos los números enteros entre dos números con una validación básica para corroborar que los parámetros sean enteros.
 * @param  {number} min - Número inicial.
 * @param  {number} max - Número final.
 * @return {array} numbers - Array con números ordenados entre los valores recibidos por parametro
 */
  function intBetween(min, max){
    if (parseInt(min, 10) && parseInt(max, 10)) {
      let numbers = [];
      for (let i = min; i <= max; i++) {
        numbers.push(i);
      }
      return numbers;
    }else{
      console.log("Not a number");
    }
  }

/**
 * El código anterior solo proporciona datos para poder usar en las funciones a analizar, por lo que no será explicado en esta ocasión.
 */

/**
 * Con el siguiente código se analiza el rendimiento de distintas funciones para obtener la suma de todos los elementos del array.
 * Se obtuvo que la función de mejor rendimiento es -mySum2()- seguida muy próximamente por -mySum1()-.
 * Para ver los resultados abrir esta página web en su navegador y presione "F12" para ver los resultados en consola-
 */



/**
 * Recorre el array con un ciclo for sumando cada elemento en la variable "sum".
 * @return {number} sum - Suma de todos los elementos del array.
 */
  function mySum1(){
    let sum = 0;
    console.time("Example1");
      for (let i = 0 ;i < values.length; i++) {
        sum += values[i];
      }
    console.timeEnd("Example1");
    return sum;
  }

/**
 * Para mejorar el rendimiento se guarda el largo del array en la variable "max" para no calcularlo en cada instancia.
 * @return {number} sum - Suma de todos los elementos del array.
 */
  function mySum2(){
    let sum = 0;
    console.time("Example2");
      let max = values.length;
      for (let i = 0 ;i < max; i++) {
        sum += values[i];
      }
    console.timeEnd("Example2");
    return sum;
  }

/**
 * Recorre el array con un ciclo forEach sumando cada elemento en la variable "sum".
 * @return {number} sum - Suma de todos los elementos del array.
 */
  function mySum3(){
    let sum = 0;
    console.time("Example3");
      values.forEach(function(value){
        sum += value;
      });
    console.timeEnd("Example3");
    return sum;
  }

/**
 * Utiliza la función reduce para obtener la suma de los elementos del array.
 * @return {number} sum - Suma de todos los elementos del array.
 */
  function mySum4(){
    console.time("Example4");
      let sum = values.reduce((a, b) => a + b, 0);
    console.timeEnd("Example4");
    return sum;
  }

/**
 * Al cargarse la página ejecuto y muestro en consola la funciones a estudiar
 */
  window.addEventListener("load", function(event) {
    console.log(mySum1());
    console.log(mySum2());
    console.log(mySum3());
    console.log(mySum4());
  });
