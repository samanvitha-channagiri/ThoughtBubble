import express from 'express'
import { addEntry } from '../controllers/entry.controller.js'
import { userAuth } from '../middlewares/auth.middleware.js'
const router=express.Router()
router.post('/add/entry',userAuth,addEntry)

export default router