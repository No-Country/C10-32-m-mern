
import dotenv from 'dotenv';
dotenv.config();
import app from './app';

import { sequelize } from './database/db';
import './models/user.model';
import './models/asociado.model';
import './models/obrasocial.model';

async function main() {
  await sequelize.sync({ force: true })
  app.listen(3000)
  console.log('Server on port 3000')
}

main()

