import {Router} from 'express';
const router: Router = Router();

import {signup, signin} from '../controllers/auth.controller'

//ruta de prueba para borrar
router.get ("/" , (req,res) =>{
    res.send("prueba de rutas");
    
})

router.post("/signin", signin) 
router.post("/signup", signup) 


export default router;