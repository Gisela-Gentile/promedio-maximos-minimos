import "./styles.css";
/*Diseñar un algoritmo que lea números enteros
hasta teclear 0. 
Determinar y mostrar el máximo, el minimo y 
la media de todos los números ingresados*/

let minimo, maximo, suma, numero, promedio, contador: number;
numero = Number(prompt("Ingrese un número entero (0 para cortar)"));
contador = 0;
suma = 0;
promedio = 0;

minimo = numero;
maximo = numero;

while (numero !== 0) {
  if (numero < minimo) {
    minimo = numero;
  } else if (numero > maximo) {
    maximo = numero;
  }
  suma += numero;
  contador++;
  numero = Number(prompt("Ingrese un número entero (0 para cortar)"));
}
if (contador > 0) {
  promedio = suma / contador;
  console.log("El mínimo es: " + minimo);
  console.log("El máximo es: " + maximo);
  console.log("El promedio es: " + promedio);
} else {
  console.log("¡No ingreso ningún número!");
}
