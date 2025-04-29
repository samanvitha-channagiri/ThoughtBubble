import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import { connectDB } from './config/database.config.js'
import authRoutes from './routes/auth.route.js'
import profileRoutes from './routes/profile.route.js'
import cookieParser from 'cookie-parser'
import { userAuth } from './middlewares/auth.middleware.js'
const app=express()
const port=5000
dotenv.config()
app.use(express.json());
app.use(cookieParser())

connectDB()
app.use('/',authRoutes)
app.use('/',profileRoutes)

app.get('/',(req,res)=>{
    res.send('Hello world')
})




app.listen(port,()=>{
    console.log("Server is listening on the port"+port);
    
})