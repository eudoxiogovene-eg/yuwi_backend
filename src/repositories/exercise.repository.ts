
import {Exercises} from "../models/exercise.model"


export interface ExerciseData{
    id:string
    numero:string,
    alternativa_a:string
    alternativa_b:string
    alternativa_c:string
    alternativa_d:string
    alternativa_correcta:string
    pergunta:string
    numeroQuiz:string
    category:string
    level:string
    subCategory:string
    area:string
    numeroNovo:string
}


export const createExercise= async(exercise:Omit<ExerciseData,"id"|"numeroNovo">)=>{
    
    const exerciseExist= await Exercises.findOne({
        numero:exercise.numero,
        numeroQuiz:exercise.numeroQuiz,
        category:exercise.category,
        level:exercise.level,
        subCategory:exercise.subCategory,
        area:exercise.area
    })
    if(exerciseExist){
        throw new Error("este esxercicio ja foi cadastrado")
    }

    const newExercise= await Exercises.create({
        numero:exercise.numero,
        alternativa_a:exercise.alternativa_a,
        alternativa_b:exercise.alternativa_b,
        alternativa_c:exercise.alternativa_c,
        alternativa_d:exercise.alternativa_d,
        alternativa_correcta:exercise.alternativa_correcta,
        pergunta:exercise.pergunta,
        numeroQuiz:exercise.numeroQuiz,
        category:exercise.category,
        level:exercise.level,
        subCategory:exercise.subCategory,
        area:exercise.area
    })

    if(!newExercise){
        throw new Error("houve um erro ao tentar criar exercicio")
    }
    return newExercise

}

export const getExercise= async(id:string)=>{
    const exercise= await Exercises.findById(id)
    if(!exercise){
        throw new Error("exrcicio nao encontrada")
    }
    return exercise
}

export const getExercises= async()=>{
    //await Exercises.deleteMany()
    const exercices= await Exercises.find()
    if(!exercices.length){
        throw new Error("ainda nao ha exercicios cadastrados")
    }
    return exercices
}
 

export const updateExercise= async(exercise:ExerciseData,id:string)=>{
     const exerciseExist= await Exercises.findOne({
        numero:exercise.numero,
        numeroQuiz:exercise.numeroQuiz,
        category:exercise.category,
        level:exercise.level,
        subCategory:exercise.subCategory,
        area:exercise.area,
        alternativa_a:exercise.alternativa_a,
        alternativa_b:exercise.alternativa_b,
        alternativa_c:exercise.alternativa_c,
        alternativa_d:exercise.alternativa_d,
        alternativa_correcta:exercise.alternativa_correcta,
        pergunta:exercise.pergunta

    })

    if(exerciseExist){
        console.log(exercise.numero==exercise.numeroNovo)
        if(exercise.numero==exercise.numeroNovo){
            throw new Error("este exercicio ja foi cadastrado")
        }
    }
    const  numberEqual= await Exercises.findOne({
         numero:exercise.numeroNovo,
         numeroQuiz:exercise.numeroQuiz,
         category:exercise.category,
         level:exercise.level,
         subCategory:exercise.subCategory,
         area:exercise.area,
    })

   
    if(exerciseExist && numberEqual){
        const numberEqualId=numberEqual?._id.toString()
        if(numberEqualId!=id){
            throw new Error("este exercicio ja existe")
        }
    }

    
 
    const exerciseUpdated= await Exercises.findByIdAndUpdate(id,{
        numero:exercise.numeroNovo,
        alternativa_a:exercise.alternativa_a,
        alternativa_b:exercise.alternativa_b,
        alternativa_c:exercise.alternativa_c,
        alternativa_d:exercise.alternativa_d,
        alternativa_correcta:exercise.alternativa_correcta,
        pergunta:exercise.pergunta,
        numeroQuiz:exercise.numeroQuiz,
        category:exercise.category,
        level:exercise.level,
        subCategory:exercise.subCategory,
        area:exercise.area
    },{
        new:true
    })
    console.log(updateExercise)

    if(!exerciseUpdated){
        throw new Error("houve um erro ao tentar actualizar exercicio")
    }

    return exerciseUpdated
}