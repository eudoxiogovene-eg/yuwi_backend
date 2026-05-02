


import mongoose from "mongoose"


const quizSchema= new mongoose.Schema({
        numeroQuiz:{
            type:Number,
            required:true
        },
        category:{
            type:mongoose.Schema.Types.ObjectId, 
            ref:'Category',
            required:true, 
        },
        subCategory:{
            type:mongoose.Schema.Types.ObjectId, 
            ref:'SubCategory',
            required:true, 
        },
        area:{
            type:mongoose.Schema.Types.ObjectId, 
            ref:'Area',
            required:false, 
        },
        level:{
            type:mongoose.Schema.Types.ObjectId, 
            ref:'Level',
            required:true, 
        },
        done:{
            type:String,
            enum: ["true","false"],
            default:"false"
        },
 
    },{
        timestamps:true
    })  
    quizSchema.index({ category: 1,subCategory: 1, numeroQuiz: 1, level: 1, area: 1}, { unique: true })
export const Quiz=mongoose.model('Quiz', quizSchema) 

