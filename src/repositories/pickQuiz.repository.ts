
import {Quiz} from "../models/quiz.model"
import {Exercises} from "../models/exercise.model"
import { getQuizzes } from "./quiz.repository"
import {ExercisesTranslation} from "../models/exerciseTranslation.model"



export interface PickQuizData{
 category:string
 subCategory:string
 area?:string,
 level:string
}


export const pickQuiz= async (data:PickQuizData)=>{

     const quizes= await Quiz.find(data)
     if(!quizes){
        throw  new Error("sem quizes cadastrados")
     }


    let data2:any[]=[]
     for(let count=0;count<quizes.length;count++){
        const quizzes2= await Exercises.find({quiz:quizes[count]._id})
        data2=[...data2,quizzes2]
     }

     return data2
     
}

export const pickQuizByQuiz= async (data:string[])=>{

    const quizzes= await Exercises.find({quiz:{ $in: data }})
    if(!quizzes.length){
      throw new Error("exercicios nao encontrados")      
    }
     
     return quizzes
     
}

export const pickExerciseTranslationQuizByQuiz= async (data:string[])=>{

    const quizzes= await ExercisesTranslation.find({quiz:{ $in: data }})
    if(!quizzes.length){
      throw new Error("exercicios nao encontrados")      
    }
     
     return quizzes
     
}