//Esta clase representa un servidor
import express from "express"
import cors from "cors"
import { rutasApi } from "./routes/rutasHoteles.js"
import {establecerConexionBD} from "./database/conexion.js"

export class Api{
    constructor(){
        this.app = express()
        this.conectarBD()
        this.procesarPeticiones()
    }

    //1. Levantar un servidor
    levandarServidor(){
        this.app.listen(3000,function(){
            console.log("Servidor operando")
        })
    }

    //2. Atiende las peticiones y responde
    procesarPeticiones(){
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use("/", rutasApi) 
    }


    //3. Se conecta a la base de datos
    conectarBD(){
        establecerConexionBD()
    }

}