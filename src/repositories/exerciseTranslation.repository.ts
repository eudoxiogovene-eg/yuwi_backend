
import {ExercisesTranslation} from "../models/exerciseTranslation.model"


export interface ExerciseTranslationData{
    id:string
    numero:string,
    opcoes:string[]
    resposta_correcta:string
    pergunta:string
    quiz:string
    numeroNovo:string
}


export const createExerciseTranslation= async(exercise:Omit<ExerciseTranslationData,"id"|"numeroNovo">)=>{
    const exerciseExist= await ExercisesTranslation.findOne({
        numero:exercise.numero,
        quiz:exercise.quiz
    })

    if(exerciseExist){
        throw new Error("este esxercicio ja foi cadastrado")
    }

    const newExercise= await ExercisesTranslation.create({
        numero:exercise.numero,
        opcoes:exercise.opcoes,
        resposta_correcta:exercise.resposta_correcta,
        pergunta:exercise.pergunta,
        quiz:exercise.quiz
    })

    if(!newExercise){
        throw new Error("houve um erro ao tentar criar exercicio")
    }
    return newExercise

}

export const getExerciseTranslation= async(id:string)=>{
    const exercise= await ExercisesTranslation.findById(id)
    if(!exercise){
        throw new Error("exrcicio nao encontrada")
    }
    return exercise
}

export const getExercisesTranslation= async()=>{
    
    const exercices= await ExercisesTranslation.find()
    if(!exercices.length){
        throw new Error("ainda nao ha exercicios cadastrados")
    }
    return exercices     
}
 

export const updateExerciseTranslation= async(exercise:ExerciseTranslationData,id:string)=>{
     const exerciseExist= await ExercisesTranslation.findOne({
        numero:exercise.numero,
        quiz:exercise.quiz,
        opcoes:exercise.opcoes,
        resposta_correcta:exercise.resposta_correcta,
        pergunta:exercise.pergunta

    })

    if(exerciseExist){
        console.log(exercise.numero==exercise.numeroNovo)
        if(exercise.numero==exercise.numeroNovo){
            throw new Error("este exercicio ja foi cadastrado")
        }
    }
    const  numberEqual= await ExercisesTranslation.findOne({
         numero:exercise.numeroNovo,
         quiz:exercise.quiz
        
    })

   
    if(exerciseExist && numberEqual){
        const numberEqualId=numberEqual?._id.toString()
        if(numberEqualId!=id){
            throw new Error("este exercicio ja existe")
        }
    }

    
 
    const exerciseUpdated= await ExercisesTranslation.findByIdAndUpdate(id,{
        numero:exercise.numeroNovo,
        opcoes:exercise.opcoes,
        resposta_correcta:exercise.resposta_correcta,
        pergunta:exercise.pergunta,
        quiz:exercise.quiz
    },{
        new:true
    })
   

    if(!exerciseUpdated){
        throw new Error("houve um erro ao tentar actualizar exercicio")
    }

    return exerciseUpdated
}

export const findQuizExerciseTranslation= async(quiz:string)=>{
 
    const quizExerciseExist= await ExercisesTranslation.findOne({
        quiz
    })
    return quizExerciseExist
}
export const findExerciseTranslationsByQuiz= async(quiz:string)=>{
 
    const quizExerciseExist= await ExercisesTranslation.find({
        quiz
    })
    return quizExerciseExist
}

export const createManyExercisesTranslations= async(exercises:Omit<ExerciseTranslationData,"id"|"numeroNovo">[])=>{
    try {
        const result = await ExercisesTranslation.insertMany(exercises, {
        ordered: false
        })
        return result
  } catch (error: any) {
    if (error.code === 11000) {
      console.log("alguns exercícios já existiam")
    }
  }
}