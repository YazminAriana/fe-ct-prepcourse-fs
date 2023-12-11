/*re", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses ⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
  
      return array.shift('');
      //otra manera mas facil que nos va a marcar lo que este en la pocicion que le indiquemos 
      //return array[0]; 

   
 }

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
  
      return array.pop('');
      //otra forma es calcular la longitud del array y restarle 1 ya que lengt empieza a contar de a 1 y no de a 0
     // return array[array.lengt - 1];
  
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
  
      return array.length;
  
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
  
      return array.map(array => array + 1);
 //otra forma seria con el bucle for
 //for (i=0 ; i < array.lengtn ; i++){
   //array[i] += 1;
//return array;
// }
}


function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
  
      array.push(elemento);
      return array;

}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
  
     array.unshift(elemento);
     return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
return palabras.join (' ');

 
}



 function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
  return array.includes(elemento);
  //tambien puede resolverse con el ciclo for
  //for(i = 0 ; i < array.length ; i++){
//     if(array[i] === elemento){
  // return true;
//} return false
  //}
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   const resultado = arrayOfNums.reduce((total,num) => total+ num, 0);
   return resultado;

   //otra forma
   //return arrayOfNums.reduce(function (acc, ele){return acc + ele;})
}


function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var sumaNotas=0;
   for (var i=0 ; i< resultadosTest.length; i++) {
      sumaNotas += resultadosTest [i];
   }
   const promedio = sumaNotas / resultadosTest.length;
   return promedio;
   //otra forma es
   //return (resultadosTest.reduce(function(acc,element){return acc t element;})/resultadosTest.length)

   

}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   let numeroMasGrande = arrayOfNums [0];
   for (let i = 1; i< arrayOfNums.length ; i++) {
      if (arrayOfNums[i] > numeroMasGrande){
         numeroMasGrande= arrayOfNums[i];
      }
   }
   return numeroMasGrande;
   //otra opcion con math.max
   // return math.max(...arrayOfNums);

   //otra opcion con for of
   //var max = arrayOfNums[0];
   //for (var num of arrayOfNums){
     // if(max < num){
       //  max = num;
     // }
   //} return max;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
 if(arguments.length === 0){
   return 0;
 } else if(arguments.length === 1){
   return arguments[0];
 }else{
 var producto=1;
 for (let i=0 ; i <arguments.length ; i ++){
   producto=producto*arguments[i];
   arguments[i];
 }
 }
   return producto;
   
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
 let elementoMayorA18 = array.filter(elemento => elemento > 18);
   return elementoMayorA18.length;
 // otra opcion con for
 // var mayores = 0;
 //for (var i = 0; i < array.length; i++){
   //if(array[i] > 18){
   //  // mayores++; 
   //}
 //}

}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
  //const dia = ['sabado' , 'domingo' , 'lunes' , 'martes' , 'miercoles' , 'jueves' , 'viernes'] 

  if(numeroDeDia === 1 || numeroDeDia === 7){
   return 'Es fin de semana'
  } 
  else{
   return 'Es dia laboral'
  }
  //otra forma con switch
  //switch(numeroDeDia){
  //case 7
  //return 'es fin de semana'
  //case 1
  //return "es fin de semana"
  // default:
  //  return 'es dia laboral'
//}

//otra opcion con ternarios
// return (numeroDeDia > 1 && numeroDeDia < 7) ? 'es dia laboral' : 'es fin de semana';
}
function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
 var empiezaConNueve = num.toString();
 var numero = empiezaConNueve.charAt(0);
   if(numero === "9"){
      return true
   } return false
   // .toString convierte un numero en string ej 567 en '567' 
   //otra opcion seria 
   //return num.toString()[0] === '9';
   //otra opcion con ternarios
   //return (num.toStrin()[0]=== "9");
  

}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
  let primerElemento = array[0];

for(i = 1 ; i < array.length; i++){
   if(array[i] == primerElemento){
      return true 
   } return false
}

//otra opcion seria
//var primer = array[0];
//for (i= 1; i < array.lenght; i++ ){
//if (array[i] != primer){
//   return false;
//}
//} return true
}
function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre" guardalos en un nuevo arreglo y retornalo
   //Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var arraybuscado=[];
   for(i=0 ; i< array.length; i++){
      if (array[i] === "Enero"|| array[i] === "Marzo" || array [i] === "Noviembre"){
      arraybuscado.push(array[i])
   }
} if (arraybuscado.length != 3) {
   return "No se encontraron los meses pedidos"
} return arraybuscado
 // otra opciom con for of
 //meses = [];
 //for (mes of array){
   //if ( mes === 'enero' || mes === 'marzo'|| mes === 'noviembre'){
    //  mesesDelAño.push(mes);
    //}
 // }
 //if (meses.lenght === 3){
   //return meses
   //else{
     // return 'no se encontraron los meses pedidos'
   //}
 //}
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
  
   let array = []
   for ( let i = 0 ; i < 11; i++){
   array.push(i * 6)
   }return array
   //otra opcion seria
   //var resultado = i * 6 ;
   //retltado.push(resultado);
   //return resultado
} 


function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
  
  var mayorQueCien = array.filter(elemento => elemento > 100); 
  return mayorQueCien;
  //otra forma seria
  //var mayorQueCien =[]
  //for (var i = 0; i < array.length; i++ ){
   //if (array[i] > 100){
      //mayorACien.push(array[i])
  // }
   //}
  //}

} 

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
     
   let nuevoValor = []; 
   for( let i = 0 ; i < 10 ; i++){
        let resultado = num + 2; 
        nuevoValor.push(resultado);
        if(resultado === i) {
           break;
              }return "Se interrumpió la ejecución";
       } 
        return nuevoValor;
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código: 

   for(let i =  0 ; i < 10 ; i++){

   }
  
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
