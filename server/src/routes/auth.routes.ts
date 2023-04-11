import { Router } from 'express';
const router: Router = Router();

import { signup, signin, logout } from '../controllers/auth.controller';

//ruta de prueba para borrar
router.get('/', (req, res) => {
	res.send('prueba de rutas');
});

router.post('/signin', signin);
router.post('/signup', signup);
router.get('/logout', logout);

export default router;
