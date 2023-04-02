import app from './app';
import { PORT } from './config/config';

import { sequelize } from './database/db';
import './models/user.model';
import './models/asociado.model';
import './models/obrasocial.model';
import './models/sede.model';
import './models/specialist.model';
import './models/speciality.model'


async function main() {
	await sequelize.sync({ force: false });
	app.listen(PORT);
	console.log(`Server on port ${PORT}`);
}

main();
