import { Request, Response } from "express";
import {Specialist} from "../models/specialist.model";
import {Sede} from "../models/sede.model";



// Obtiene los especialistas de la sede enviada por query. 
 
export const getspecialistbysede = async (req : Request,res : Response)=> {
        const idsede = req.query.idsede;
        console.log(idsede);
        
   
    if (!idsede) return res.status(400).json('No se ha especificado la Sede');
    try {
        const sede =  await Sede.findAll({  
                   
           where:{id: idsede},
           include:[{
            model: Specialist
           }]
           
        })
        if (!sede.length) return res.status(200).send('No hay especialistas para la sede seleccionada.')
        res.status(200).send(sede)
    } catch (error) {
        res.status(400).send(error);
        
    }


  
};


export const  getspecialistdetails = async (req : Request,res : Response)=> {
    const idspecialist = req.params.id
    console.log(idspecialist)
    try {
        const specialistdetails = await Specialist.findByPk(idspecialist)
        if (!specialistdetails) return res.status(200).send('No existe especialista con el id enviado.')
        res.status(200).send(specialistdetails)

    } catch (error) {
        res.status(400).send(error);
    }


}