// import { connect } from "http2";
// import { Dialect, Options, Sequelize } from "sequelize";

// export class SequelizeConnection {
//   private static instance: Sequelize;

//   static getInstance(): Sequelize {
//     if (!SequelizeConnection.instance) {
//       const dbConfig = {} as Options;

//       dbConfig.port = 5432;
//       dbConfig.host = "localhost";
//       dbConfig.database = "C10-32-m-mern";
//       dbConfig.ssl = false;
//       dbConfig.username = "postgres";
//       dbConfig.password = "nico";
//       dbConfig.logging = true;
//       dbConfig.dialect = "postgres" as Dialect;

//       SequelizeConnection.instance = new Sequelize(dbConfig);
//     }
//     return SequelizeConnection.instance;
//   }

//   static async connect(): Promise<Sequelize> {
//     const sequelize = SequelizeConnection.getInstance();
//     try {
//       await sequelize.authenticate();
//       console.log("Database authenticadted succesfully");
//       return sequelize;
//     } catch (error) {
//       console.log("Error while creation conection db:: ");
//       return sequelize;
//     }
//   }
// }


import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('C10-32-m-mern', 'postgres', 'nico', {
    host: 'localhost',
    dialect: 'postgres'
  });

  export default sequelize;