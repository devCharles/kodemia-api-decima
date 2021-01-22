
# API express + mongoose

## index.js
Este archivo tiene la tarea de levantar nuestra aplicación 

## server.js
Este archivo guarda la definición del servidor
  - Que rutas van a existir
  - Que middlewares de van a usar
  - Aqui se montan los routers al servidor

## models
Alberga nuestros modelos de base de datos
> Un modelo es la representación de una colección y consta de un nombre de coleccion, y un schema

## usecases
Alberga funciones que puede ejecutar el usuario en el sistema
> Agrupadas por entidades

## routes
Alberga las rutas de nuestro servidor
> Agrupadas por entidades

## lib
Alberga codigo reutilizable a traves de todas las capas de la arquitectura

## Proceso de desarollo

Este es el proceso que debemos seguir cuando necesitamos agregar un nuevo endpoint a nuestra API

1. Modelos: Asegurarnos de tener el acceso a datos que necesitamos para la tarea o crear el modelo
2. UseCases: Asegurarnos de tener las funciones necesarias para la tarea o crear el caso de uso necesario
3. Router: Asegurarnos de tener la ruta(s) necesarias o crear la ruta/router necesaria(o)
4. Asegurarnos de que nuestro router esta montado en el server, si no proceder a montarlo
