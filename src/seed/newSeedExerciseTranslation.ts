

import {db_connection} from "../db/config"


import {ExerciseTranslationData,createManyExercisesTranslations,findQuizExerciseTranslation} from "../repositories/exerciseTranslation.repository"
import {findQuizExercise} from "../repositories/exercise.repository"
import {typeQuizChoose} from "./typeQuizChoose"


import { 
    quizAvancado1,quizAvancado2,quizAvancado3,quizAvancado4,quizAvancado5,
    quizAvancado6,quizAvancado7,quizAvancado8,quizAvancado9,quizAvancado10
} from "../conteudo/vocabulario/substantivos/viagens-e-turismo"


const quizzes=[
    quizAvancado1,quizAvancado2,quizAvancado3,quizAvancado4,quizAvancado5,
    quizAvancado6,quizAvancado7,quizAvancado8,quizAvancado9,quizAvancado10,
]


const typeQuiz=[
    {
        category:"dia-a-dia",
        subCategory:"alimentação e refeições",
        level:"avançado"
    },
    {
        category:"vocabulário",
        subCategory:"substantivos",
        area:"viagens e turismo",
        level:"avançado"
    }
]




async function seed(){
  
  
    try {  

    const response= await typeQuizChoose(typeQuiz[1])

        if(!response){
            console.log("entrou aqui no vazio")
            return 
        }
        if(response.length!=quizzes.length){
            console.log("os arrays nao sao iguais")
            return
        }
         for(let count=0;count<response.length;count++){
        
               const [quizExerciseTranslationExist, quizExerciseExist] = await Promise.all([
                    findQuizExerciseTranslation(response[count]._id.toString()),
                    findQuizExercise(response[count]._id.toString())
                ])
                if(quizExerciseTranslationExist ||quizExerciseExist){
                     console.log("este quiz ja foi usado")
                     console.log(`Este quiz (${response[count]._id.toString()}) já foi usado`);
                     continue
                }
                  const exercises= quizzes[count].map((item,index)=>{
                    const dadosExercise:Omit<ExerciseTranslationData,"id"|"numeroNovo">={
                        numero: (index + 1).toString(),
                        resposta_correcta:item.resposta_correta,
                        pergunta:item.pergunta,
                        quiz:response[count]._id.toString(),
                        opcoes:item.opcoes
                    }
                    return dadosExercise
                })
            await createManyExercisesTranslations(exercises)
                
            }
  
            console.log("cadastro de  questoes realizado com sucesso")
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

