


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
    quiz:{
        type:mongoose.Schema.Types.ObjectId, 
        ref:'Quiz ',
        required:true, 
    },

    },{
        timestamps:true
    })  
    exerciseSchema.index({ quiz: 1, numero: 1 }, { unique: true })
export const Exercises=mongoose.model('Exercise', exerciseSchema) 

