import express, { Router } from 'express';
import { getspecialiestbysede } from '../controllers/speciality.controller';

const router: Router = Router();

router.get('/specialiestbysede', getspecialiestbysede);

export default router;
