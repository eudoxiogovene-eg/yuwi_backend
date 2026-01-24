

import mongoose from 'mongoose'
import dotenv from "dotenv"

dotenv.config()



const {MONGO_URL}:any=process.env 


export const db_connection=  mongoose.connect(MONGO_URL)  
   
