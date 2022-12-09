// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:.

const NuevaCadena  =  "Juan";

// Crea una variable numérica, puede ser cualquier número:
const  Fecha_de_Expédición_de_la_Cedula_DD_MM_AA  = 29042014.444  ;

// Crea una variable booleana:
const  Hay_Civilizaciónes_Que_Controlan_El_Tiempo_Según_Un_Cientifico_Ruso  =  True ;

// Resuelve el siguiente problema matematico:
const  Resta  =  10  -  5  ===  5 ;

// Resuelve el siguiente problema matematico:
const  Multiplicacion  =  10  *  4  ===  40  ;

// Resuelve el siguiente problema matematico:
const  Modulo  =  21  %  5  ===  1 ;

// En los próximos 22 problemas, deberá completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambia los nombres de las funciones.


function  devolverString ( nombre )  { return nombre; }

  // "Regresar" la cadena provista: str
  // Tu codigo: 

function  suma ( x ,  y )  { return x + y; }
  // "x" e "y" son numeros
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu codigo:

function  resta ( x ,  y )  { return x - y; }
  // Resta "y" de "x" y devuelve el valor
  // Tu codigo:

function  multiplicar ( x ,  y )  { return x * y ;}
  // Multiplica "x" por "y" y devuelve el valor
  // Tu codigo:

function  dividir ( x ,  y )  { return x / y ;}
  // Divide "x" entre "y" y devuelve el valor
  // Tu codigo:

function  sonIguales ( x ,  y )  { if ( x == y ) { return "Verdadero" ;} { return "falso" } ;}
  // Devuelve "verdadero" si "x" e "y" son iguales
  // De lo contrario, devuelve "falso"
  // Tu codigo:

function  tienenMismaLongitud ( palabra_1 ,  palabra_2 )  
{ if ( palabra_1.length == palabra_2.length ) 
{ return true ;}  {return "falso"} ;}
  // Devuelve "true" si las dos cadenas tienen la misma longitud
  // De lo contrario, devuelve "falso"
  // Tu codigo:

function  menosQueNoventa ( numero )  
{ if ( numero < 90 ) { return true ;} {return "falso"} ;}
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "falso"
  // Tu codigo:

function  mayorQueCincuenta ( y )  { if ( y > 50 ) { return true ;} {return "falso"} ;}
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "falso"
  // Tu codigo:

function  obtenerResto ( x ,  y )  { return x % y ;}
  // Obten el resto de la división de "x" entre "y"
  // Tu codigo:

function  esPar ( numero ) 
 { if ( numero % 2 == 0 ) {return true;}  {return "falso"} ;}
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "falso"
  // Tu codigo:

function  esImpar ( numero ) 
{ if ( numero % 2 == 1 ) {return true;} {return "falso"} ;}
// Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "falso"
  // Tu codigo:

function  elevarAlCuadrado ( numero )  { return numero ** 2 ;}
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: ¡No es razón cuadrada!
  // Tu codigo:

function  elevarAlCubo ( numero )  { return numero ** 3 ;}
  // Devuelve el valor de "num" elevado al cubo
  // Tu codigo:

function  elevar ( x , y )  { return Math.pow (x,y) ;}
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu codigo:

function  redondearNumero ( numero ) 
 { return Math.round ( numero ) ;}
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu codigo:

function  redondearHaciaArriba ( numero ) 
 { return Math.ceil (numero) ;}
  // Redondea "num" hacia arriba (al proximo entero) y devuélvelo
  // Tu codigo:

function  numeroRandom ( )  { return Math.random () ;}
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()

function  esPositivo ( numero ) 
 { if ( numero === 0 ) { return false ;} 
 else if ( numero > 0 ) { return "Es positivo" ;} else if ( numero < 0 ) { return "Es negativo" ;} { return "" } ;}
  //La funcion va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el numero es 0, devuelve false

function  agregarSimboloExclamacion ( str )  { return str + "!" ;}
  // Agrega un símbolo de exclamación al final de la cadena "str" ​​y devuelve una nueva cadena
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu codigo:

function  combinarNombres ( name , apellido ) 
 { var combinado = name+" "+apellido;
 return combinado ;}
  // Devuelve "nombre" y "apellido" combinados en una cadena y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu codigo:

function  obtenerSaludo ( name )  { return "¡Hola "+name+"!" ;}
  // Toma la cadena "nombre" y concatena otra cadena en la cadena para que tome la siguiente forma:
  // "Martín" -> "¡Hola Martín!"
  // Tu codigo:

function  obtenerAreaRectangulo ( alto ,  ancho )  { return alto*ancho ;}
  // Retornar el area de un rectangulo teniendo su altura y ancho
  // Tu codigo:

function  retornarPerimetro ( lado ) { return lado*4 ;}
  //Escibe una función a la cual recibe el valor del lado de un cuadrado y devuelve su perímetro.
  //Escribe tu codigo aqui

function  areaDelTriangulo ( base ,  altura ) { return ((base*altura)/2) ;}
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu codigo aqui

function  deEuroAdolar ( euro ) { return euro*1,2+" USD" }
  //Supongamos que 1 euro equivale a 1,20 dólares. Escribe un programa que
  //como parametro un numero de euros y calcule el cambio en dolares.
  //Escribe tu codigo aqui

function  esVocal ( letra ) { if ( letra.length > 1 ) {return "Dato incorrecto";}
 if ( letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u" ) 
 {return  "Es vocal";} return  "Dato incorrecto" ;}
  //Escriba una función que reciba una letra y, si es una voz, muestre el mensaje “Es vocal”.
  //Verificar si el usuario ingresó una cadena de más de un carácter, en ese caso, informarle
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu codigo aqui

// No modificar nada debajo de esta linea
// --------------------------------

módulo_exportaciones  =  {
  NuevaCadena ,
  Fecha_de_Expédición_de_la_Cedula_DD_MM_AA ,
  Hay_Civilizaciónes_Que_Controlan_El_Tiempo_Según_Un_Cientifico_Ruso ,
  Resta ,
  Multiplicacion ,
  Modulo ,
  devolverString ,
  tienenMismaLongitud ,
  sonIguales ,
  menosQueNoventa ,
  mayorQueCincuenta ,
  suma ,
  resta ,
  dividir ,
  multiplicar ,
  obtenerResto ,
  esPar ,
  esImpar ,
  elevarAlCuadrado ,
  elevarAlCubo ,
  elevar ,
  redondearNumero ,
  redondearHaciaArriba ,
  numeroRandom ,
  esPositivo ,
  agregarSimboloExclamacion ,
  combinarNombres ,
  obtenerSaludo ,
  obtenerAreaRectangulo ,
  retornarPerimetro ,
  areaDelTriangulo ,
  deEuroAdolar ,
  esVocal ,
} ;