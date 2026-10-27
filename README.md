# albertoquian.github.io

Sitio web personal de Alberto Quian — PhD en Investigación en Medios de Comunicación, Profesor de Periodismo en la Universidade de Santiago de Compostela.

## Estructura

```
.
├── index.html          # Página principal (bio, trayectoria, compromiso y colaboración, contacto)
├── investigacion.html  # Líneas, proyectos y software abierto
├── publicaciones.html  # Libros, capítulos, artículos y comunicaciones en congresos
├── docencia.html       # Actividad docente, tesis dirigidas e innovación docente
├── divulgacion.html    # Conferencias, charlas, vídeos y presencia en medios
├── sitemap.xml
├── robots.txt
└── assets/
    ├── css/style.css   # Estilos del sitio (incluye la versión móvil, ≤768 px)
    ├── js/nav.js       # Menú ☰ de la barra compacta en móvil
    └── img/            # Imágenes (og.png, expo_esf.jpg)
```

## Tecnología

Sitio estático HTML/CSS con diseño responsivo y un script mínimo para el menú móvil. Alojado en GitHub Pages. La barra lateral está duplicada en las cinco páginas: si se cambia, hay que cambiarla en todas.

## Notas

- Los vídeos se incrustan con el patrón `.video-embed` (16:9) y `loading="lazy"`.
- La foto de perfil se carga desde el avatar de GitHub (`avatars.githubusercontent.com`).
