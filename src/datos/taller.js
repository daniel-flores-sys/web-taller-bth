// =====================================================================
// PASOS DEL TALLER: aquí van tus capturas.
// 1. Guarda la imagen en  public/capturas/  (por ejemplo  paso-1.png)
// 2. Escribe su nombre en "imagen":  imagen: 'paso-1.png'
// 3. Cambia los textos si hace falta. Puedes agregar o quitar pasos.
// Mientras "imagen" sea null, la lámina muestra un recuadro "Captura pendiente".
// =====================================================================

export const PASOS_TALLER = [
  {
    titulo: 'Crear la cuenta en InsForge',
    texto: 'Entra a insforge.dev y regístrate gratis. Luego, en tu perfil, crea una API key para conectar la terminal.',
    comando: null,
    imagen: null,
  },
  {
    titulo: 'Crear el proyecto React con Vite',
    texto: 'En la carpeta del taller, crea el proyecto e instala sus piezas.',
    comando: 'npm create vite@latest restaurante-demo -- --template react\ncd restaurante-demo\nnpm install',
    imagen: null,
  },
  {
    titulo: 'Conectar InsForge al proyecto',
    texto: 'Inicia sesión y crea el backend. Esto instala las skills de InsForge y escribe AGENTS.md, las instrucciones para el agente.',
    comando: 'npx @insforge/cli login\nnpx @insforge/cli create',
    imagen: null,
  },
  {
    titulo: 'Darle el pedido al agente',
    texto: 'Abre OpenCode en la carpeta y pega las reglas del negocio: tipos de usuario, menú por día, stock, reservas, páginas.',
    comando: 'opencode',
    imagen: null,
  },
  {
    titulo: 'Revisar la base de datos',
    texto: 'En el panel de InsForge: tablas platos, menu_semanal, reservas y sus reglas de seguridad.',
    comando: null,
    imagen: null,
  },
  {
    titulo: 'Probar en tu computadora',
    texto: 'Levanta la app, crea una cuenta de cliente con el código del correo y haz una reserva.',
    comando: 'npm run dev',
    imagen: null,
  },
  {
    titulo: 'El panel del dueño',
    texto: 'Entra por /admin/ingresar, registra un plato arrastrando su foto, arma el menú del día y marca una entrega.',
    comando: null,
    imagen: null,
  },
  {
    titulo: 'Publicar en internet',
    texto: 'Un comando sube el frontend y te devuelve una dirección pública con HTTPS.',
    comando: 'npm run build\nnpx @insforge/cli deployments deploy .',
    imagen: null,
  },
  {
    titulo: 'Abrirla desde el celular',
    texto: 'Comparte el enlace: todos reservan desde su celular y el stock baja en vivo en el panel del dueño.',
    comando: null,
    imagen: null,
  },
]
