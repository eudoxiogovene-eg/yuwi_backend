

import {Request,Response,} from "express"


import {createArea,getAreas,getArea,UpdateArea} from "../repositories/area.repository"
import {areaSchema } from "../validations/area.schema.validation"


export const Areas__Controlers ={
    
   async store(req:Request,res:Response){
     const {name,category,subCategory}=req.body
        try {
            await areaSchema.validate(req.body)
            const newArea= await createArea({name,category,subCategory})      
            return res.status(200).json({
                message:"area criada com sucesso",
                data:newArea   
            }) 
        } catch (error:any) {
            return res.status(400).json({message:error.message})
        }

   },

   async index(req:Request,res:Response){
       try {
           const areas= await getAreas()
           
           return res.status(200).json({message:"areas encontradas com sucesso",dados:areas})
       } catch (error:any) {
           return res.status(400).json({message:error.message})
       }
   },
   async show(req:Request,res:Response){
       const {areaId} = req.params 
       const id=areaId.toString()
      
       try {
           const area= await getArea(id)
           return res.status(200).json({message:"area encontrada com sucesso",dado:area})
       } catch (error:any) {
           return res.status(400).json({message:error.message})
       }
   },
   
   async update(req:Request,res:Response){
       const {areaId} = req.params
       const id:string=areaId.toString()
   
       const {name,category,subCategory}=req.body
       try {
           await areaSchema.validate(req.body)
           await getArea(id)
           const areaUpdated= await UpdateArea({id,name,category,subCategory})
           return res.status(200).json({message:"area actualizada com sucesso",dado:areaUpdated})
       } catch (error:any) {
           return res.status(400).json({message:error.message})
       }
   },

 
}