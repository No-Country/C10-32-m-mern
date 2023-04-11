import { Router } from 'express';
import { getavailableshifts } from '../controllers/shift.controller';

const router: Router = Router();

router.get('/getshifts', getavailableshifts);



export default router;
