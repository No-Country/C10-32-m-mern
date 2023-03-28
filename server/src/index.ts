import app from "./app";
import  sequelize  from "./database/db";
import User from "./models/user.model";

function main() {
  app.listen(app.get("port"));

  // Connecting to database
//   (async () => {
//     await SequelizeConnection.connect();
//     db.sequelize.sync({force:true})

// //     await User.sync({ force: true });
// // console.log("The table for the User model was just (re)created!");      
  
//   })();

async function dbConnect() {

  try {
      await sequelize.authenticate();
      console.log('Base de datos conectada')
      // await sequelize.sync({ force: true })
      // console.log("The table for the User model was just (re)created!");
      sequelize.sync({ force: true })
  .then(() => console.log('Table created successfully'))
  .catch((error) => console.log('Error creating table: ', error));
  } catch (error) {
      console.log(error);
      console.log('Error al conectarse a la base de datos')
  }

 
  
  console.log("Server on port", app.get("port"));
}
dbConnect()


}
main();
