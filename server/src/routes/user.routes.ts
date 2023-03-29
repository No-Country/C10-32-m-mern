import express, { Router } from 'express';
import { findAllUsers } from '../controllers/user.controller';

const router: Router = Router();

router.get('/', findAllUsers);

export default router;
