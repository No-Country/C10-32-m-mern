import app from './app';
import { PORT } from './config/config';

import http from 'http';
import { Server as SocketServer } from 'socket.io';

import { sequelize } from './database/db';
import './models/user.model';
import './models/asociado.model';
import './models/obrasocial.model';
import './models/sede.model';
import './models/specialist.model';
import './models/speciality.model';
import './models/Specialist_Sede.model';
import './models/shift.model';

async function main() {
	await sequelize.sync({ force: false });

	const server = http.createServer(app);
	server.listen(PORT);

	console.log(`Server on port ${PORT}`);
	const io = new SocketServer(server, {
		cors: {
			origin: '*',
		},
	});
	io.on('connection', (socket) => {
		console.log('USER CONNECTED');
		console.log(socket.id);
	});
}

main();
