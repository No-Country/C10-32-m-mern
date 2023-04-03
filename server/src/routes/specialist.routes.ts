import express, { Router } from 'express';
import { getspecialistbysede, getspecialistdetails, getspecialistbyfirstletter } from '../controllers/specialist.controller';

const router: Router = Router();

router.get('/specialistbysede', getspecialistbysede);
router.get('/specialistdetails/:id', getspecialistdetails);
router.get('/specialistbfl', getspecialistbyfirstletter);


export default router;
