


import mongoose from "mongoose"


const areaSchema= new mongoose.Schema({
        name:{
            type:String,
            lowercase:true,
            required:true
        },
        category:{
                type:mongoose.Schema.Types.ObjectId, 
                ref:'Category ',
                required:true, 
        },
        subCategory:{
                type:mongoose.Schema.Types.ObjectId, 
                ref:'SubCategory ',
                required:true, 
        },
 
    },{
        timestamps:true
    })  

export const Areas=mongoose.model('Area', areaSchema) 

