
import {QuizNumbers} from "../models/quizNumber.model"


interface QuizNumberData{
    numeroQuiz:number,
    id:string
}


export const createQuizNumber= async({numeroQuiz}:Omit<QuizNumberData,"id">)=>{
    const quizNumberExist= await QuizNumbers.findOne({numeroQuiz})
    if(quizNumberExist){
        throw new Error("este numero de quiz ja foi cadastrado")
    }

    const newQuizNumber= await QuizNumbers.create({numeroQuiz})

    if(!newQuizNumber){
        throw new Error("houve um erro ao tentar criar numero quiz")
    }
    return newQuizNumber

}

export const getQuizNumber= async({id}:Omit<QuizNumberData,"numeroQuiz">)=>{
    const quizNumber= await QuizNumbers.findById(id)
    if(!quizNumber){
        throw new Error("numero do quiz nao encontrado")
    }
    return quizNumber
}

export const getQuizNumbers= async()=>{
    const quizNumbers= await QuizNumbers.find()
    if(!quizNumbers.length){
        throw new Error("ainda nao ha numeros cadastrados")
    }
    return quizNumbers
}
 

export const updateQuizNumber= async({id,numeroQuiz}:QuizNumberData)=>{
    const quizNumberExist= await QuizNumbers.findOne({numeroQuiz})
    if(quizNumberExist){
        throw new Error("este numero ja foi cadastrada")
    }
    const quizNumberUpdated= await QuizNumbers.findByIdAndUpdate(id,{
        numeroQuiz
    },{
        new:true
    })

    if(!quizNumberUpdated){
        throw new Error("houve um erro ao tentar actualizar numero")
    }

    return quizNumberUpdated
}