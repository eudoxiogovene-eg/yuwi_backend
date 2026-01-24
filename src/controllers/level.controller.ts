

import {Request,Response,} from "express"


import {createLevel,getLevel,getLevels,updateLevel} from "../repositories/level.repository"
import {comumSchema } from "../validations/comom.schema.validation"


export const Levels__Controlers ={
    
   async store(req:Request,res:Response){
     const {name}=req.body
        try {
            await comumSchema.validate(req.body)
            const newLevel= await createLevel({name})      
            return res.status(200).json({
                message:"nivel criado com sucesso",
                data:newLevel   
            }) 
        } catch (error:any) {
            return res.status(400).json({message:error.message})
        }

   },

   async index(req:Request,res:Response){
       try {
           const levels= await getLevels()
           
           return res.status(200).json({message:"niveis encontrados com sucesso",dados:levels})
       } catch (error:any) {
           return res.status(400).json({message:error.message})
       }
   },
   async show(req:Request,res:Response){
       const {levelId} = req.params 
       const id=levelId.toString()
      
       try {
           const level= await getLevel({id})
           return res.status(200).json({message:"nivel encontrado com sucesso",dado:level})
       } catch (error:any) {
           return res.status(400).json({message:error.message})
       }
   },
   
   async update(req:Request,res:Response){
       const {levelId} = req.params
       const id:string=levelId.toString()
   
       const {name}=req.body
       try {
           await comumSchema.validate(req.body)
           await getLevel({id})
           const levelUpdated= await updateLevel({id,name})
           return res.status(200).json({message:"nivel actualizado com sucesso",dado:levelUpdated})
       } catch (error:any) {
           return res.status(400).json({message:error.message})
       }
   },

 
}