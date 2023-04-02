import express, { Router } from 'express';
import { getspecialistbysede } from '../controllers/specialist.controller';

const router: Router = Router();

router.get('/specialistbysede', getspecialistbysede);

export default router;
