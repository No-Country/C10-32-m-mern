
import { Request, Response } from "express";
import {ObraSocial} from "../models/obrasocial.model";
 
import jwt from 'jsonwebtoken';




 
export const getobrasociales = async (req : Request,res : Response)=> {
    
try {
    const obrassociales = await ObraSocial.findAll();
    console.log(obrassociales.length)
    if (obrassociales.length==0) return res.status(400).json('No existen datos')
    
    res.status(200).json(obrassociales)
    
} catch (error) {
    res.status(400).json(error)
}
  
};