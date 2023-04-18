import { Router } from 'express';
import {
	getavailableshifts,
	scheduleshift,
    getshiftbyuser
} from '../controllers/shift.controller';

const router: Router = Router();

router.post('/getshifts', getavailableshifts);
router.post('/scheduleshifts', scheduleshift);
router.get('/shiftbyuser/:id', getshiftbyuser)

export default router;
