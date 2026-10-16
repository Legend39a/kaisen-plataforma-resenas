import "dotenv/config";
import express from "express";
import cors from "cors";
import { pool } from "./db.js";

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// Comprueba que el servidor y la base de datos responden
app.get("/api/salud", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT now() AS hora");
    res.json({ ok: true, hora: rows[0].hora });
  } catch (error) {
    console.error("Error de base de datos:", error.message);
    res.status(500).json({ ok: false, error: "No se pudo conectar a la base de datos" });
  }
});

// Lista de películas y series
app.get("/api/titulos", async (req, res) => {
  try {
    const { rows } = await pool.query(
      "SELECT id, tipo, titulo, sinopsis, anio, poster_url FROM titulos ORDER BY id"
    );
    res.json(rows);
  } catch (error) {
    console.error("Error al listar títulos:", error.message);
    res.status(500).json({ error: "No se pudieron obtener los títulos" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor de Kaisën en http://localhost:${PORT}`));