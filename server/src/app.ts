import express from 'express'
import morgan from 'morgan'

const app = express()

import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'

//settings
app.set('port', 3000)
//midleware
app.use(morgan('dev'))
app.use(express.json())
//routes
app.use('/api', authRoutes)
app.use('/users', userRoutes)

export default app
