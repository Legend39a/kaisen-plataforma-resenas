import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
          <img src={logo} alt="Kaisën" />
        <span>Kaisën</span>
      </div>

      <nav className="navegacion">
        <ul>
          <li><Link to="/">Inicio</Link></li>

          <li className="desplegable">
            Películas
            <ul className="menu">
              <li>Acción</li>
              <li>Drama</li>
              <li>Comedia</li>
              <li>Terror</li>
            </ul>
          </li>

          <li className="desplegable">
            Series
            <ul className="menu">
              <li>Ficción</li>
              <li>Thriller</li>
              <li>Romance</li>
              <li>Documental</li>
            </ul>
          </li>

          <li><Link to="/catalogo">Catálogo</Link></li>
        </ul>
      </nav>

      <div className="barra">
        <div className="busqueda">
          <input type="text" placeholder="Buscar..." />
        </div>
        <Link to="/sesion" className="iniciosesion">Iniciar sesión</Link>
      </div>
    </header>
  );
}
