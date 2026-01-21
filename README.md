# Gestor de Proyectos y Tareas

Aplicación desarrollada con React + Vite
Que permite gestionar proyectos y tareas, utilizando Firebase Firestore
para persistencia de datos y Firebase Functions para la eliminación de registros.

## Tecnologías utilizadas

- React + Vite
- Firebase Firestore
- Firebase Functions
- Firebase Emulator Suite
- Axios
- react-simple-validator

## Uso de Firebase Emulator Suite

Este proyecto utiliza Firebase Emulator Suite para ejecutar Firestore y Firebase Functions en entorno local.

Servicios emulados:

- Firestore Emulator
- Firebase Functions Emulator

El uso de emuladores permite desarrollar y probar la aplicación sin afectar datos productivos
ni incurrir en costos asociados al despliegue en producción.

## Ejecución del proyecto

1. Instalación de dependencias:

Instalar las dependencias del proyecto principal (React):

npm install

Luego, instalar las dependencias del módulo de Firebase Functions:

cd functions
npm install
cd ..

2. Iniciar Firebase Emulator Suite:
   firebase emulators:start

3. En una segunda terminal, ejecutar la aplicación:
   npm run dev

La aplicación detecta automáticamente el entorno localhost y se conecta a los servicios emulados.
