

import {Request,Response,} from "express"


import {ExerciseData,createExercise,getExercises,getExercise,updateExercise} from "../repositories/exercise.repository"
import {exerciseSchema,exerciseUpdateSchema} from "../validations/exercise.schema.validation"


export const Exercise__Controlers ={
    
    
   
   
    
   async store(req:Request,res:Response){
     const {
        numero,alternativa_a,alternativa_b,
        alternativa_c, alternativa_d,alternativa_correcta,
        pergunta,quiz
     }=req.body
     const exercicio:ExerciseData=req.body
     
        try {
            await exerciseSchema.validate(req.body)
            const novoExercicio= await createExercise(exercicio)      
            return res.status(200).json({
                message:"exercicio criado com sucesso",
                data:novoExercicio   
            }) 
        } catch (error:any) {
            return res.status(400).json({message:error.message})
        }

   },

   async index(req:Request,res:Response){
       try {
           const exercicios= await getExercises()
           
           return res.status(200).json({message:"exercicios encontrados com sucesso",dados:exercicios})
       } catch (error:any) {
           return res.status(400).json({message:error.message})
       }
   },
   async show(req:Request,res:Response){
       const {exercicioId} = req.params 
       const id=exercicioId.toString()
      
       try {
           const exercicio= await getExercise(id)
           return res.status(200).json({message:"exercicio encontrado com sucesso",dado:exercicio})
       } catch (error:any) {
           return res.status(400).json({message:error.message})
       }
   },
   
    async update(req:Request,res:Response){
        const {exercicioId} = req.params
        const id:string=exercicioId.toString()
   
         const {
            numero,alternativa_a,alternativa_b,
            alternativa_c, alternativa_d,alternativa_correcta,
            pergunta,quiz
        }=req.body

     const exercicio:ExerciseData=req.body
        try {
            await exerciseUpdateSchema.validate(req.body)
            await getExercise(id)
            const exerciseUpdated= await updateExercise(exercicio,id)
            return res.status(200).json({message:"nivel actualizado com sucesso",dado:exerciseUpdated})
        } catch (error:any) {
            return res.status(400).json({message:error.message})
        }
    },

 
}