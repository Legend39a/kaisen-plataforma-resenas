# Kaisën

Plataforma web para reseñar y calificar películas y series. Proyecto personal en desarrollo.

> **Estado: versión 1 (octubre de 2025), prototipo del frontend.** El diseño y la navegación están hechos; el backend y la base de datos están en construcción.

## Tecnologías

- **Frontend:** React 19, Vite, React Router
- **Backend (en construcción):** Node.js, Express
- **Base de datos (planeada):** MySQL

## Plan de funciones

### Fase 1: Frontend (versión 1)
- [x] Estructura del proyecto con React y Vite
- [x] Navegación entre páginas con React Router
- [x] Encabezado con menús de películas y series, y pie de página
- [x] Página principal con películas destacadas
- [ ] Página de catálogo completo
- [ ] Página de detalle de cada película o serie
- [ ] Páginas de Películas y Series con filtro por género

### Fase 2: Backend y base de datos
- [ ] Servidor con Express
- [ ] Diseño de la base de datos en MySQL (usuarios, películas, reseñas, comentarios)
- [ ] API REST para películas y series
- [ ] Conexión entre frontend y backend

### Fase 3: Usuarios
- [ ] Registro e inicio de sesión
- [ ] Contraseñas cifradas y sesiones con JWT
- [ ] Perfil de usuario

### Fase 4: Reseñas e interacción
- [ ] Publicar reseñas
- [ ] Calificar con estrellas
- [ ] Comentar reseñas
- [ ] Editar y eliminar las propias reseñas

### Fase 5: Búsqueda y mejoras
- [ ] Búsqueda y filtrado de contenido en la base de datos
- [ ] Datos y carátulas reales desde la API de TMDB
- [ ] Diseño adaptable a celular
- [ ] Publicación en línea

## Cómo ejecutar el frontend

1. Instalar [Node.js](https://nodejs.org) (versión LTS).
2. En una terminal:
```bash
   cd frontend
   npm install
   npm run dev
```
3. Abrir la dirección que muestra la terminal (normalmente `http://localhost:5173`).

## Estructura