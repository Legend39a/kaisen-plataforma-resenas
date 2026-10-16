-- ============================================================
-- Kaisën: esquema de base de datos (PostgreSQL / Supabase)
-- ============================================================

-- Búsqueda tolerante a errores de tipeo
CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA extensions;

-- ---------- Tablas ----------

CREATE TABLE usuarios (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  nombre VARCHAR(60) NOT NULL,
  correo VARCHAR(120) NOT NULL UNIQUE,
  contrasena_hash VARCHAR(255) NOT NULL,   -- cifrada con bcrypt, nunca en texto plano
  creado_en TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE generos (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  nombre VARCHAR(40) NOT NULL UNIQUE
);

CREATE TYPE tipo_titulo AS ENUM ('pelicula', 'serie');

CREATE TABLE titulos (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  tmdb_id INTEGER UNIQUE,
  tipo tipo_titulo NOT NULL,
  titulo VARCHAR(200) NOT NULL,
  sinopsis TEXT,
  anio SMALLINT,
  poster_url VARCHAR(255),
  creado_en TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Un título puede tener varios géneros
CREATE TABLE titulo_genero (
  titulo_id BIGINT NOT NULL REFERENCES titulos(id) ON DELETE CASCADE,
  genero_id BIGINT NOT NULL REFERENCES generos(id) ON DELETE CASCADE,
  PRIMARY KEY (titulo_id, genero_id)
);

-- Una reseña por usuario y título, con calificación de 1 a 5
CREATE TABLE resenas (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  usuario_id BIGINT NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
  titulo_id BIGINT NOT NULL REFERENCES titulos(id) ON DELETE CASCADE,
  calificacion SMALLINT NOT NULL CHECK (calificacion BETWEEN 1 AND 5),
  texto TEXT NOT NULL,
  creado_en TIMESTAMPTZ NOT NULL DEFAULT now(),
  actualizado_en TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (usuario_id, titulo_id)
);

CREATE TABLE comentarios (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  resena_id BIGINT NOT NULL REFERENCES resenas(id) ON DELETE CASCADE,
  usuario_id BIGINT NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
  texto TEXT NOT NULL,
  creado_en TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ---------- Índices ----------

CREATE INDEX idx_titulos_titulo_trgm ON titulos USING gin (titulo gin_trgm_ops);
CREATE INDEX idx_titulos_tipo ON titulos (tipo);
CREATE INDEX idx_resenas_titulo ON resenas (titulo_id);
CREATE INDEX idx_comentarios_resena ON comentarios (resena_id);
CREATE INDEX idx_titulo_genero_genero ON titulo_genero (genero_id);

-- ---------- Actualiza "actualizado_en" al editar una reseña ----------

CREATE FUNCTION actualizar_fecha_resena() RETURNS trigger
LANGUAGE plpgsql
SET search_path = ''
AS $$
BEGIN
  NEW.actualizado_en = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER trg_resenas_actualizado
BEFORE UPDATE ON resenas
FOR EACH ROW EXECUTE FUNCTION actualizar_fecha_resena();

-- ---------- Seguridad (Row Level Security) ----------
-- Sin políticas, la API pública de Supabase no puede leer ni escribir.
-- Tu backend se conecta con la cadena de conexión y sí tiene acceso.

ALTER TABLE usuarios      ENABLE ROW LEVEL SECURITY;
ALTER TABLE generos       ENABLE ROW LEVEL SECURITY;
ALTER TABLE titulos       ENABLE ROW LEVEL SECURITY;
ALTER TABLE titulo_genero ENABLE ROW LEVEL SECURITY;
ALTER TABLE resenas       ENABLE ROW LEVEL SECURITY;
ALTER TABLE comentarios   ENABLE ROW LEVEL SECURITY;

-- ---------- Datos iniciales ----------

INSERT INTO generos (nombre) VALUES
  ('Acción'), ('Drama'), ('Comedia'), ('Terror'), ('Ciencia ficción'),
  ('Aventura'), ('Suspenso'), ('Misterio'), ('Thriller'), ('Romance'),
  ('Documental'), ('Ficción');

INSERT INTO titulos (tipo, titulo, sinopsis, anio) VALUES
  ('pelicula', 'Regreso al Futuro', 'Un joven viaja accidentalmente al pasado en una máquina del tiempo creada por un excéntrico científico.', 1985),
  ('pelicula', 'La Isla Siniestra', 'Dos agentes federales investigan la desaparición de una paciente en un hospital psiquiátrico aislado.', 2010),
  ('pelicula', 'No Te Preocupes, Querida', 'En una comunidad aparentemente perfecta, una mujer sospecha que el lugar esconde oscuros secretos.', 2022);