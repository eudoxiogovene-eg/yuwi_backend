

import {db_connection} from "../db/config"


import {createExercise} from "../repositories/exercise.repository"
import {Categories} from "../models/category.model"
import {SubCategories} from "../models/subCategory.model"
import {Areas} from "../models/area.model"
import {Levels} from "../models/level.model"
import {QuizNumbers} from "../models/quizNumber.model"
import { quizInfo,quiz1} from "../conteudo/vocabulario/substantivos/casa_familia/casa_familia"
import {exerciseSchema} from "../validations/exercise.schema.validation"

const quiz=quiz1



interface ExerciseData{
    numero:string,
    alternativa_a:string
    alternativa_b:string
    alternativa_c:string
    alternativa_d:string
    alternativa_correcta:string
    pergunta:string
    numeroQuiz:string
    category:string
    level:string
    subCategory:string
    area:string
  
}



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
    const quizNumber= await QuizNumbers.findOne({numeroQuiz:quizInfo.quizNUmber})
    if(!quizNumber){
        throw new Error("numero nao encontrado")
    }

    
    
    for(let count=0;quiz.length>count;count++){

        const numero=quiz[count].numero
        const alternativa_correcta=quiz[count].resposta_correta
        const alternativa_a=quiz[count].opcoes.A
        const alternativa_b=quiz[count].opcoes.B
        const alternativa_c=quiz[count].opcoes.C
        const alternativa_d=quiz[count].opcoes.D
       
        const pergunta =quiz[count].pergunta
        const dados:ExerciseData={
            numero,alternativa_correcta,alternativa_a,
            alternativa_b,alternativa_c,alternativa_d,
            pergunta,
            category:category._id.toString(),
            subCategory:subCategory._id.toString(),
            area:area._id.toString(),
            level:level._id.toString(),
            numeroQuiz:quizNumber._id.toString()
        }

        


         try {
             await exerciseSchema.validate(dados)  
             const newExercise= await createExercise(dados)
        } catch (error:any) {
            console.log("houve um erro "+ error.message)
        }
           

     }
       

     console.log("enunciado cadastrado com sucesso")
}





 db_connection.then(()=>{  
     console.log("banco conectado com sucesso")
     seed()
 })
 .catch(function(erro){
        return   console.log("houve um erro "+erro.message)    
}) 

