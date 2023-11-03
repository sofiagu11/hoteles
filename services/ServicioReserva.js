import { modeloReserva } from "../models/modeloReserva.js";


export class ServicioReserva{

    constructor(){}

    async buscarTodas(){
        let reservas = await modeloReserva.find();
        return reservas
    }
    async buscarPorId(id){
        let reserva = await modeloReserva.findById(id);
        return reserva
    }
    async modificar(id,datos){
        return await modeloReserva.findByIdAndUpdate(id,datos)
    }
    async registrar(datos){
        try {
            let reservaNueva=new modeloReserva(datos)
        console.log('GUARDANDO');
        return await reservaNueva.save(datos)
        } catch (error) {
            console.log(error.message);
        }
        
    }
    async eliminar(id){
        return await modeloReserva.findByIdAndDelete(id)
    }

}