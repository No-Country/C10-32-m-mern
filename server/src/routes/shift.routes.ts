import { Router } from 'express';
import {
	getavailableshifts,
	scheduleshift,
} from '../controllers/shift.controller';

const router: Router = Router();

router.post('/getshifts', getavailableshifts);
router.post('/scheduleshifts', scheduleshift);

export default router;
