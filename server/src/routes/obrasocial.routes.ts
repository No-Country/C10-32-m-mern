import {Router} from 'express';
const router: Router = Router();

import {getobrasociales} from '../controllers/obrasocial.controller'



router.get("/obrasocial", getobrasociales) 



export default router;