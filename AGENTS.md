# AGENTS.md

## Alcance

Estas indicaciones se aplican a todo el repositorio.

## Descripción del proyecto

`web-meollo` es la web pública de Meollo Restaurante, situado en El Puerto de Santa María (Cádiz). Es una SPA exclusivamente de frontend que presenta el restaurante, su carta, ubicación, datos de contacto, redes sociales, reseñas y un formulario para candidaturas laborales.

No existe un backend propio en este repositorio. Los formularios y contenidos de terceros dependen de servicios externos.

## Tecnologías

- JavaScript con módulos ES y JSX; el proyecto no usa TypeScript.
- React 19 y React DOM 19.
- React Router 8 para el enrutado en cliente.
- Vite 8 como servidor de desarrollo y empaquetador.
- npm y `package-lock.json` (lockfile v3) para dependencias.
- CSS global en `index.css`.
- Bootstrap 5.3.8, cargado desde CDN, para utilidades visuales y el componente offcanvas.
- Font Awesome 7, cargado desde CDN, para iconos.
- Google Fonts (`Playfair Display` y `Rock Salt`).
- Formspree (`@formspree/react`) para el formulario de empleo.
- Elfsight para insertar las reseñas de Tripadvisor.
- Google Maps mediante un `iframe` embebido.
- Cloudinary mediante su API HTTP en `src/hooks/useCloudinary.js`.

Vite 8 requiere Node.js `^20.19.0` o `>=22.12.0`.

## Comandos

Ejecutar desde la raíz del repositorio:

```bash
npm ci                  # instalación reproducible
npm start               # servidor Vite de desarrollo
npx vite build          # compilación de producción en dist/
npx vite preview        # vista previa de una compilación existente
```

Actualmente no hay linter ni pruebas automatizadas configuradas. El script `npm test` es el placeholder de npm y termina con error; no usarlo como validación positiva. Después de un cambio, ejecutar como mínimo `npx vite build` y comprobar manualmente las rutas afectadas.

## Estructura

- `index.html`: documento base, nodo `#root`, hojas de estilo y scripts CDN.
- `index.css`: todos los estilos propios y reglas responsive.
- `src/main.jsx`: monta la aplicación React.
- `src/App.jsx`: proveedores globales, layout compartido y tabla de rutas.
- `src/pages/`: componentes de nivel de página.
- `src/components/`: componentes visuales reutilizables.
- `src/contexts/LightMode.jsx`: contexto del modo claro usado por navbar y footer.
- `src/hooks/useCloudinary.js`: subida de imágenes a Cloudinary.
- `public/media/`: imágenes y vídeos estáticos servidos desde `/media/...`.

## Rutas de la aplicación

Las rutas se declaran en `src/App.jsx`:

| Ruta | Página | Finalidad |
| --- | --- | --- |
| `/` | `Home` | Presentación, vídeos y reseñas |
| `/ubicacion` | `Ubicacion` | Dirección y Google Maps |
| `/nuestracarta` | `NuestraCarta` | Carta del restaurante |
| `/contacto` | `Contacto` | Teléfono, correo y reservas |
| `/work-with-us` | `TrabajaConNosotros` | Formulario de empleo |

`Navbar` y `Footer` se renderizan para todas las rutas. Al añadir una página, registrar su `Route` en `App.jsx` y, si debe ser navegable, su enlace en `Offcanvas.jsx`. El hosting de producción debe redirigir las rutas desconocidas a `index.html` para que funcione `BrowserRouter`.

## Convenciones de implementación

- Usar componentes funcionales y hooks de React.
- Mantener los nombres de componentes y archivos en PascalCase; hooks con prefijo `use`.
- Conservar el idioma español en textos de interfaz y nombres de dominio existentes.
- Seguir el estilo actual: indentación de 4 espacios, comillas dobles en imports y `className` para clases CSS.
- Favorecer clases Bootstrap para layout y espaciado; añadir estilos específicos al `index.css` global usando clases descriptivas.
- No introducir CSS Modules, CSS-in-JS, TypeScript u otro sistema de estado sin una necesidad explícita.
- Utilizar `Link` de `react-router` para navegación interna y elementos `<a>` para destinos externos, `tel:` o `mailto:`.
- En enlaces externos con `target="_blank"`, incluir `rel="noopener noreferrer"`.
- Añadir texto alternativo útil a imágenes y atributos accesibles a controles interactivos.
- Los ficheros de `public/` se referencian con rutas absolutas desde la raíz, por ejemplo `/media/images/logos/logo_meollo_transparente.png`; no se importan desde JSX.
- No editar dependencias dentro de `node_modules/` ni versionar la salida generada `dist/`.

## Integraciones y configuración

- La única variable de entorno usada actualmente es `VITE_CLOUD_NAME`, leída mediante `import.meta.env` por el hook de Cloudinary.
- `.env` está ignorado por Git. No versionar secretos ni credenciales.
- Toda variable con prefijo `VITE_` se incluye en el bundle del navegador y, por tanto, debe considerarse pública.
- El preset de subida de Cloudinary debe permitir subidas sin firma si se usa directamente desde el navegador.
- El ID de formulario de Formspree está configurado en `src/components/Form.jsx`.
- El widget de Elfsight necesita el script de plataforma presente en `index.html` y su identificador de aplicación en `Tripadvisor.jsx`.
- El offcanvas depende del JavaScript global de Bootstrap cargado en `index.html`; `Offcanvas.jsx` accede a `window.bootstrap` para cerrar el menú tras navegar.

Al modificar una integración, verificar tanto el estado exitoso como el fallo de red y evitar registrar datos personales o sensibles en consola.

## Validación manual recomendada

1. Confirmar que la aplicación compila con `npx vite build`.
2. Recorrer todas las rutas desde el menú y comprobar que este se cierra tras cada navegación.
3. Revisar la interfaz en escritorio y por debajo de `720px`, que es el breakpoint responsive propio actual.
4. Comprobar modo claro/oscuro del navbar y footer.
5. Si se toca el formulario, verificar validación, envío y estado de carga en Formspree.
6. Si se toca contenido multimedia, comprobar rutas, peso, reproducción y texto alternativo.
7. Si se toca una integración CDN, revisar la consola del navegador y el comportamiento sin red.

## Precauciones

- Hay cambios de trabajo frecuentes en archivos de interfaz; no sobrescribir ni revertir modificaciones ajenas.
- `index.css` es global: revisar posibles colisiones con clases de Bootstrap antes de crear selectores genéricos.
- Los vídeos `.mov` y las imágenes pueden ser pesados; evitar duplicarlos y optimizarlos antes de añadir nuevos recursos.
- No asumir que `window.bootstrap` existe en pruebas o renderizados fuera del navegador; proteger su uso si se introduce ejecución en esos entornos.
