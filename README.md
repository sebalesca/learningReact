# Aprendiento

Sitio de pruebas basado en Vite y React.

## Scripts

- `npm run dev` &mdash; inicia el servidor en modo desarrollo.
- `npm run build` &mdash; genera una build de pruebas.
- `npm run test` &mdash; ejecuta las pruebas con Vitest.

Antes de ejecutar los scripts es necesario instalar las dependencias con `npm install`.

## Crear nuevas páginas

Las vistas del proyecto se agrupan en la carpeta `src/pages`. Cada página
debe ubicarse en un directorio propio para mantener los componentes y estilos
aislados. Por ejemplo, la página de inicio se encuentra en
`src/pages/Home` y su componente principal es `Home.tsx`.

Para añadir una nueva página:

1. Crea un directorio dentro de `src/pages` con el nombre de la página.
2. Dentro de esa carpeta agrega el archivo `Nombre.tsx` que contendrá el
   componente de la página.
3. Si la vista necesita componentes adicionales, colócalos en `src/components`.
4. Importa la página desde `src/App.tsx` o configura las rutas con React Router.

Este esquema mantiene una separación clara entre páginas y componentes
reutilizables, siguiendo buenas prácticas de React.
