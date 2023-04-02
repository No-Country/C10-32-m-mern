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
        res.status(200).send(sede)
    } catch (error) {
        res.status(400).send(error);
        
    }

   
    

    
    
// try {
//     const sedes = await Sede.findAll();
   
//     if (sedes.length==0) return res.status(400).json('No existen datos')
    
//     res.status(200).json(sedes)
    
// } catch (error) {
//     res.status(400).json(error)
// }
  
};
