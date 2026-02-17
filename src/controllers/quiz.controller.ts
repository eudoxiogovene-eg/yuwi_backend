

import {Request,Response,} from "express"


import {createQuiz,getQuiz,getQuizzes,updateQuiz,createSemAreaQuiz} from "../repositories/quiz.repository"
import {quizSchema,quizSEmAreaSchema } from "../validations/quiz.schema.validation"
import {findLevelByName} from "../repositories/level.repository"
import {findCategoryByName} from "../repositories/category.repository"
import {findSubCategoryByNameAndCategory} from "../repositories/subCategory.repository"
import {findAreaByNameCategoryAndSubCategory} from "../repositories/area.repository"

export const Quiz__Controlers ={
    
   async store(req:Request,res:Response){
     const {numeroQuiz,category,subCategory,area,level}=req.body
        try {
            await quizSchema.validate(req.body)
            const categoryExist= await findCategoryByName(category)
            const category_id=categoryExist._id.toString()
            const subCategoryExist= await findSubCategoryByNameAndCategory({
                name:subCategory,
                category:category_id
            })
            const subCategory_id=subCategoryExist._id.toString()
            const levelExist= await findLevelByName(level)
            const level_id=levelExist._id.toString()
           
            const areaExist= await findAreaByNameCategoryAndSubCategory({
                name:area,
                category:category_id,
                subCategory:subCategory_id
            })
            const area_id=areaExist._id.toString()
            const newQuiz= await createQuiz({
                numeroQuiz,
                category:category_id,
                subCategory:subCategory_id,
                area:area_id,
                level:level_id
            })      
            return res.status(200).json({
                message:" quiz criado com sucesso",
                data:newQuiz   
            }) 
        } catch (error:any) {
            return res.status(400).json({message:error.message})
        }

   },
    async createQuizSemArea(req:Request,res:Response){
     const {numeroQuiz,category,subCategory,level}=req.body
        try {
            await quizSEmAreaSchema.validate(req.body)
            const newQuiz= await createSemAreaQuiz({numeroQuiz,category,subCategory,level})      
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