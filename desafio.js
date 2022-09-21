function obtenerMayor(x, y) {

  if (x > y) {
    return x;
  } else if (y > x) {
    return y;
  } else {
    return y;
  }

}

function mayoriaDeEdad(edad) {

  if (edad >= 18) {
    return "Allowed";
  } else {
    return "Not allowed";
  }

}
  
function conection(status) {

  if (status === 1) {
    return "Online";
  } else if (status === 2) {
    return "Away";
  } else {
    return "Offline";
  }

}

function saludo(idioma) {

  if (idioma === "aleman") {
    return "Guten Tag!";
  } else if (idioma === "mandarin") {
    return "Ni Hao!";
  } else if (idioma === "ingles") {
    return "Hello!";
  } else {
    return "Hola!";
  }

}

function colors(color) {

  switch (color) {
    case "blue":
      return "This is blue";
      break;

    case "red":
      return "This is red";
      break;

    case "green":
      return "This is green";
      break;

    case "orange":
      return "This is orange";
      break;

    default:
      return "Color not found";
      break;
  }

}

function esDiezOCinco(numero) {

  if (numero === 10 || numero === 5) {
    return true;
  } else {
    return false;
  }

}

function estaEnRango(numero) {

  if (numero < 50 && numero > 20) {
    return true;
  } else {
    return false;
  }

}

function esEntero(numero) {

  if (Number.isInteger(numero)) {
    return true;
  } else {
    return false;
  }

}

function fizzBuzz(numero) {

  if (numero % 3 === 0 && numero % 5 === 0) {
    return "fizzbuzz";
  } else if (numero % 5 === 0) {
    return "buzz";
  } else if (numero % 3 === 0) {
    return "fizz";
  } else {
    return numero;
  }

}

function operadoresLogicos(num1, num2, num3) {

  if (num1 === 0 || num2 === 0 || num3 === 0){
    return 'Error';
  } else if (num1 < 0 || num2 < 0|| num3 < 0){
    return 'Hay negativos';
  } else if (num1 > num2 && num1 > num3 && num1 >= 0){
    return 'Número 1 es mayor y positivo';
  } else if (num3 > num2 && num3 > num1){
    var num1 = num1 + num3;
    return num1;
  } else {
    return false;
  }

}

function esPrimo(numero) {

  if (numero >=2){
    for (var i = 2; i < numero; i++){
      if(numero % i === 0){
        return false;
      }
    }
    return true;
  } else {
    return false;
  }

}

function esVerdadero(valor){

  if (valor === true){
    return 'Soy verdadero';
  } else {
    return'Soy falso';
  }

}

function tablaDelSeis(){

  let tabla = [];
  for (let i = 0; i < 11; i++){
    tabla.push(6 * i);
  }
  return tabla; 

}

function tieneTresDigitos(numero){

  if (numero > 99 && numero < 1000){
    return true;
  } else {
    return false;
  }

}

function doWhile(numero) {

  var i = 0
  do{
    i = i + 1;
    numero = numero + 5;
  } while (i < 8);
  return numero;

}

function devolverPrimerElemento(array) {

  return array[0];

}


function devolverUltimoElemento(array) {

  return array[array.length-1];

}


function obtenerLargoDelArray(array) {

  var result = array.length;
  return result;

}


function incrementarPorUno(array) {

  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + 1;
  }
  return array;

}


function agregarItemAlFinalDelArray(array, elemento) {

  array.push(elemento);
  return array;

}


function agregarItemAlComienzoDelArray(array, elemento) {

  array.unshift(elemento);
  return array;

}


function dePalabrasAFrase(palabras) {

  var cadena = palabras.join(" ");
  return cadena;

}


function arrayContiene(array, elemento) {

  if (array.length === 0 ){
    return false;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === elemento){
        return true;
      } else {
        return false;
      }
    }
  }

}


function agregarNumeros(numeros) {

  var result = 0;
  for (let i = 0; i < numeros.length; i++) {
    result = result + numeros[i];
  }
  return result;

}


function promedioResultadosTest(resultadosTest) {

  var average = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    average = average + resultadosTest[i];
  }
  result = average / resultadosTest.length;
  return result;

}


function numeroMasGrande(numeros) {

  var result = Math.max(...numeros);
  return result;

}


function multiplicarArgumentos() {

  if (arguments.length === 0) return 0;

  var total = 1;
  for (let i = 0; i < arguments.length; i++) {
    total = total * arguments[i];
  }

  return total;

}


function cuentoElementos(arreglo){

  var result = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18){
      result++;
    }
  }

  return result;

}


function diaDeLaSemana(numeroDeDia) {

  if (numeroDeDia === 1 || numeroDeDia === 7){
    return 'Es fin de semana';
  } else if (numeroDeDia >= 2 && numeroDeDia <= 6 ){
    return 'Es dia Laboral';
  } else {
    return 'El numero ingresado no esa válido';
  }

} 


function empiezaConNueve(n) {

  var num = n.toString().charAt(0); 
  if (num === '9') {
    return true;
  } else {
    return false;
  }

}


function todosIguales(arreglo) {

  var equal = Boolean;

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[0] !== arreglo[i]){
      equal = false;
      return equal;
    } else{
      equal = true;
    }
  }

  return equal;

} 


function mesesDelAño(array) {

  var nuevoArray = [];
  for(let i= 0; i<array.length; i++) {
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      nuevoArray.push(array[i]);
    }
  }
  if(nuevoArray.length < 3) {
    return "No se encontraron los meses pedidos";
  }
  else {
      return nuevoArray;
  }

}

function mayorACien(array) {

  var result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100){
      result.push(array[i]);
    }
  }
  return result;

}


function breakStatement(numero) {

  var result = [];
  var i = 0;
  do{
    i = i + 1;
    numero = numero + 2;
    result.push(numero);

    if (numero === i){
      return "Se interrumpió la ejecución";
    }
  } while (i < 10);
  return result;

}


function continueStatement(numero) {

  var array = [];
  var suma = numero;
  for(var i= 0; i<10; i++) {
    if(i === 5) continue;
    else {
      suma = suma + 2;
      array.push(suma);
    }
  }
  return array;

}