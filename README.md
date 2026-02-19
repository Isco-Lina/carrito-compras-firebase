# Ferretería El Maestro

Aplicación web de carrito de compras desarrollada con React y Firebase para la venta de herramientas.

---

## Enlaces del proyecto

- **Repositorio GitHub:**  
  https://github.com/Isco-Lina/carrito-compras-firebase.git

- **Aplicación desplegada en Netlify:**  
  https://carrito-compras-firebase.netlify.app/

---

## Características Principales

- **Catálogo de productos**: Lista de herramientas con nombre, descripción y precio
- **Carrito de compras**: Agregar/eliminar productos y visualizar total
- **Formulario de contacto**: Envío de mensajes que se guardan en Firestore
- **Subida de archivos**: Carga de archivos a Firebase Storage
- **Autenticación**: Sistema de login con Firebase Authentication

## Tecnologías

- **React 19** - Framework principal
- **Firebase** - Backend (Authentication, Firestore, Storage)
- **Bootstrap 5** - Diseño y estilos
- **Vite** - Build tool y desarrollo
- **Apache Cordova** - Empaquetado para Android

---

## Cómo ejecutar el proyecto

1. Instalar dependencias
   npm install

2️. Configurar variables de entorno  
 Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
VITE_FIREBASE_PROJECT_ID=tu_project_id
VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
```

> ⚠️ No compartas ni subas el archivo `.env` al repositorio. Está incluido en `.gitignore`.

3️. Iniciar Firebase Emulators
firebase emulators:start

3️. Ejecutar la aplicación
npm run dev

4️. Abrir en el navegador
http://localhost

Emulator UI
http://localhost:4000

## Estructura del Proyecto

```
src/
├── components/       # Componentes de la UI
│   ├── ProductList  # Lista de productos
│   ├── Cart         # Carrito de compras
│   ├── ContactForm  # Formulario de contacto
│   ├── FileUpload   # Subida de archivos
│   └── Auth         # Autenticación
├── firebase/        # Configuración de Firebase
└── auth/            # Provider de autenticación
```

## Funcionalidades

### Carrito de Compras

- Agregar productos con gestión de cantidad
- Eliminar productos del carrito
- Cálculo automático del total
- Formato de moneda chilena (CLP)

### Contacto

- Validación de formulario
- Almacenamiento en Firestore
- Campos: nombre, email, mensaje

### Archivos

- Subida de archivos a Firebase Storage
- Validación de selección de archivo
- Mensajes de confirmación

## Firebase Services

- **Authentication**: Control de acceso a la aplicación
- **Firestore**: Base de datos para mensajes de contacto
- **Storage**: Almacenamiento de archivos
