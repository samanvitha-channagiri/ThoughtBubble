import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import { connectDB } from './config/database.config.js'
import authRoutes from './routes/auth.route.js'
import profileRoutes from './routes/profile.route.js'
import entryRoutes from './routes/notes.route.js'
import cookieParser from 'cookie-parser'
import { userAuth } from './middlewares/auth.middleware.js'
const app=express()
const port=5000
dotenv.config()
app.use(express.json());
app.use(cookieParser())

connectDB()
<<<<<<< HEAD


app.use('/',authRoutes)
app.use('/',profileRoutes)
app.use('/',entryRoutes)
=======
app.use('/',authRoutes)
app.use('/',profileRoutes)
app.use('/',entryRoutes)

>>>>>>> f859783cb6e3d30e571260085a8540861c3d6e75
app.get('/',(req,res)=>{
    res.send('Hello world')
})




app.listen(port,()=>{
    console.log("Server is listening on the port"+port);
    
})