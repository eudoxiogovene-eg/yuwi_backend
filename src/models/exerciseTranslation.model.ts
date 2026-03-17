




import mongoose from "mongoose"


const exerciseTranslationSchema= new mongoose.Schema({
    numero:{
      type:String,
      lowercase:true,
      required:true
    },
    resposta_correcta:{
      type:String,
      required:true, 
      lowercase:true
    },
    opcoes:[{
        type:String,
        required:true, 
        lowercase:true
    }],
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
exerciseTranslationSchema.index({ quiz: 1, numero: 1 }, { unique: true })
export const ExercisesTranslation=mongoose.model('ExerciseTranslation', exerciseTranslationSchema) 

