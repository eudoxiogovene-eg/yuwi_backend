

import {Request,Response,} from "express"


import {createExerciseTranslation,ExerciseTranslationData,getExerciseTranslation,getExercisesTranslation,updateExerciseTranslation} from "../repositories/exerciseTranslation.repository"
import {exerciseTranslationSchema,exerciseTranslationUpdateSchema} from "../validations/exerciseTranslation.schema.validation"


export const ExerciseTranslation__Controlers ={
    
   async store(req:Request,res:Response){
     const {
        numero,resposta_correcta,
        pergunta,quiz,opcoes
     }=req.body
     const exercicio:ExerciseTranslationData=req.body
     
        try {
            await exerciseTranslationSchema.validate(req.body)
            const novoExercicio= await createExerciseTranslation(exercicio)      
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
           const exercicios= await getExercisesTranslation()
           return res.status(200).json({message:"exercicios encontrados com sucesso",dados:exercicios})
       } catch (error:any) {
           return res.status(400).json({message:error.message})
       }
   },
   async show(req:Request,res:Response){
       const {exercicioId} = req.params 
       const id=exercicioId.toString()
      
       try {
           const exercicio= await getExerciseTranslation(id)
           return res.status(200).json({message:"exercicio encontrado com sucesso",dado:exercicio})
       } catch (error:any) {
           return res.status(400).json({message:error.message})
       }
   },
   
    async update(req:Request,res:Response){
        const {exercicioId} = req.params
        const id:string=exercicioId.toString()
   
         const {
           numero,resposta_correcta,
           pergunta,quiz,opcoes
        }=req.body

     const exercicio:ExerciseTranslationData=req.body
        try {
            await exerciseTranslationUpdateSchema.validate(req.body)
            await getExerciseTranslation(id)
            const exerciseUpdated= await updateExerciseTranslation(exercicio,id)
            return res.status(200).json({message:"nivel actualizado com sucesso",dado:exerciseUpdated})
        } catch (error:any) {
            return res.status(400).json({message:error.message})
        }
    },

 
}