

import express from 'express'
import dotenv from 'dotenv';
import dbConnection from './config/db.js';
dotenv.config();
 const port=5000
 console.log(port)
;
const app=express();
dbConnection()
app.use(express.json());






app.listen(port,()=>{
    console.log(`server connected successfully to port ${port}`)
})




