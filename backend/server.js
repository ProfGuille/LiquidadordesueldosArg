const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Test DB connection
pool.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the PostgreSQL database.");
  }
});

// Routes
app.get("/", (req, res) => {
  res.send("API para liquidación de sueldos funcionando correctamente.");
});

app.get("/empleados", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM empleados;");
    res.json(result.rows);
  } catch (error) {
    console.error("Error al obtener empleados:", error);
    res.status(500).send("Error al obtener empleados.");
  }
});

app.post("/empleados", async (req, res) => {
  const { nombre, apellido, salario } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO empleados (nombre, apellido, salario) VALUES ($1, $2, $3) RETURNING *;",
      [nombre, apellido, salario]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error al agregar empleado:", error);
    res.status(500).send("Error al agregar empleado.");
  }
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});
