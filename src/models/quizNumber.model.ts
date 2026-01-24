


import mongoose from "mongoose"


const quizNumberSchema= new mongoose.Schema({
        numeroQuiz:{
            type:Number,
            lowercase:true,
            required:true
        },
 
    },{
        timestamps:true
    })  

export const QuizNumbers=mongoose.model('QuizNumber', quizNumberSchema) 

