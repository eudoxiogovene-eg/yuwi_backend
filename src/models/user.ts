

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
        como_conheceu:{
            type:String,
            required:false
        }, 
         objectivo:{
            type:String,
            required:false
        }, 
         meta_diaria:{
            type:String,
            required:false
        }, 
         nivel:{
            type:String,
            required:false
        }, 
         pais:{
            type:String,
            required:false
        }, 
 
    },{
        timestamps:true
    })  

export const Users=mongoose.model('User', userSchema) 

