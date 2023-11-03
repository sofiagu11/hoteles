//Espacio para definir las rutas o endpoints especificos de su Api
import express from "express";

//importo los controladores
import {ControladorHabitacion} from "../controllers/ControladorHabitacion.js"
import {ControladorReserva} from "../controllers/ControladorReserva.js"
let controladorHabitacion=new ControladorHabitacion()
let controladorReserva=new ControladorReserva()

export let rutasApi = express.Router()

//Aca pone sus endpoints
rutasApi.post('/api/habitaciones', controladorHabitacion.registrar)
rutasApi.get('/api/habitaciones',controladorHabitacion.buscarTodas)
rutasApi.get('/api/habitacion/:id', controladorHabitacion.buscarPorId)
rutasApi.put('/api/habitacion/:id',controladorHabitacion.modificar)
rutasApi.delete('/api/habitaciones/:id',controladorHabitacion.eliminar) 
rutasApi.post('/api/reservas',controladorReserva.registrar)
rutasApi.get('/api/reservas',controladorReserva.buscarTodas)
rutasApi.get('/api/reserva/:id',controladorReserva.buscarPorId)
rutasApi.put('/api/reservas/:id',controladorReserva.modificar)
rutasApi.delete('/api/reserva/:id',controladorReserva.eliminar)