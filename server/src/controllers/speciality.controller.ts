import { Request, Response } from "express";
import {Speciality} from "../models/speciality.model";
import {Sede} from "../models/sede.model";



// Obtiene los especialistas de la sede enviada por query. 
 
export const getspecialiestbysede = async (req : Request,res : Response)=> {
        const idsede = req.query.idsede;
        
        
   
    if (!idsede) return res.status(400).json('No se ha especificado la Sede');
    try {
        const sede =  await Sede.findAll({  
                   
           where:{id: idsede},
           include:[{
            model: Speciality
           }]
           
        })
        if (!sede.length) return res.status(200).send('No hay especialidades para la sede seleccionada.')
        res.status(200).send(sede)
    } catch (error) {
        res.status(400).send(error);
        
    }


  
};