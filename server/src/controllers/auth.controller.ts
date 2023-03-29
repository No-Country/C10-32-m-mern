
import { Request, Response } from "express";
import {User} from "../models/user.model";
import jwt from 'jsonwebtoken';

const bcrypt = require('bcrypt');




//Registro usuario. 
export const signup = async (req : Request,res : Response)=> {
    
    const {body} = req;
   
    // chequear que el usuario exista en la BD de asociados

    //registrando usuario//
    try {
         //const newUser = await User.create(body);
        const hashpass = await  bcrypt.hash(body.password, 10)
        
        
         const newUser = await User.create({email: body.email, password: hashpass});
         // creo token
         const token : string = jwt.sign({_id: newUser.dataValues.id}, process.env.TOKEN_SECRET || 'tokenalternativo')      
        res.header('auth-token', token).json(newUser);        
    } catch (error) {
         res.status(400).json(error)
    }   
  
};




//login
export const signin = async (req : Request,res : Response)=> {
    try {
        const loginuser = await User.findAll({  where: {email : req.body.email} })
        if (!loginuser) return res.status(400).json('your credentials are not valid')     
      
        if (!bcrypt.compareSync(req.body.password, loginuser[0].dataValues.password) ) return res.status(400).json('your credentials are not valid')
         
        const token : string = jwt.sign({_id: loginuser[0].dataValues.id}, process.env.TOKEN_SECRET || 'tokenalternativo')     
        res.header('auth-token', token).json(loginuser);        
        
      } catch (error) {
        res.status(404).json(error)
        
      }
      
};