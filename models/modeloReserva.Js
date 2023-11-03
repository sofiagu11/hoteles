import mongoose from "mongoose";

const Schema=mongoose.Schema

const Reserva=new Schema({
    NombreCliente:{
        type:String,
        required:true,
    },
    ApellidoCliente:{
        type:String,
        required:true,
    },
    TelefonoCliente:{
        type:String,
        required:true
    },
    FechainicioReserva:{
        type:String,
        required:true
    },
    FechaFinalReserva:{
        type:String,
        required:true
    },
    Numeropersonas:{
        type:Number,
        required:true
    }
})

export const modeloReserva=mongoose.model('reservas',Reserva)