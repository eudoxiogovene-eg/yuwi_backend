

import {Request,Response,} from "express"


import {createQuiz,getQuiz,getQuizzes,updateQuiz} from "../repositories/quiz.repository"
import {quizSchema } from "../validations/quiz.schema.validation"


export const Quiz__Controlers ={
    
   async store(req:Request,res:Response){
     const {numeroQuiz,category,subCategory,area,level}=req.body
        try {
            await quizSchema.validate(req.body)
            const newQuiz= await createQuiz({numeroQuiz,category,subCategory,area,level})      
            return res.status(200).json({
                message:" quiz criado com sucesso",
                data:newQuiz   
            }) 
        } catch (error:any) {
            return res.status(400).json({message:error.message})
        }

   },

   async index(req:Request,res:Response){
       try {
           const quizzes= await getQuizzes()
           
           return res.status(200).json({message:"quizzes encontrados com sucesso",dados:quizzes})
       } catch (error:any) {
           return res.status(400).json({message:error.message})
       }
   },
   async show(req:Request,res:Response){
       const {quizId} = req.params 
       const id=quizId.toString()
      
       try {
           const quiz= await getQuiz(id)
           return res.status(200).json({message:"quiz encontrado com sucesso",dado:quiz})
       } catch (error:any) {
           return res.status(400).json({message:error.message})
       }
   },
   
   async update(req:Request,res:Response){
       const {quizId} = req.params
       const id:string=quizId.toString()
   
       const {numeroQuiz,category,subCategory,area,level}=req.body
       try {
           await quizSchema.validate(req.body)
           await getQuiz(id)
           const quizUpdated= await updateQuiz({id,numeroQuiz,category,subCategory,area,level})
           return res.status(200).json({message:"numero actualizado com sucesso",dado:quizUpdated})
       } catch (error:any) {
           return res.status(400).json({message:error.message})
       }
   },

 
}