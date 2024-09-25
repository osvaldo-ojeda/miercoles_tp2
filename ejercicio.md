Consigna:

Crea un CLI en Node.js que permita a los usuarios interactuar con él mediante entradas de teclado y mostrar los resultados en la pantalla.

Manejar errores.

Usar modulo fs con promesas

 El CLI debe tener los siguientes comandos:

- pwd: Muestra el directorio actual.
- date: Muestra la fecha actual.
- ls: Muestra la lista de archivos y carpetas en el directorio actual.
- cat: Muestra el contenido de un archivo especificado.
- echo: Muestra el texto especificado en la pantalla.
- touch: Crea un nuevo archivo con el nombre especificado.

  ### Requisitos:

Utiliza el módulo process.stdin para leer entradas de teclado.
Utiliza el módulo process.stdout para mostrar los resultados en la pantalla.
Utiliza el módulo fs para interactuar con el sistema de archivos.
Utiliza el módulo path para trabajar con rutas de archivos y carpetas.
El CLI debe ser capaz de manejar comandos con opciones y argumentos.
Ejemplos de Entradas y Salidas:

> Entrada: pwd

> Salida: /home/user

> Entrada: date

> Salida: Fri Mar 19 2021 14:30:00 GMT-0500

> Entrada: ls

> Salida:
> index.js
> package.json

> Entrada: cat file1.txt

> Salida: Este es el contenido del archivo file1.txt

> Entrada: echo Hola Mundo

> Salida: Hola Mundo

> Entrada: touch newfile.txt

> Salida: File created: newfile.txt

Notas:

Asegúrate de que el CLI sea capaz de manejar comandos con errores, como cuando se intenta acceder a un archivo o directorio que no existe.
Asegúrate de que el CLI sea capaz de manejar comandos con opciones y argumentos.
Asegúrate de que el CLI sea capaz de manejar entradas de teclado con espacios y otros caracteres especiales.
