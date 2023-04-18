import { Sequelize } from 'sequelize';
import { DB_USER, DB_NAME, DB_PASSWORD, DB_HOST } from '../config/config';


export const sequelize = new Sequelize(
  DB_NAME!, // db name,
	DB_USER!, // username
	DB_PASSWORD, // password
	{
    host: DB_HOST,
		dialect: 'postgres',
	}
  );
  
  // En sequelize.models están todos los modelos importados como propiedades
  // Para relacionarlos hacemos un destructuring
  //const { Specialist, Sede } = sequelize.models;
  
  // Aca vendrian las relaciones
  // Product.hasMany(Reviews);
  
  // Specialist.belongsToMany(Sede, {through:'Specialist_sede'});
  // Sede.belongsToMany(Specialist, {through:'Specialist_sede'})
