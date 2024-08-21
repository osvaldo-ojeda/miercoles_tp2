# Clase de Node.js

## Introducción

En nuestra primera clase, cubrimos varios temas fundamentales para comenzar a trabajar con Node.js.

### ¿Qué es JavaScript?

JavaScript es un lenguaje de programación que se utiliza principalmente para agregar funcionalidad interactiva a las páginas web. También se utiliza en el desarrollo de servidores y aplicaciones de servidor con Node.js.

### ¿Qué es Node.js?

Node.js es un entorno de ejecución de JavaScript que nos permite ejecutar JavaScript en el servidor. Es ideal para construir aplicaciones escalables y eficientes.

### ¿Qué podemos hacer con Node.js?
Node.js es increíblemente versátil y se puede utilizar para una amplia variedad de aplicaciones. Aquí hay algunos ejemplos de lo que puedes hacer con Node.js:

- Servidores web: Puedes usar Node.js para crear servidores web robustos y eficientes. Estos servidores pueden manejar todo, desde servir archivos estáticos hasta procesar solicitudes de API.
- Herramientas de línea de comandos: Node.js es genial para construir herramientas de línea de comandos. Puedes construir scripts para automatizar tareas, interactuar con APIs, y mucho más.
- Aplicaciones en tiempo real: Con Node.js, puedes construir aplicaciones en tiempo real como chats, juegos multijugador, y sistemas de colaboración en vivo.
- Microservicios: Node.js es una excelente opción para construir microservicios debido a su eficiencia y capacidad para manejar muchas solicitudes simultáneamente.

## Configuración del entorno de desarrollo

Para comenzar a trabajar con Node.js, necesitamos configurar nuestro entorno de desarrollo. Esto incluye la instalación de varias herramientas y la configuración de algunas configuraciones.

### Instalación de Visual Studio Code

Visual Studio Code es un editor de código fuente desarrollado por Microsoft. Es gratuito y está disponible para Windows, macOS y Linux. Puedes descargarlo desde aquí.

### Instalación de Node.js

Node.js se puede descargar desde su sitio web oficial. Asegúrate de descargar la versión LTS (Long Term Support) para la mejor compatibilidad.

### Instalación de Git

Git es un sistema de control de versiones distribuido que nos permite rastrear los cambios en nuestro código a lo largo del tiempo. Puedes descargar Git desde aquí.
## Configuracion de git 

git config --global user.name tuNombre

git config --global user.email tuemail@gmail.com

git config --global -l

git config --global -e


### para windows
 git config --global core.autocrlf true

 ### para mac o linux
 git config --global core.autocrlf input

 git branch -m main master // para cambiar el nombre de la rama

 git config --global push.default current

 git config --global core.editor "code --wait"


El comando git config --global core.autocrlf se utiliza para configurar cómo Git maneja los finales de línea en los archivos de texto.

En sistemas Unix-like (como Linux o Mac), las líneas en los archivos de texto terminan con un carácter de salto de línea (\n). En Windows, las líneas terminan con un retorno de carro seguido de un salto de línea (\r\n).

Cuando trabajas en un proyecto con personas que usan diferentes sistemas operativos, estos diferentes finales de línea pueden causar problemas. Git puede convertir automáticamente los finales de línea para vos.

- git config --global core.autocrlf true: Esto se utiliza en Windows. Convierte los finales de línea a \r\n cuando se comprueba un archivo y a \n cuando se confirma un archivo.
- git config --global core.autocrlf input: Esto se utiliza en sistemas Unix-like. Convierte los finales de línea a \n cuando se confirma un archivo, pero no hace nada cuando se comprueba un archivo.
- git config --global core.autocrlf false: No hace ninguna conversión.
