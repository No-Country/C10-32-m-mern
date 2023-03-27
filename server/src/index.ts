import app from "./app";
import { SequelizeConnection } from "./database/db";

function main() {
  app.listen(app.get("port"));

  // Connecting to database
  (async () => {
    await SequelizeConnection.connect();
  })();

  console.log("Server on port", app.get("port"));
}

main();
