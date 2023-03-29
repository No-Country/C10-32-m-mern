import app from './app'
import { sequelize } from './database/db'

import './models/user.model'

async function main() {
  await sequelize.sync({ force: false })
  app.listen(3000)
  console.log('Server on port 4000')
}

main()
