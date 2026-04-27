# pobletedreyer.com

Sitio web de portafolio fotográfico de Lucas Poblete Dreyer.

## Stack
- **Astro** 5.x — generador de sitios estáticos
- **Vercel** — hosting + deploy automático
- **GoDaddy** — dominio (DNS apuntando a Vercel)

## Estructura

```
pobletedreyer/
├── src/
│   ├── components/         Componentes reutilizables (Nav, Footer, Carousel)
│   ├── layouts/            Layout base con <head> y fonts
│   ├── pages/
│   │   ├── index.astro     Home con carousel
│   │   ├── about.astro     Página About
│   │   └── series/
│   │       └── the-living-desert.astro
│   └── styles/
│       └── global.css      Todos los estilos del sitio
└── public/
    └── photos/             16 fotos de la serie + retrato
```

## Comandos

```bash
# Iniciar servidor local en desarrollo
npm run dev

# Construir el sitio para producción
npm run build

# Previsualizar el sitio construido
npm run preview
```

## Editar contenido

- **Captions de fotos**: editar `src/pages/series/the-living-desert.astro`
- **Bio del About**: editar `src/pages/about.astro`
- **Carousel del Home**: editar la lista `carouselSlides` en `src/pages/index.astro`
- **Footer e info de contacto**: editar `src/components/Footer.astro`

## Agregar una foto nueva

1. Optimizar la foto a max 1600px (lado largo) en JPG quality 85
2. Copiar a `public/photos/` con un nombre descriptivo (ej. `flamingo_dawn.jpg`)
3. Agregar un nuevo `<div class="plate full">...</div>` en la página correspondiente

## Deploy

El deploy se hace automáticamente en Vercel cada vez que se hace push a GitHub.
