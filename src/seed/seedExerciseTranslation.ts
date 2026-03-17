

import {db_connection} from "../db/config"


import {ExerciseTranslationData,createManyExercisesTranslations,findQuizExerciseTranslation} from "../repositories/exerciseTranslation.repository"
import {findQuizExercise} from "../repositories/exercise.repository"
import {exerciseTranslationSchema} from "../validations/exerciseTranslation.schema.validation"


import { 
    quizAvancado1,quizAvancado2,quizAvancado3,quizAvancado4,quizAvancado5
} from "../conteudo/dia_a_dia/alimentacao-e-refeicoes"

const quiz=quizAvancado5






async function seed(){
  
    const quizId= "69b429a8a61bdf072d5f850d"

    const exercises= quiz.map((item,index)=>{
        const numero=quiz[index].numero
        const resposta_correcta=quiz[index].resposta_correta
        const opcoes=quiz[index].opcoes
        const pergunta=quiz[index].pergunta

        const dadosExercise:Omit<ExerciseTranslationData,"id"|"numeroNovo">={
            numero,
            resposta_correcta,
            pergunta,quiz:quizId,
            opcoes
        }
        return dadosExercise
    })
   

   
            
        try {  
            const quizExerciseTranslationExist= await findQuizExerciseTranslation(quizId) 
            const quizExerciseExist= await findQuizExercise(quizId)

            if(quizExerciseTranslationExist || quizExerciseExist){
                return console.log("este quiz ja foi usado")
            }
            await createManyExercisesTranslations(exercises)
            console.log("cadastro de quiz e questoes realizado com sucesso")
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

