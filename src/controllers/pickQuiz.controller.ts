

import {Request,Response,} from "express"


import {pickQuiz,PickQuizData,pickQuizByQuiz} from "../repositories/pickQuiz.repository"
import {pickQuizSchema} from "../validations/pickQuiz.schema.validation"


export const PickQuiz__Controlers ={
    
 
    async pickQuizController(req:Request,res:Response){
        console.log("chegou no backend")
        const {category,subCategory,area,level} =req.body
        const dados:PickQuizData={ 
            category,subCategory,area,level
        }
        try {
            await pickQuizSchema.validate(dados)
            const quizzes= await pickQuiz(dados)
            return res.status(200).json({data:quizzes})
        } catch (error:any) {
            return res.status(400).json({message:error.message})            
        }
    },
    async pickExerciseByQuizController(req:Request,res:Response){
        
        const {data} =req.body
        console.log(data)
        try {
            const quizzes= await pickQuizByQuiz(data)
            return res.status(200).json({data:quizzes})
        } catch (error:any) {
            return res.status(400).json({message:error.message})             
        }
    }
 
}