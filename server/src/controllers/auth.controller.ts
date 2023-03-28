
import { Request, Response } from "express";
//import   {User, UserAttributes} from "../models/user.model";
//mport { v4 as uuid } from 'uuid';
import uuid = require('uuid');


export const signup = (req : Request,res : Response)=> {
    console.log(req.body)
    // let uuidv4: string = uuid.v4();

    // const user = new User({
    //     id: 1,
    //     email: req.body.email,
    //     password: req.body.password,

        
    // })
    // const email = req.body.email;
    // const password = req.body.password;
    // User.create()

   
    
    //res.send(email, password)


};


//login
export const signin = (req : Request,res : Response)=> {
    res.send('signin')
};
