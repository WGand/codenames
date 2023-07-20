# Servidor y Frontend del juego de mesa CODENAMES

Esta es una implementación simple del famoso juego de mesa - Codenames (de Vlaada Chvátil) - utilizando Node.js, Angular y Google Material UI. No se utiliza ninguna base de datos, todos los juegos se mantienen en la memoria en tiempo de ejecución y se eliminan después de una hora de inactividad.

## Steps to run
 - Instalar [Node.js](https://nodejs.org/en/)
 - `$ git clone https://github.com/WGand/codenames.git` - clonar este repositorio
 - `$ cd codenames`
 - `$ npm i` - instalar dependencias
 - `$ npm run build` - compilar el código fuente en `./dist`
 - `$ npm run start` - iniciar el servidor del juego y el frontend
 - Abrir `http://localhost:8095/` y disfrutar

## Crear una imagen de Docker a partir del código fuente local
 - Instalar [Node.js](https://nodejs.org/en/)
 - Instalar [Docker](https://www.docker.com/)
 - `$ git clone https://github.com/WGand/codenames.git` - clonar este repositorio
 - `$ cd codenames`
 - `$ npm i` - instalar dependencias
 - `$ npm run build-docker`
 
La imagen resultante se etiquetará como `codenames-game-server:latest`.

## Crear solo una imagen de Docker (utilizando una construcción por etapas)
 - Instalar [Docker](https://www.docker.com/)
 - `$ git clone https://github.com/WGand/codenames.git` - clone this repo
 - `$ cd codenames`
 - `$ docker build . -f dockerfile.staged -t codenames-game`

 ## Opciones para usar con Docker Swarm
 - Instalar [Docker](https://www.docker.com/)
 - `$ git clone https://github.com/WGand/codenames.git` - clone this repo
 - `$ cd codenames`
 - `$ docker swarm init`
 - `$ docker stack deploy -c compose.yaml codenames`
 
## Opciones de variables de entorno
 - El puerto HTTP predeterminado (8810) se puede cambiar a través de CODENAMES_HTTP_PORT `CODENAMES_HTTP_PORT`
 - `NO_CONSOLE_COLORS=1` para desactivar la salida colorida en la consola

## Advertencias
 - Es posible que se deba usar el comando `$ sudo` antes de cualquier comando docker, dependerá de la configuración de la instalación de su [Docker](https://www.docker.com/) 

## Cómo jugar
Consulta [Wikipedia](https://en.wikipedia.org/wiki/Codenames_(board_game)) para conocer las reglas y detalles.

## Jugar ahora
Actualmente está desplegado y disponible para jugar en [https://codenames-ucab-proyecto.fly.dev/codenames-server](https://codenames-ucab-proyecto.fly.dev/codenames-server)