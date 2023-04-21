import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import obrasocialRoutes from './routes/obrasocial.routes';
import sedeRoutes from './routes/sede.routes';
import specialistRoutes from './routes/specialist.routes';
import specialityRoutes from './routes/speciality.routes';
import shiftRoutes from './routes/shift.routes';

import { PORT } from './config/config';
require('./models/associations');

//settings
app.set('port', PORT);
//midleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.static('public'));
//routes
app.use('/api', authRoutes);
app.use('/api', obrasocialRoutes);
app.use('/api', sedeRoutes);
app.use('/api', specialistRoutes);
app.use('/api', specialityRoutes);
app.use('/api', shiftRoutes);

app.use('/users', userRoutes);

export default app;
