


import mongoose from "mongoose"


const quizSchema= new mongoose.Schema({
        numeroQuiz:{
            type:Number,
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
        area:{
            type:mongoose.Schema.Types.ObjectId, 
            ref:'Area ',
            required:true, 
        },
        level:{
            type:mongoose.Schema.Types.ObjectId, 
            ref:'Level ',
            required:true, 
        },
        done:{
            type:String,
            enum: ['true','false'],
            default:"false"
        },
 
    },{
        timestamps:true
    })  

export const Quiz=mongoose.model('Quiz', quizSchema) 

