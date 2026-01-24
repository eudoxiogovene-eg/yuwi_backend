

import mongoose from "mongoose"


const userSchema= new mongoose.Schema({
        nome:{
            type:String,
            lowercase:true,
            required:true
        },
        email:{
            type:String,
            lowercase:true,
            required:true
        },

        password:{
            type:String,
            required:true,
            select:false 
        }, 
 
    },{
        timestamps:true
    })  

export const Users=mongoose.model('User', userSchema) 

