import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import obrasocialRoutes from './routes/obrasocial.routes';
import sedeRoutes from './routes/sede.routes';
import { PORT } from './config/config';

var whitelist = ['http://localhost:3000'];
var corsOptions = {
	credentials: true,
	origin: function (origin: any, callback: any) {
		if (whitelist.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'));
		}
	},
};

//settings
app.set('port', PORT);
//midleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors(corsOptions));
//routes
app.use('/api', authRoutes);
app.use('/api', obrasocialRoutes);
app.use('/api', sedeRoutes);
app.use('/users', userRoutes);

export default app;
