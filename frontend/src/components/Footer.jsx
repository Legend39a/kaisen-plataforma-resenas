import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="pie">
      <div className="contenido">

        <div className="footer">
          <h3>Kaisën</h3>
          <p>
            Tu espacio para descubrir, calificar y compartir reseñas de películas y series.
            Inspirado en la pasión por el cine y la comunidad de espectadores.
          </p>
        </div>

        <div className="footer">
          <h3>Explora</h3>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/peliculas">Películas</Link></li>
            <li><Link to="/series">Series</Link></li>
            <li><Link to="/catalogo">Catálogo</Link></li>
          </ul>
        </div>

        <div className="footer">
          <h3>Síguenos</h3>
          <div className="redes">
            <a href="https://www.facebook.com/share/1FmPk7BByM/" target="_blank">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/05estibenlg_?igsh=OXk5eDFkaWIzNTdv" target="_blank">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" />
            </a>
          </div>
        </div>

      </div>

      <div className="final">
        <p>© 2026 Kaisën | Desarrollado por Estiben López García</p>
      </div>
    </footer>
  );
}
