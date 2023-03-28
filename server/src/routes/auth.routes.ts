import {Router} from 'express';
const router: Router = Router();


router.get ("/" , (req,res) =>{
    res.send("prueba de rutas");
    
})

export default router;