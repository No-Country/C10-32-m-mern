import {Router} from 'express';
const router: Router = Router();

import {getsedes} from '../controllers/sede.controller'



router.get("/sede", getsedes) 



export default router;