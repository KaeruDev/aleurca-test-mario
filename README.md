# Prueba Técnica – Ejecución del Proyecto

Este proyecto incluye **backend (NestJS + PostgreSQL)** y **frontend (Next.js con TailwindCSS)**.  
Se probó con la **última versión estable de Node.js (20+)**.

---

## Requisitos
- **Node.js** (versión 20 o superior)
- **npm** (viene con Node)
- **PostgreSQL** (usuario `postgres`, contraseña `1234` o la que definas)

---

## Cómo ejecutar

### 1. Configurar base de datos
1. Asegúrate de que PostgreSQL esté corriendo.
2. Crea la base de datos (si no existe):
   ```bash
   psql -U postgres
   CREATE DATABASE aleurca_mario_test;
   \q
   ```

> **Nota:** Las tablas y 10 registros iniciales se crean automáticamente al iniciar el backend.

---

### 2. Levantar Backend (API)
En una terminal:
```bash
cd backend
npm install
npm run start:dev
```
La API quedará disponible en:  
`http://localhost:3000/services`

---

### 3. Levantar Frontend (Dashboard)
En otra terminal:
```bash
cd frontend
npm install
npm run dev
```
Abre en el navegador la URL que indique (generalmente `http://localhost:3001`).

---

¡Listo!

---

#### ❗ Notas:

- no se si era necesario hacer uso del endpoint POST que quedó disponible en el backend, ya que se creó y no se está usando. La nota decía "no es necesario crear CRUD completo" y no especifica que cree la función en el POST, y la verdad no quería agrandar la prueba con un módulo nuevo solo para demostrar que sé hacerlo.

- Intenté que los estilos quedaran de la mejor manera posible sin perder tanto tiempo, se que no se evalua pero es por la descencia (en general los estilos son lo que toma más tiempo para que queden bien). Le metí responsive con Tailwind (etiquetas sm para pantallas chicas y md para medianas).

- No quise dockerizar el código del backend porque la verdad es demasiado innecesario siendo pequeño y quería enviar la prueba rápido.

- No hay testing porque no se que cosa se podia probar, probablemente podia haber hecho testing del get para probar(?)

---

Gracias de antemano por la oportunidad de ser candidato en la empresa, espero que les guste mi codigo ;).

--Mario Silva 2025--
