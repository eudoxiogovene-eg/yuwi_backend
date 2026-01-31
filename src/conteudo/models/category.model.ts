


import mongoose from "mongoose"


const categorySchema= new mongoose.Schema({
        name:{
            type:String,
            lowercase:true,
            required:true
        },
 
    },{
        timestamps:true
    })  

export const Categories=mongoose.model('Category', categorySchema) 

