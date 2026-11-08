import { construirLaminas } from '../deck/layout'
import inicio from './s0-inicio'
import web from './s1-web'
import http from './s2-http'
import ia from './s3-ia'
import react from './s4-react'
import taller from './s5-taller'
import cierre from './s6-cierre'

// Orden del recorrido (cada sección es un "chip" en el tablero)
export const SECCIONES = [inicio, web, http, ia, react, taller, cierre]
export const LAMINAS = construirLaminas(SECCIONES)
