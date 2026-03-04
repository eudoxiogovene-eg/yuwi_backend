

import {db_connection} from "../db/config"


import {ExerciseTranslationData,createExerciseTranslation,findQuizExerciseTranslation} from "../repositories/exerciseTranslation.repository"
import {findQuizExercise} from "../repositories/exercise.repository"
import {exerciseTranslationSchema} from "../validations/exerciseTranslation.schema.validation"


import { 
    quizTranslation1
} from "../conteudo/vocabulario/substantivos/casa_familia"

const quiz=quizTranslation1






async function seed(){
  
    const quizId= "69a831d81ee90adc61749b59"

    const quizExerciseTranslationExist= await findQuizExerciseTranslation(quizId) 
    const quizExerciseExist= await findQuizExercise(quizId)

    if(quizExerciseTranslationExist ||quizExerciseExist){
        return console.log("este quiz ja foi usado")
    }
    
    for(let count=0;quiz.length>count;count++){  

        const numero=quiz[count].numero
        const resposta_correcta=quiz[count].resposta_correta
        const opcoes=quiz[count].opcoes
        const pergunta=quiz[count].pergunta


         try {
            
            
            if(!quizId){
                throw new Error("houve um erro ao cadastrar o quiz")
            }
             const pergunta =quiz[count].pergunta
             const dadosExercise:Omit<ExerciseTranslationData,"id"|"numeroNovo">={
                numero,resposta_correcta,
                pergunta,quiz:quizId,
                opcoes
             }
             await exerciseTranslationSchema.validate(dadosExercise)
             const newExercise= await createExerciseTranslation(dadosExercise)
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

