## Ejercicio 1: Encuentra el número más grande en un arreglo:
Crear una función que reciba por parámetros un array de numeros y encuentre el número más grande en un arreglo
Ejemplo:
const numeros = [10, 5, 20, 15]; //Resultado 20

## Ejercicio 2: Calcula la suma de todos los elementos en un arreglo:
Crear una función que reciba por parámetros un array de numeros y calcule la suma de todos los elementos en un arreglo
Ejemplo:
const numeros = [10, 5, 20, 15]; //Resultado 20

## Ejercicio 3: AbbrevName
Creá una función llamada abbrevName que reciba como parámetro un string (""). Este string tiene que incluir un espacio. La Función deberá convertir el string recibido en iniciales.

``abbrevName("Sam Harris") ==> "S.H"
 abbrevName("Evan Cole") ==> "E.C"
 abbrevName("David Mendieta") ==> "D.M"``

 ## ejercicio 4: Única propiedad
Declará una función llamada oneProperty que reciba un arreglo de objetos como parámetro y un string. Deberá retornar un nuevo arreglo de objetos, teniendo como propiedad al string pasado como parámetro.

``Ejemplo: 
let arreglo = [ { name: “Kuka”, edad:3 }, { name: “Canela”, edad:4 } ]
oneProperty(arreglo, “edad”) debe retornar [ { edad:3 }, { edad: 4 } ]
oneProperty(arreglo, “name”) debe retornar [ { name: “Kuka”}, { name: “Canela” } ]``

## Ejercicio: Filtrado y transformación de un array

Dado el siguiente array de objetos que representan a estudiantes:

JavaScript

``const estudiantes = [
  { nombre: "Juan", edad: 17, curso: "Primero" },
  { nombre: "Ana", edad: 18, curso: "Segundo" },
  { nombre: "Carlos", edad: 16, curso: "Primero" },
  { nombre: "María", edad: 19, curso: "Tercero" },
];``


Crear una función que reciba por parámetros un array y haga las siguientes tareas:

- Filtrado: Crea un nuevo array que contenga solo a los estudiantes que están en “Primero”. 
- Transformación: A partir del array filtrado, crea un nuevo array que contenga solo los nombres de los estudiantes. 
- Ordenación: Ordena el array de nombres alfabéticamente. 
- Impresión: Imprime el array ordenado en la consola.


