import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import productRoute from './routes/productRoute.js'
import userRoute from './routes/userRoute.js'

// initialize the express app
const app = express()

// middleware
app.use(cors())
app.use(express.json())

// PORT setting
const PORT = process.env.PORT || 8080
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
  .connect('mongodb+srv://mern:mern@cluster0.yn6ajff.mongodb.net/')
  .then(() => {
    console.log('Database connected successfully!..')
  })
  .catch((err) => {
    console.log('Mongodb connection error: ' + err)
  })
