

import {Request,Response,} from "express"


import {createCategory,getCategory,getCategories,UpdateCategory} from "../repositories/category.repository"
import {comumSchema } from "../validations/comom.schema.validation"


export const Categories__Controlers ={
    
   async store(req:Request,res:Response){
     const {name}=req.body
        try {
            await comumSchema.validate(req.body)
            const newCategory= await createCategory({name})      
            return res.status(200).json({
                message:"categoria criada com sucesso",
                data:newCategory   
            }) 
        } catch (error:any) {
            return res.status(400).json({message:error.message})
        }

   },

   async index(req:Request,res:Response){
       try {
           const categories= await getCategories()
           
           return res.status(200).json({message:"dados encontrados com sucesso",dados:categories})
       } catch (error:any) {
           return res.status(400).json({message:error.message})
       }
   },
   async show(req:Request,res:Response){
       const {categoryId} = req.params 
       const id=categoryId.toString()
      
       try {
           const category= await getCategory({id})
           return res.status(200).json({message:"categoria encontrada com sucesso",dado:category})
       } catch (error:any) {
           return res.status(400).json({message:error.message})
       }
   },
   
   async update(req:Request,res:Response){
       const {categoryId} = req.params
       const id:string=categoryId.toString()
   
       const {name}=req.body
       try {
           await comumSchema.validate(req.body)
           await getCategory({id})
           const categoryUpdated= await UpdateCategory({id,name})
           return res.status(200).json({message:"categoria actualizada com sucesso",dado:categoryUpdated})
       } catch (error:any) {
           return res.status(400).json({message:error.message})
       }
   },

 
}