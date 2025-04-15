-- Crear tabla de empleados
CREATE TABLE empleados (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido VARCHAR(100) NOT NULL,
  salario NUMERIC(10, 2) NOT NULL
);
