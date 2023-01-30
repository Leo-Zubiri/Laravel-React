# Laravel + React

---

## Aplicación monolítica

Aplicación monolítica. Archivos de Backend, Frontend, entre otros, se encuentran en un solo servidor.

Otra opción es separar backend y frontend por medio de una API.

### Ventajas

- Desarrollo rápido

### Desventajas

- Utilizarla como backend para una app móvil sería más complicado.

### Opciones posibles para combinar laravel y react

- Utilizar Inertia (Propio a Laravel)
- Utilizar una API (Separar Backend y Frontend teniendo mayor libertad)

> En la unión de Laravel + React, React toma el lugar de las vistas que de forma nativa antes se gestionaban con blade

## API

Aplication Programming Interface.- Capa de abstracción para poder comunicar un backend con un frontend en distintas o similares tecnologías.

- Puede estar hecha con cualquier lenguaje
- El formato de respuesta usual es en JSON, por lo que se puede consumir en JS, React, Vue, Angular, entre otros frameworks.

### Ventajas de usar Laravel como Backend

Beneficios propios a Laravel como Eloquent y lo relacionado a DB, Autenticación, Emails, Notificaciones, Etc.

### Ventajas de Utilizar React como Frontend

React es una librería creada por Facebook para crear single Page Applications (SPA).

- Utilizarlo junto a Laravel proporciona un gran control para crear aplicaciones seguras, rápidas y dinámicas.

---

# Primeros Pasos

---

## Laravel

### Creación del Proyecto

```composer create-project laravel/laravel devjobs```

### Ejecutar el proyecto

```php artisan serve```

### Conexión a Base de Datos

Crear una nueva conexion a la base de datos e identificar el Host, puerto, usuario y contraseña

Despues se configura el archivo .env con los respectivos datos.

---

## React

### Creación del Proyecto

Vite permite configurar proyectos en distintas tecnologías, configurar para  React y JavaScript.

```npm create vite@latest```

Instalar modulos de node: 

```npm install```

### Ejecutar el proyecto

```npm run dev```

---

## Docsify

> Incluir documentación a este proyecto

[`A magical documentation site generator`](https://docsify.js.org/#/quickstart)

### SETUP

It is recommended to install `docsify-cli` globally, which helps initializing and previewing the website locally.

```bash
npm i docsify-cli -g
```

Then prepare a directory to store the documentation files:

```bash
docsify init ./docs
```

Run the local server with `docsify serve`. You can preview your site in your browser on `http://localhost:3000`.

```bash
docsify serve docs
```