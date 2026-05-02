

import {createExercise,findQuizExercise,createManyExercise} from "../repositories/exercise.repository"
import {findQuizExerciseTranslation} from "../repositories/exerciseTranslation.repository"
import {exerciseSchema} from "../validations/exercise.schema.validation"
import {QuizData,
    createQuiz, 
    getQuiz,
    getQuizzes,updateQuiz,
    createSemAreaQuiz,filterQuiz,
 filterQuizSemArea,
} from "../repositories/quiz.repository"
import {quizSchema} from "../validations/quiz.schema.validation"
import {ExerciseData} from "../repositories/exercise.repository"



import {findLevelByName} from "../repositories/level.repository"
import {findCategoryByName} from "../repositories/category.repository"
import {findSubCategoryByNameAndCategory} from "../repositories/subCategory.repository"
import {findAreaByNameCategoryAndSubCategory} from "../repositories/area.repository"


interface QuizChooseData{
    category:string,
        subCategory:string
        area?:string,
        level:string
}

export const typeQuizChoose= async(data:QuizChooseData)=>{
   
            if(!data.area){
                console.log("entrou no sem")
                const categoryExist= await findCategoryByName(data.category)
                const category_id=categoryExist._id.toString()

                const subCategoryExist= await findSubCategoryByNameAndCategory({
                    name:data.subCategory,
                    category:category_id
                })
                const subCategory_id=subCategoryExist._id.toString()

                
                const levelExist= await findLevelByName(data.level)
                const level_id=levelExist._id.toString()
                

                const quizzes= await filterQuizSemArea({
                    category:category_id,
                    subCategory:subCategory_id,
                    level:level_id
                })  
                return quizzes
            }

            console.log("entrou no com area")
            const categoryExist= await findCategoryByName(data.category)
            const category_id=categoryExist._id.toString()
            const subCategoryExist= await findSubCategoryByNameAndCategory({
                name:data.subCategory,
                category:category_id
            })
            const subCategory_id=subCategoryExist._id.toString()

            
            const levelExist= await findLevelByName(data.level)
            const level_id=levelExist._id.toString()
            
            const areaExist= await findAreaByNameCategoryAndSubCategory({
                name:data.area,
                category:category_id,
                subCategory:subCategory_id
            })
            const area_id=areaExist._id.toString()

            const quizzes= await filterQuiz({
                category:category_id,
                subCategory:subCategory_id,
                area:area_id,
                level:level_id
            })  
            return quizzes
    

}