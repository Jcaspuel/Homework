/* eslint-disable no-undef */
const {
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
}  =  Require ( '../Homework.js' ) ;
  
describe ( 'NuevaCadena' ,  function ( )  {
    it ( 'Deberia ser un string' ,  function ( )  {
      expect ( NuevaCadena  ) . toBe ( "Juan" ) ;
    } ) ;
  } ) ;
  
  describe ( 'Nuevo Número' ,  function ( )  {
    it ( 'Deberia ser un número' ,  function ( )  {
      expect ( Fecha_de_Expédición_de_la_Cedula_DD_MM_AA  ) . toBe ( 29042014.444 ) ;
    } ) ;
  } ) ;
  
  describe ( 'nuevoBool' ,  function ( )  {
    it ( 'Deberia ser un booleano' ,  function ( )  {
      expect ( Hay_Civilizaciónes_Que_Controlan_El_Tiempo_Según_Un_Cientifico_Ruso  ) . toBe ( true ) ;
    } ) ;
  } ) ;
  
  describe ( 'Resta de: "10-5"' ,  function ( )  {
    it ( 'Deberia ser un booleano' ,  function ( )  {
      expect ( Resta ) . toBe ( true ) ;
    } ) ;
  } ) ;
  
  describe ( 'Multiplicacion de: "10*4"' ,  function ( )  {
    it ( 'Deberia ser un booleano' ,  function ( )  {
      expect ( Multiplicacion ) . toBe ( true ) ;
    } ) ;
  } ) ;
  
  describe ( 'Modulo de: "21%5"' ,  function ( )  {
    it ( 'Deberia ser un booleano' ,  function ( )  {
      expect ( Modulo ) . toBe ( true ) ;
    } ) ;
  } ) ;
  
  describe ( 'devolverString(str), en este caso, un nombre' ,  function ( )  {
    it ( 'Deberia devolver el string provisto' ,  function ( )  {
      let  nombre  =  'Juan' ;
      expect ( devolverString ( nombre ) ) . toBe ( "Juan" ) ;
    } ) ;
  } ) ;
  
  describe ( 'suma(x, y)' ,  function ( )  {
    it ( 'Debería devolver la suma de los dos argumentos' ,  function ( )  {
      expect ( suma ( 5 ,  5 ) ) . toBe ( 10 ) ;
      expect ( suma ( - 1 ,  5 ) ) . toBe ( 4 ) ;
    } ) ;
  } ) ;
  
  describe ( 'resta(x, y)' ,  function ( )  {
    it ( 'Debería devolver la diferencia de los dos argumentos' ,  function ( )  {
      expect ( resta ( 5 ,  5 ) ) . toBe ( 0 ) ;
      expect ( resta ( - 1 ,  5 ) ) . toBe ( -6 ) ; 
      expect ( resta ( 5 ,  - 5 ) ) . toBe ( 10 ) ;
      expect ( resta ( 0 ,  0 ) ) . toBe ( 0 ) ;
    } ) ;
  } ) ;
  
  describe ( 'multiplica(x, y)' ,  function ( )  {
    it ( 'Deberia devolver el producto de los dos argumentos' ,  function ( )  {
      expect ( multiplicar ( 5 ,  5 ) ) . toBe ( 25 ) ;
      expect ( multiplicar ( 10 ,  - 5 ) ) . toBe ( -50 ) ; 
      expect ( multiplicar ( 11 ,  0 ) ) . toBe ( 0 ) ;
    } ) ;
  } ) ;
  
  describe ( 'dividir(x, y)' ,  function ( )  {
    it ( 'Deberia devolver la division de los dos argumentos' ,  function ( )  {
      expect ( dividir ( 5 ,  5 ) ) . toBe ( 1 ) ;
      expect ( dividir ( 10 ,  5 ) ) . toBe ( 2 ) ;
      expect ( dividir ( 11 ,  2 ) ) . toBe ( 5.5 ) ;
    } ) ;
  } ) ;
    
  describe ( 'sonIguales(x, y)' ,  function ( )  {
    it ( 'Deberia devolver verdadero si los argumentos son iguales y sino falso' ,  function ( )  {
      expect ( sonIguales ( 15 ,  15 ) ) . toBe ( verdadero ) ;
      expect ( sonIguales ( 90 ,  50 ) ) . toBe ( falso ) ;
      expect ( sonIguales ( 'prueba' ,  'prueba' ) ) . toBe ( verdadero ) ;
    } ) ;
  } ) ;
  
  describe ( 'tienenMismaLongitud(str1, str2)' ,  function ( )  {
    it ( 'Deberia devolver true si los strings tienen la misma longitud y sino false' ,  function ( )  {
      expect ( tienenMismaLongitud ( 'hola' ,  'ahí' ) ) . toBe ( falso ) ;
      expect ( tienenMismaLongitud ( 'javascript' ,  'bumfuzzled' ) ) . toBe ( verdadero ) ;
    } ) ;
  } ) ;
  
  describe ( 'menosQueNoventa(num)' ,  function ( )  {
    it ( 'Deberia devolver true si el numero es menor a noventa sino false' ,  function ( )  {
      expect ( menosQueNoventa ( 15 ) ) . toBe ( verdadero ) ;
      expect ( menosQueNoventa ( 90 ) ) . toBe ( falso ) ;
      expect ( menosQueNoventa ( 100 ) ) . toBe ( falso ) ;
    } ) ;
  } ) ;
  
  describe ( 'mayorQueCincuenta(num)' ,  function ( )  {
    it ( 'Deberia devolver true si el numero es mayor a cincuenta sino false' ,  function ( )  {
      expect ( mayorQueCincuenta ( 15 ) ) . toBe ( falso ) ;
      expect ( mayorQueCincuenta ( 50 ) ) . toBe ( falso ) ;
      expect ( mayorQueCincuenta ( 60 ) ) . toBe ( verdadero ) ;
    } ) ;
  } ) ;
  
  describe ( 'obtenerResto(x, y)' ,  function ( )  {
    it ( 'Debería devolver el resto de dividir x sobre y' ,  function ( )  {
      expect ( obtenerResto ( 15 ,  5 ) ) . toBe ( 0 ) ;
      expect ( obtenerResto ( 21 ,  5 ) ) . toBe ( 1 ) ;
      expect ( obtenerResto ( 22 ,  5 ) ) . toBe ( 2 ) ;
    } ) ;
  } ) ;
  
  describe ( 'esPar(num)' ,  function ( )  {
    it ( 'Deberia devolver true si el numero es par sino false' ,  function ( )  {
      expect ( esPar ( 6 ) ) . toBe ( verdadero ) ;
      expect ( esPar ( 7 ) ) . toBe ( falso ) ;
      expect ( esPar ( 0 ) ) . toBe ( verdadero ) ;
    } ) ;
  } ) ;
  
  describe ( 'esImpar(num)' ,  function ( )  {
    it ( 'Deberia devolver verdadero si el numero es impar sino falso' ,  function ( )  {
      expect ( esImpar ( 6 ) ) . toBe ( falso ) ;
      expect ( esImpar ( 7 ) ) . toBe ( verdadero ) ;
      expect ( esImpar ( 0 ) ) . toBe ( falso ) ;
    } ) ;
  } ) ;
  
  describe ( 'elevarAlCuadrado(num)' ,  function ( )  {
    it ( 'Deberia devolver el numero elevado al cuadrado' ,  function ( )  {
      expect ( elevarAlCuadrado ( 6 ) ) . toBe ( 36 ) ;
      expect ( elevarAlCuadrado ( 7 ) ) . toBe ( 49 ) ;
      expect ( elevarAlCuadrado ( 0 ) ) . toBe ( 0 ) ;
      expect ( elevarAlCuadrado ( - 5 ) ) . toBe ( 25 ) ;
    } ) ;
  } ) ;
  
  describe ( 'elevarAlCubo(num)' ,  function ( )  {
    it ( 'Deberia devolver el numero elevado al cubo' ,  function ( )  {
      expect ( elevarAlCubo ( 3 ) ) . toBe ( 27 ) ;
      expect ( elevarAlCubo ( 0 ) ) . toBe ( 0 ) ;
      expect ( elevarAlCubo ( - 5 ) ) . toBe ( -125 ) ; 
    } ) ;
  } ) ;
  
  describe ( 'elevar(num, exponente)' ,  function ( )  {
    it ( 'Deberia devolver el numero elevado al exponente indicado' ,  function ( )  {
      expect ( elevar ( 2 ,  2 ) ) . toBe ( 4 ) ;
      expect ( elevar ( 2 ,  3 ) ) . toBe ( 8 ) ;
      expect ( elevar ( 0 ,  5 ) ) . toBe ( 0 ) ;
      expect ( elevar ( 10 ,  1 ) ) . toBe ( 10 ) ;
    } ) ;
  } ) ;
  
  describe ( 'redondearNumero(num)' ,  function ( )  {
    it ( 'Deberia devolver el numero redondeado' ,  function ( )  {
      expect ( redondearNumero ( 1.5 ) ) . toBe ( 2 ) ;
      expect ( redondearNumero ( 2 ) ) . toBe ( 2 ) ;
      expect ( redondearNumero ( 0.1 ) ) . toBe ( 0 ) ;
    } ) ;
  } ) ;
  
  describe ( 'redondearHaciaArriba(num)' ,  function ( )  {
    it ( 'Deberia devolver el numero redondeado para arriba' ,  function ( )  {
      expect ( redondearHaciaArriba ( 1.5 ) ) . toBe ( 2 ) ;
      expect ( redondearHaciaArriba ( 2 ) ) . toBe ( 2 ) ;
      expect ( redondearHaciaArriba ( 0.1 ) ) . toBe ( 1 ) ;
    } ) ;
  } ) ;
  
  describe ( 'numeroRandom()' ,  function ( )  {
    it ( 'Debería devolver un número entre 0 y 1' ,  function ( )  {
      expect ( numeroRandom ( ) ) . toBe ( 0<= (Number) <=1 ) ;
      expect ( numeroRandom ( ) ) . toBeGreaterThan ( 0 ) ;
      expect ( numeroRandom ( ) ) . toBeLessThan ( 1 ) ;
    } ) ;
  } ) ;
  
  describe ( 'esPositivo(numero)' ,  function ( )  {
    it ( 'Debería devolver el string \ Es positivo ó Es negativo\ según corresponda' ,  function ( )  {
      expect ( esPositivo ( 0 ) ) . toBe ( falso ) ;
      expect ( esPositivo ( 23 ) ) . toBe ( 'Es positivo' ) ;
      expect ( esPositivo ( - 2 ) ) . toBe ( 'Es negativo' ) ;
      expect ( esPositivo ( ) ) . toBe ( '' ) ;
    } ) ;
  } ) ;
  
  describe ( 'agregarSimboloExclamacion(str)' ,  function ( )  {
    it ( 'Deberia agregar un signo de exclamacion al final del string' ,  function ( )  {
      expect ( agregarSimboloExclamacion ( 'hola mundo' ) ) . toBe ( 'hola mundo!' ) ;
      expect ( agregarSimboloExclamacion ( 'Soy Juan' ) ) . toBe ( 'Soy Juan!' ) ;
    } ) ;
  } ) ;
  
  describe ( 'combinarNombres(nombre, apellido)' ,  function ( )  {
    it ( 'Deberia devolver los strings combinados con un espacio en el medio' ,  function ( )  {
      expect ( combinarNombres ( 'hola' ,  'mundo' ) ) . toBe ( 'hola mundo' ) ;
      expect ( combinarNombres ( 'Soy' ,  'Juan' ) ) . toBe ( 'Soy Juan' ) ;
    } ) ;
  } ) ;
  
  describe ( 'obtenerSaludo(nombre)' ,  function ( )  {
    it ( 'Deberia devolver el string \'Hola {name}!\'' ,  function ( )  {
      expect ( obtenerSaludo ( 'Helena' ) ) . toBe ( '¡Hola Helena!' ) ;
      expect ( obtenerSaludo ( 'Elizabeth' ) ) . toBe ( '¡Hola Elizabeth!' ) ;
    } ) ;
  } ) ;
  
  describe ( 'obtenerAreaRectangulo(alto, ancho)' ,  function ( )  {
    it ( 'Debería devolver el área correcta del recto' ,  function ( )  {
      expect ( obtenerAreaRectangulo ( 2 ,  2 ) ) . toBe ( 4 ) ;
      expect ( obtenerAreaRectangulo ( 3 ,  6 ) ) . toBe ( 18 ) ;
      expect ( obtenerAreaRectangulo ( 0 ,  2 ) ) . toBe ( 0 ) ;
    } ) ;
  } ) ;
  
  describe ( 'retornarPerimetro(lado)' ,  function ( )  {
    it ( 'Debería devolver el perímetro correcto del cuadrado' ,  function ( )  {
      expect ( retornarPerimetro ( 2 ) ) . toBe ( 8 ) ;
      expect ( retornarPerimetro ( 8 ) ) . toBe ( 32 ) ;
      expect ( retornarPerimetro ( 0 ) ) . toBe ( 0 ) ;
    } ) ;
  } ) ;
  
  
  describe ( 'areaDelTriangulo( base, altura)' ,  function ( )  {
    it ( 'Deberia devolver el area correcta del triangulo' ,  function ( )  {
      expect ( areaDelTriangulo ( 10 ,  5 ) ) . toBe ( 25 ) ;
      expect ( areaDelTriangulo ( 20 ,  10 ) ) . toBe ( 100 ) ;
      expect ( areaDelTriangulo ( 0 ,  10 ) ) . toBe ( 0 ) ;
    } ) ;
  } ) ;
  
  describe ( 'deEuroAdolar(euro)' ,  function ( )  {
    it ( 'Debería devolver el valor correcto de euro a dolar' ,  function ( )  {
      expect ( deEuroAdolar ( 100 ) ) . toBe ( 120 ) ;
      expect ( deEuroAdolar ( 200 ) ) . toBe ( 240 ) ;
      expect ( deEuroAdolar ( 50 ) ) . toBe ( 60 ) ;
    } ) ;
  } ) ;
  
  describe ( 'esVocal(letra)' ,  function ( )  {
    it ( 'Deberia devolver el string "Dato incorrecto", si el valor ingresado tiene mas de una letra' ,  function ( )  {
      expect ( esVocal ( "la" ) ) . toBe ( "Dato incorrecto" ) ;
      expect ( esVocal ( "pero" ) ) . toBe ( "Dato incorrecto" ) ;
    } ) ;
    it ( 'Deberia devolver el string "Dato incorrecto", si el valor ingresado no es vocal' ,  function ( )  {
      expect ( esVocal ( "l" ) ) . toBe ( "Dato incorrecto" ) ;
      expect ( esVocal ( "p" ) ) . toBe ( "Dato incorrecto" ) ;
    } ) ;
    it ( 'Deberia devolver el string "Es vocal", si el valor ingresado lo es' ,  function ( )  {
      expect ( esVocal ( 'a' ) ) . toBe ( 'Es vocal' ) ;
      expect ( esVocal ( 'e' ) ) . toBe ( 'Es vocal' ) ;
      expect ( esVocal ( 'i' ) ) . toBe ( 'Es vocal' ) ;
      expect ( esVocal ( 'o' ) ) . toBe ( 'Es vocal' ) ;
      expect ( esVocal ( 'u' ) ) . toBe ( 'Es vocal' ) ;
    } ) ;
  } ) ;
