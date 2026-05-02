
/*
import {db_connection} from "../db/config"


import {createExercise,findQuizExercise,createManyExercise} from "../repositories/exercise.repository"
import {findQuizExerciseTranslation} from "../repositories/exerciseTranslation.repository"
import {exerciseSchema} from "../validations/exercise.schema.validation"
import {QuizData,createQuiz, getQuiz} from "../repositories/quiz.repository"
import {quizSchema} from "../validations/quiz.schema.validation"
import {ExerciseData} from "../repositories/exercise.repository"


import { 
    quizIniciante01,quizIniciante02,quizIniciante03,quizIniciante04,quizIniciante05,
    quizIniciante06,quizIniciante07,quizIniciante08,quizIniciante09,quizIniciante010,
    quizIniciante011,quizIniciante012,quizIniciante013,quizIniciante014,quizIniciante015,
    quizIniciante016,quizIniciante017,quizIniciante018,quizIniciante019,quizIniciante020,
    quizIniciante021,quizIniciante022,quizIniciante023,quizIniciante024,quizIniciante025,
    quizIniciante026,quizIniciante027,quizIniciante028,quizIniciante029,quizIniciante030,
    quizIniciante031,quizIniciante032,quizIniciante033,quizIniciante034,quizIniciante035,quizIniciante036,
    quizIniciante037,quizIniciante038,quizIniciante039,quizIniciante040,
    
} from "../conteudo/dia_a_dia/rotina-pessoal"



const quiz=quizIniciante040


async function seed(){
    const quizId= "69cc2981cfd4c6958545dc51"
   
    

    const exercises= quiz.map((item,index)=>{
        const numero=index+1
        const alternativa_correcta=quiz[index].resposta_correta
        const alternativa_a=quiz[index].opcoes.A
        const alternativa_b=quiz[index].opcoes.B
        const alternativa_c=quiz[index].opcoes.C
        const alternativa_d=quiz[index].opcoes.D
        const pergunta =quiz[index].pergunta
        const data:Omit<ExerciseData,"id"|"numeroNovo">={
            numero:numero.toString(),
            alternativa_correcta,
            alternativa_a,
            alternativa_b,
            alternativa_c,
            alternativa_d,
            pergunta,
            quiz:quizId 
        }

       return data
    }) 
    
    try {
     
     const quizExerciseTranslationExist= await findQuizExerciseTranslation(quizId) 
     const quizExerciseExist= await findQuizExercise(quizId)
    
     if(quizExerciseTranslationExist ||quizExerciseExist){
         return console.log("este quiz ja foi usado")
     }
     await createManyExercise(exercises) 
           console.log("cadastro de questoes realizado com sucesso")    
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



*/