
import { Request, Response } from "express";
import {Sede} from "../models/sede.model";
 

export const getsedes = async (req : Request,res : Response)=> {
    
try {
    const sedes = await Sede.findAll();
   
    if (sedes.length==0) return res.status(400).json('No existen datos')
    
    res.status(200).json(sedes)
    
} catch (error) {
    res.status(400).json(error)
}
  
};