import express from 'express'
import User from '../models/user.model.js'
import { userAuth } from '../middlewares/auth.middleware.js'
import { viewProfile } from '../controllers/profile.controller.js'
const router=express.Router()

router.get('/profile/view',userAuth,viewProfile)


export default router