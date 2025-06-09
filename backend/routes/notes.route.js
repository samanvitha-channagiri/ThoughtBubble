import express from 'express'
import { addEntry,getAllEntries } from '../controllers/entry.controller.js';
import { userAuth } from '../middlewares/auth.middleware.js';
const router=express.Router()

router.post('/add/entry',userAuth,addEntry);
router.get('/feed',userAuth,getAllEntries);

export default router