
import {Quiz} from "../models/quiz.model"


export interface QuizData{
    id:string
    numeroQuiz:number,
    category:string
    subCategory:string
    area:string,
    level:string
    
}


export const createQuiz= async({numeroQuiz,category,subCategory,area,level}:Omit<QuizData,"id">)=>{
    const quizExist= await Quiz.findOne({numeroQuiz,category,subCategory,area,level})
    if(quizExist){
        throw new Error("este quiz ja foi cadastrado")
    }

    const newQuiz= await Quiz.create({numeroQuiz,category,subCategory,area,level})

    if(!newQuiz){
        throw new Error("houve um erro ao tentar criar numero quiz")
    }
    return newQuiz

}

export const getQuiz= async(id:string)=>{
    const quiz= await Quiz.findById(id)
    if(!quiz){
        throw new Error(" quiz nao encontrado")
    }
    return quiz
}

export const getQuizzes= async()=>{
   // await Quiz.deleteMany()
    const quizzes= await Quiz.find()
    if(!quizzes.length){
        throw new Error("ainda nao ha quizzes cadastrados")
    }
    return quizzes
}
 

export const updateQuiz= async({id,numeroQuiz,category,subCategory,area,level}:QuizData)=>{
    const quizExist= await Quiz.findOne({numeroQuiz,category,subCategory,area,level})
    if(quizExist){
        throw new Error("este quiz ja foi cadastrado")
    }
    const quizUpdated= await Quiz.findByIdAndUpdate(id,{
        numeroQuiz,category,subCategory,area,level
    },{
        new:true
    })

    if(!quizUpdated){
        throw new Error("houve um erro ao tentar actualizar o quiz")
    }

    return quizUpdated
}