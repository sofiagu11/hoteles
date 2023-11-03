import {ServicioHabitacion} from "../services/ServicioHabitacion.js"
export class ControladorHabitacion {
    constructor (){}

    async buscarTodas(request, response){
        try{
            let servicioHabitacion=new ServicioHabitacion()
            //1. hay que recibir datos
            //2. Intentare conectarme a BD
            //3. Envio la respuesta
            response.status(200).json({
                "estado":true,
                "mensaje": "Exito buscando las habitaciones",
                "datos": await servicioHabitacion.buscarTodas()
            })         
        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje": "Fallando buscando las habitaciones",
                "datos": null
        })
    }
    }
    async buscarPorId(request, response){
        try{
            let servicioHabitacion=new ServicioHabitacion()
            //1. Hay que recibir datos(si)
            let id=request.params.id
            //2. con el id que mando el cliente busco la habitacionen BD
            //3. Respondo al cliente
            response.status(200).json({
                "estado":true,
                "mensaje": "Exito buscando las habitaciones",
                "datos": await servicioHabitacion.buscarPorId(id)
            })  
        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje": "Fallando buscando las habitaciones"+error,
                "datos": null
           })
        }
    }
    async modificar(request, response){
        try{
            let servicioHabitacion=new ServicioHabitacion()
            //1. Hay que recibir datos(si)
            let id=request.params.id
            let datosModificar=request.body
            await servicioHabitacion.modificar(id,datos)
            //2. modificar en BD
            //3. Enviar respuesta
            response.status(200).json({
                "estado":true,
                "mensaje": "Exito modificando las habitaciones",
                "datos":null
            }) 
        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje": "Fallando modificando las habitaciones"+error,
                "datos": null
           })
        }
    }
    async registrar(request, response){
        try{
            let servicioHabitacion=new ServicioHabitacion()
            //1. hay que recibir datos(si)
            let datosRegistrar=request.body
            await servicioHabitacion.registrar(datosRegistrar)
            //2. guardelos en BD
            //3. Responda
            response.status(200).json({
                "estado":true,
                "mensaje": "Exito registrando las habitaciones",
                "datos": datosRegistrar,
            }) 
    }catch(error){
        response.status(400).json({
            "estado":false,
            "mensaje": "Fallando modificando las habitaciones"+error,
            "datos": null
       })
    }

    }
    async eliminar(request, response){
        try{
            let servicioHabitacion=new ServicioHabitacion()
            //1. hay que recibir datos(si)
            let id=request.params.id
            //2. eliminelo de la BD
            //3. respoonda
            response.status(200).json({
                "estado":true,
                "mensaje": "Exito borrando las habitaciones",
                "datos":null
            }) 
    }catch(error){
        response.status(400).json({
            "estado":false,
            "mensaje": "Fallando modificando las habitaciones"+error,
            "datos": null
       })
    }}
}

