

import express from 'express'
import dotenv from 'dotenv';
import dbConnection from './config/db.js';
import mainRoute from './routes/mainroute.js'
import cors from'cors';
dotenv.config();
 const port=4000
 
;
const app=express();
dbConnection()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());



app.use("/", mainRoute); 


app.listen(port,()=>{
    console.log(`server connected successfully to port ${port}`)
})




