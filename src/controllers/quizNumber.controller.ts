

import {Request,Response,} from "express"


import {createQuizNumber,getQuizNumber,getQuizNumbers,updateQuizNumber} from "../repositories/quizNumber.repository"
import {quizNumber } from "../validations/quizNumber.schema.validation"


export const QuizNumbers__Controlers ={
    
   async store(req:Request,res:Response){
     const {numeroQuiz}=req.body
        try {
            await quizNumber.validate(req.body)
            const newQuizNumber= await createQuizNumber({numeroQuiz})      
            return res.status(200).json({
                message:"numero do quiz criado com sucesso",
                data:newQuizNumber   
            }) 
        } catch (error:any) {
            return res.status(400).json({message:error.message})
        }

   },

   async index(req:Request,res:Response){
       try {
           const quizNumbers= await getQuizNumbers()
           
           return res.status(200).json({message:"numeros de quiz encontrados com sucesso",dados:quizNumbers})
       } catch (error:any) {
           return res.status(400).json({message:error.message})
       }
   },
   async show(req:Request,res:Response){
       const {quizNumberId} = req.params 
       const id=quizNumberId.toString()
      
       try {
           const quizNumber= await getQuizNumber({id})
           return res.status(200).json({message:"numero encontrado com sucesso",dado:quizNumber})
       } catch (error:any) {
           return res.status(400).json({message:error.message})
       }
   },
   
   async update(req:Request,res:Response){
       const {quizNumberId} = req.params
       const id:string=quizNumberId.toString()
   
       const {numeroQuiz}=req.body
       try {
           await quizNumber.validate(req.body)
           await getQuizNumber({id})
           const quizNumberUpdated= await updateQuizNumber({id,numeroQuiz})
           return res.status(200).json({message:"numero actualizado com sucesso",dado:quizNumberUpdated})
       } catch (error:any) {
           return res.status(400).json({message:error.message})
       }
   },

 
}