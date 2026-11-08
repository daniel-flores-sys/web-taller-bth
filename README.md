# Presentación: Cómo funciona la web y cómo construirla con IA

Presentación tipo Prezi hecha con React + Vite. Toda la charla es una placa de circuito: cada sección es un chip y la cámara viaja entre las láminas.

## Usarla

```bash
npm install
npm run dev        # abre http://localhost:5173
```

Para el día del taller conviene compilarla. Así no depende de internet: las fuentes van incluidas.

```bash
npm run build
npm run preview
```

## Teclas

| Tecla | Acción |
|---|---|
| → / Espacio / Enter | Siguiente paso o lámina |
| ← | Anterior |
| O | Ver todo el recorrido (clic en una lámina para ir) |
| N | Notas del presentador |
| F | Pantalla completa |
| Inicio / Fin | Primera / última lámina |

En celular o tablet: desliza a los lados. La dirección `#/14` abre directamente la lámina 14.

## Agregar las capturas del taller (sección 5)

1. Guarda las imágenes en `public/capturas/`, por ejemplo `paso-1.png`.
2. Abre `src/datos/taller.js` y en cada paso escribe `imagen: 'paso-1.png'`.
3. Ahí mismo puedes cambiar textos o comandos, o agregar y quitar pasos.

## Dónde está cada cosa

- `src/slides/s0-inicio.jsx` … `s6-cierre.jsx`: el contenido de cada sección.
- `src/slides/Circuito.jsx`: el diagrama animado cliente → DNS → servidor → base de datos.
- `src/deck/`: el motor (cámara, zoom, pasos, tablero de cobre).
- `src/index.css`: todos los estilos.
