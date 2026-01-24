

import {Request,Response,} from "express"


import {createSubCategory,getSubCategories,getSubCategory,UpdateSubCategory} from "../repositories/subCategory.repository"
import { subcategorySchema} from "../validations/subcategory.schema.validation"


export const SubCategories__Controlers ={
    
   async store(req:Request,res:Response){
     const {name,category}=req.body
        try {
            await subcategorySchema.validate(req.body)
            const newSubCategory= await createSubCategory({name,category})      
            return res.status(200).json({
                message:"categoria criada com sucesso",
                data:newSubCategory   
            }) 
        } catch (error:any) {
            return res.status(400).json({message:error.message})
        }

   },

   async index(req:Request,res:Response){
       try {
           const subCategories= await getSubCategories()
           
           return res.status(200).json({message:"dados encontrados com sucesso",dados:subCategories})
       } catch (error:any) {
           return res.status(400).json({message:error.message})
       }
   },
   async show(req:Request,res:Response){
       const {subCategoryId} = req.params 
       const id=subCategoryId.toString()
      
       try {
           const category= await getSubCategory({id})
           return res.status(200).json({message:"categoria encontrada com sucesso",dado:category})
       } catch (error:any) {
           return res.status(400).json({message:error.message})
       }
   },
   
   async update(req:Request,res:Response){
       const {subCategoryId} = req.params
       const id:string=subCategoryId.toString()
   
       const {name,category}=req.body
       try {
           await subcategorySchema.validate(req.body)
           await getSubCategory({id})
           const subCategoryUpdated= await UpdateSubCategory({id,name,category})
           return res.status(200).json({message:"categoria actualizada com sucesso",dado:subCategoryUpdated})
       } catch (error:any) {
           return res.status(400).json({message:error.message})
       }
   },

 
}