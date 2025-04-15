# LiquidadordesueldosArg
# Liquidador de Sueldos - Argentina

Esta aplicación fullstack permite gestionar empleados y realizar la liquidación de sueldos conforme a la normativa argentina vigente. Incluye un **backend** desarrollado con Node.js, Express y PostgreSQL, y un **frontend** construido con React.

## Estructura del Proyecto

```
LiquidadordesueldosArg/
├── backend/      # Servidor backend con Node.js y Express
├── frontend/     # Aplicación frontend con React
├── package.json  # Configuración para ejecutar backend y frontend simultáneamente
└── README.md     # Documentación del proyecto
```

## Configuración Inicial

### Requisitos Previos

- Node.js >= 16.x
- PostgreSQL >= 12.x
- npm >= 8.x

### Variables de Entorno

1. **Backend**: Crear un archivo `.env` en la carpeta `backend` con el siguiente contenido:
   ```
   PORT=3000
   DATABASE_URL=postgres://usuario:password@localhost:5432/liquidacion
   ```

2. **Frontend**: Crear un archivo `.env` en la carpeta `frontend` con el siguiente contenido:
   ```
   VITE_API_URL=http://localhost:3000
   ```

### Instalación y Ejecución

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/ProfGuille/LiquidadordesueldosArg.git
   cd LiquidadordesueldosArg
   ```

2. Instalar las dependencias y ejecutar el proyecto:
   ```bash
   npm install
   npm start
   ```

Esto ejecutará tanto el **backend** como el **frontend** simultáneamente.

## Uso

1. Accede al frontend en tu navegador en `http://localhost:5173`.
2. Gestiona empleados, realiza liquidaciones y genera recibos de sueldo detallados.

## Backend

- **Rutas RESTful** para CRUD de empleados y cálculo de liquidaciones.
- **Conexión a PostgreSQL** usando `DATABASE_URL`.
- **Lógica de liquidación** que incluye:
  - Cálculo de salario básico según actividad y convenio.
  - Aplicación de descuentos legales y adicionales como presentismo, antigüedad y horas extras.

## Frontend

- **React + Vite** para una interfaz rápida y moderna.
- **Gestión de empleados** con formularios para crear, editar y eliminar.
- **Liquidación de sueldos** con visualización de recibos detallados.

## Despliegue

El proyecto puede ser desplegado en plataformas como Heroku, Railway, Render o Vercel. Se pueden agregar configuraciones específicas para Docker o GitHub Actions según sea necesario.

---
