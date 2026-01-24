


import mongoose from "mongoose"


const levelSchema= new mongoose.Schema({
        name:{
            type:String,
            lowercase:true,
            required:true
        },
 
    },{
        timestamps:true
    })  

export const Levels=mongoose.model('Level', levelSchema) 

