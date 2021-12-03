
let num1 = prompt("Ingrese primer número: ")
let num2 = prompt("Ingrese el segundo número: ")
let reSuma = num1 + num2
let reResta = num1 - num2
let reDivision = num1 / num2
let remultiplica = num1 * num2
let reModulo = num1 % num2

console.log("operaciones numéricas...");

console.log("la suma de " + num1 + " + " + num2 +" es: " + reSuma);

console.log("la resta de " + num1 + " + " + num2 +" es: " + reResta);

console.log("la división de " + num1 + " + " + num2 +" es: " + reDivision);

console.log("la multiplicación de " + num1 + " + " + num2 +" es: " + remultiplica);

console.log("el módulo de " + num1 + " + " + num2 +" es: " + reModulo);

console.log("ahora vamos a transformar de celsius a fahrenheit...");

let grado =  prompt("Ingrese el grado en celsius...");
let fahrenheit = 32
let kelvin = 273.15
let transFahrenheit = parseFloat(grado) * (9/5) + parseFloat(kelvin);
let transKelvin = parseFloat(grado) + parseFloat(fahrenheit)

console.log("Los " + grado + "° Celcius son: " + transFahrenheit + "° Fahrenheit");
console.log("Los " + grado + "° Celcius son: " + transKelvin + "° Fahrenheit");

console.log("operaciones numéricas con 5 numeros...");
let numUno = prompt("Ingrese el primer número: ")
let numDos = prompt("Ingrese el segundo número: ")
let numTres = prompt("Ingrese el tercer número: ")
let numCuatro = prompt("Ingrese el cuarto número: ")
let numCinco = prompt("Ingrese el quinto número: ")
let sumaCinco = numUno + numDos + numTres + numCuatro + numCinco;
let promedio = sumaCinco / 5 ;

console.log("la suma de " 
+ numUno 
+ " + " 
+ numDos 
+ " +"
+ numTres 
+ " +"
+ numCuatro 
+ " +"
+ numCinco 
+ " es : " + sumaCinco); 

console.log("El promedio de los 5 numeros dados es : " + promedio);

console.log("Ahora vamos a calcular el tiempo...");

let dias = prompt("Ingresa la cantidad de dia que quieras");

let semana = dias/7  
let mes = dias/30
let año = dias/365

console.log("la cantidad de días que ingresaste fué "
+ dias );

console.log("y eso equivale a " + semana + " semanas");
console.log("también equivale a " + mes + " meses apróx");
console.log("Y por último equivale a " +  año +" años respectivamente.")

