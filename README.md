# Join2Play

**Join2Play** es una plataforma web desarrollada para facilitar la conexión entre personas interesadas en jugar a videojuegos multijugador online. Su principal objetivo es ofrecer a los usuarios una forma sencilla y rápida de encontrar compañeros de juego compatibles según criterios como el juego, el idioma o el nivel de habilidad.

---

## Índice

- [Resumen del proyecto](#resumen-del-proyecto)
- [Tecnologías empleadas](#tecnologías-empleadas)
- [Requisitos](#requisitos)
  - [Funcionales](#requisitos-funcionales)
  - [No funcionales](#requisitos-no-funcionales)
- [Arquitectura del sistema](#arquitectura-del-sistema)
- [Base de datos](#base-de-datos)
- [Interfaz de usuario](#interfaz-de-usuario)
- [Despliegue](#despliegue)
- [Enlaces](#enlaces)

---

## Resumen del proyecto

Join2Play permite a los usuarios:

- Registrarse y crear un perfil.
- Buscar jugadores activos por juego.
- Publicar solicitudes para formar equipos.
- Inscribirse a juegos con formularios personalizados.
- Gestionar suscripciones y perfil personal.
- Administradores pueden ver y gestionar usuarios y suscripciones.

Cada videojuego gestionado puede tener un formulario y una base de datos específica, adaptada a sus características.

Proyecto desarrollado en el marco del módulo de proyecto de 2ºDAW en el **I.E.S. Martínez Montañés** por **Ezequiel Barroso González**.

---

## Tecnologías empleadas

### Backend
- PHP 8+
- Laravel

### Frontend
- Angular
- TypeScript, HTML, CSS

### Base de datos
- MySQL

### Otras herramientas
- Git & GitHub (control de versiones)
- Railway (despliegue backend + BDD)
- Vercel (despliegue frontend)
- Figma (diseño de interfaz)

---

## Requisitos

### Requisitos funcionales

- **Registro e inicio de sesión** con validación de errores comunes.
- **Gestión de inscripciones** a juegos: alta, modificación y baja.
- **Visualización de jugadores** con filtros en tiempo real.
- **Gestión de perfil**: actualización de datos y eliminación de cuenta.
- **Gestión administrativa**: panel para visualizar y eliminar usuarios o suscripciones.

### Requisitos no funcionales

- **Diseño responsive**, compatible con móviles, tablets y escritorio.
- **Comunicación RESTful** entre frontend y backend mediante peticiones HTTP con formato JSON.

---

## Arquitectura del sistema

La aplicación está basada en una arquitectura **API REST**:
