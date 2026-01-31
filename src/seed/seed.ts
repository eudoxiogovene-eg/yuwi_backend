

import {db_connection} from "../db/config"


import {createExercise} from "../repositories/exercise.repository"
import {Categories} from "../models/category.model"
import {SubCategories} from "../models/subCategory.model"
import {Areas} from "../models/area.model"
import {Levels} from "../models/level.model"
import {Quiz} from "../models/quiz.model"
import { quizInfo,quiz1} from "../conteudo/vocabulario/substantivos/casa_familia/casa_familia"
import {exerciseSchema} from "../validations/exercise.schema.validation"
import {QuizData,createQuiz, getQuiz} from "../repositories/quiz.repository"
import {quizSchema} from "../validations/quiz.schema.validation"
import {ExerciseData} from "../repositories/exercise.repository"
import {createQuizSeed} from "./quizSeed"

const quiz=quiz1






async function seed(){
    const category= await Categories.findOne({name:quizInfo.category})
    if(!category){
        throw new Error("categoria nao encontrada")
    }
    const subCategory= await SubCategories.findOne({name:quizInfo.subCategory})
    if(!subCategory){
        throw new Error("subcategoria nao encontrada")
    }
    const area= await Areas.findOne({name:quizInfo.area})
    if(!area){
        throw new Error("area nao encontrada")
    }
    const level = await Levels.findOne({name:quizInfo.level})
    if(!level){
        throw new Error("nivel nao encontrado")
    }
  

     
        const dadosQuiz:Omit<QuizData,"id">={
            numeroQuiz:quizInfo.quizNUmber,
            category:category._id.toString(),
            subCategory:subCategory._id.toString(),
            area:area._id.toString(),
            level:level._id.toString()
    }
    
    const quizId= await createQuizSeed(dadosQuiz)

    
    for(let count=0;quiz.length>count;count++){ 

        const numero=quiz[count].numero
        const alternativa_correcta=quiz[count].resposta_correta
        const alternativa_a=quiz[count].opcoes.A
        const alternativa_b=quiz[count].opcoes.B
        const alternativa_c=quiz[count].opcoes.C
        const alternativa_d=quiz[count].opcoes.D
       
       

        

         try {
            
            if(!quizId){
                throw new Error("houve um erro ao cadastrar o quiz")
            }
             const pergunta =quiz[count].pergunta
             const dadosExercise:Omit<ExerciseData,"id"|"numeroNovo">={
                numero,alternativa_correcta,alternativa_a,
                alternativa_b,alternativa_c,alternativa_d,
                pergunta,quiz:quizId
             }
             await exerciseSchema.validate(dadosExercise)
             const newExercise= await createExercise(dadosExercise)
             if(!newExercise){
                throw new Error("houve um erro ao tentar criar exercicio")
             }
            
             
        } catch (error:any) {
            console.log("houve um erro "+ error.message)
        }
           

     }
       
console.log("cadastro de quiz e questoes realizado com sucesso")
     
}





 db_connection.then(()=>{  
     console.log("banco conectado com sucesso")
     seed()
 })
 .catch(function(erro){
        return   console.log("houve um erro "+erro.message)    
}) 

