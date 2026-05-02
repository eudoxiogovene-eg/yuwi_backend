

import {db_connection} from "../db/config"


import {
    createQuiz,getQuiz,getQuizzes,updateQuiz,
    createSemAreaQuiz,filterQuiz,
    filterQuizSemArea,
    createManyQuizzesSemArea,QuizData,
    FilterQuizSemAreaData,
} from "../repositories/quiz.repository"

import {findLevelByName} from "../repositories/level.repository"
import {findCategoryByName} from "../repositories/category.repository"
import {findSubCategoryByNameAndCategory} from "../repositories/subCategory.repository"
import {findAreaByNameCategoryAndSubCategory} from "../repositories/area.repository"




async function seed(){

    //iniciante
    //básico
    //Intermediário
    //avançado
    
    const data={
        category:"dia-a-dia",
        subCategory:"alimentação e refeições",
        level:"avançado"
    }

    const limite=10
   
    

  
    
    try {
     
     const categoryExist= await findCategoryByName(data.category)
            const category_id=categoryExist._id.toString()
            const subCategoryExist= await findSubCategoryByNameAndCategory({
                name:data.subCategory,
                category:category_id
            })
            const subCategory_id=subCategoryExist._id.toString()
            const levelExist= await findLevelByName(data.level)
            const level_id=levelExist._id.toString()
           
      
       
        let quizzes:Omit<QuizData,"id"|"area">[]=[]

        for(let count=0;count<limite;count++){
            const newQuiz:Omit<QuizData,"id"|"area">={
                category:category_id,
                subCategory:subCategory_id,
                level:level_id,
                numeroQuiz:count+1
            }
            quizzes.push(newQuiz)
            
        }
    
        await createManyQuizzesSemArea(quizzes) 
    
     
           console.log("cadastro de quizzes realizado com sucesso")    
    } catch (error:any) {
            console.log("houve um erro "+ error.message)
    }
   
       

     
}


 db_connection.then(()=>{   
     console.log("banco conectado com sucesso")
     seed()
 })
 .catch(function(erro){
        return   console.log("houve um erro "+erro.message)    
}) 

