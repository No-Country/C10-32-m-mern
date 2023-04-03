import express, { Router } from 'express';
import { getspecialistbysede, getspecialistdetails } from '../controllers/specialist.controller';

const router: Router = Router();

router.get('/specialistbysede', getspecialistbysede);
router.get('/specialistdetails/:id', getspecialistdetails);

export default router;
