import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import productRoute from './routes/productRoute.js'
import userRoute from './routes/userRoute.js'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'

// initialize the express app
const app = express()
dotenv.config()

// middleware
app.use(
  cors({
    origin: true,
    credentials: true,
  })
)
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// PORT setting
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})

// Routes
app.use('/api/v1/product', productRoute)
app.use('/api/v1/user', userRoute)

// sample api endpoint
app.get('/api/v1', (req, res) => {
  res.json('Api running successfully')
})

// Mongodb database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Database connected successfully!..')
  })
  .catch((err) => {
    console.log('Mongodb connection error: ' + err)
  })
