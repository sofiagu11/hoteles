import {ServicioReserva} from '../services/ServicioReserva.js'

// const reservaService = new ServicioReserva()
let servicioReserva = new ServicioReserva();
export class ControladorReserva {
    constructor (){

    }

   async buscarTodas(request, response){
        try{
            //1. hay que recibir datos
            //2. Intentare conectarme a BD
            //3. Envio la respuesta

            response.status(200).json({
                "estado":true,
                "mensaje": "Exito buscando las reservas",
                "datos":await servicioReserva.buscarTodas()
            })         
        }catch(error){
            response.status(400).json({
                mensaje: "fallamos" + error,
        })
    }
    }
    async buscarPorId(request, response){
        try{
            //1. Hay que recibir datos(si)
            let id=request.params.id
            //2. con el id que mando el cliente busco la habitacionen BD
            //3. Respondo al cliente

            response.status(200).json({
                "estado":true,
                "mensaje": "Exito buscando las reservas",
                "datos":await servicioReserva.buscarPorId(id)
            })  
        }catch(error){
            response.status(400).json({
                mensaje: "fallamos" + error,
           })
        }
    }
    async modificar(request, response){
        try{
            //1. Hay que recibir datos(si)
            let id=request.params.id
            let datosModificar=request.body
            //2. modificar en BD
            //3. Enviar respuesta
            response.status(200).json({
                "estado":true,
                "mensaje": "Exito modificando las habitaciones",
                "datos":await servicioReserva.modificar()
            }) 
        }catch(error){
            response.status(400).json({
                mensaje: "fallamos" + error,
           })
        }
    }
    async registrar(request, response){
        try{
            //1. hay que recibir datos(si)
            let datosRegistrar=request.body
            //2. guardelos en BD
            //3. Responda
            console.log(datosRegistrar);
            servicioReserva.registrar(request.body)
            response.status(200).json({
                "estado":true,
                "mensaje": "Exito registrando las reservas",
                "datos": await servicioReserva.registrar()
            }) 
    }catch(error){
        response.status(400).json({
            mensaje: "fallamos" + error,
       })
    }

    }
    async eliminar(request, response){
        try{
            //1. hay que recibir datos(si)
            let id=request.params.id
            //2. eliminelo de la BD
            //3. respoonda
            await servicioReserva.eliminar(id)
            response.status(200).json({
                "estado":true,
                "mensaje": "Exito borrando las reservas",
                
            }) 
    }catch(error){
        response.status(400).json({
            mensaje: "fallamos" + error,
       })
    }}
}