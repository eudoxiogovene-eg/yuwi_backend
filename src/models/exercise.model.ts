


import mongoose from "mongoose"


const exerciseSchema= new mongoose.Schema({
    numero:{
      type:String,
      lowercase:true,
      required:true
    },
    alternativa_correcta:{
      type:String,
      required:true, 
      lowercase:true
    },
    alternativa_a:{
       type:String,
       required:true, 
       lowercase:true
    },
    alternativa_b:{
       type:String,
       required:true, 
       lowercase:true
    },
    alternativa_c:{
       type:String,
       required:true, 
       lowercase:true
    },
    alternativa_d:{
       type:String,
       required:true, 
       lowercase:true
    },
    pergunta:{
        type:String,
        required:true, 
        lowercase:true
    },
    numeroQuiz:{
        type:mongoose.Schema.Types.ObjectId, 
        ref:'QuizNumber ',
        required:true, 
    },
    category:{
        type:mongoose.Schema.Types.ObjectId, 
        ref:'Category ',
        required:true, 
    },
    level:{
        type:mongoose.Schema.Types.ObjectId, 
        ref:'Level ',
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
 
    },{
        timestamps:true
    })  

export const Exercises=mongoose.model('Exercise', exerciseSchema) 

