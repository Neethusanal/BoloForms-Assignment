import express from 'express';
import { pdfUpload } from '../Controller/maincontroller';

const router = express.Router()




router.post('/upload',pdfUpload)
export default router