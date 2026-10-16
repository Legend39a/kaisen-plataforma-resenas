import React from "react";
import regresofuturo from "../img/regresofuturo.jpg";
import islasiniestra from "../img/islasiniestra.jpg";
import notepreocupes from "../img/notepreocupes.jpg";

export default function Principal() {
  const peliculas = [
    {
      id: 1,
      titulo: "Regreso al Futuro",
      genero: "Ciencia ficción, Aventura",
      calificacion: "8.5",
      descripcion:
        "Un joven viaja accidentalmente al pasado en una máquina del tiempo creada por un excéntrico científico, poniendo en riesgo su propia existencia mientras intenta volver al presente.",
      imagen: regresofuturo,
    },
    {
      id: 2,
      titulo: "La Isla Siniestra",
      genero: "Suspenso, Misterio",
      calificacion: "8.2",
      descripcion:
        "Dos agentes federales llegan a un hospital psiquiátrico en una isla aislada para investigar la desaparición de una paciente, pero pronto descubren que nada es lo que parece.",
      imagen: islasiniestra,
    },
    {
      id: 3,
      titulo: "No Te Preocupes, Querida",
      genero: "Drama, Ciencia ficción, Thriller",
      calificacion: "7.3",
      descripcion:
        "En una comunidad aparentemente perfecta, una mujer comienza a sospechar que el lugar donde vive esconde oscuros secretos bajo su fachada de felicidad.",
      imagen: notepreocupes,
    },
  ];

  return (
    <main>
      <section>
        <h1>Bienvenido a <span className="rojo">Kaisën</span></h1>
        <p>Explora reseñas, tráilers y calificaciones de las películas más icónicas y recientes.</p>
      </section>

      <section className="pelilista">
        {peliculas.map((peli) => (
          <div key={peli.id}>
            <img src={peli.imagen} alt={peli.titulo} />
            <div>
              <h3>{peli.titulo}</h3>
              <p className="amarillo">⭐ {peli.calificacion} | {peli.genero}</p>
              <p className="descripcion">{peli.descripcion}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
