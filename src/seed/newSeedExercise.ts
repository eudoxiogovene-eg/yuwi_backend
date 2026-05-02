

    function oculto(){
    //     quizIntermediario021,quizIntermediario022,quizIntermediario023,quizIntermediario024,
    // quizIntermediario025,quizIntermediario026,quizIntermediario027,quizIntermediario028,
    // quizIntermediario029,quizIntermediario030,quizIntermediario031,quizIntermediario032,
    // quizIntermediario033,quizIntermediario034,quizIntermediario035,quizIntermediario036,
    // quizIntermediario037,quizIntermediario038,quizIntermediario039,quizIntermediario040,
    }

import {db_connection} from "../db/config"


import {createExercise,findQuizExercise,createManyExercise,ExerciseData} from "../repositories/exercise.repository"
import {findQuizExerciseTranslation} from "../repositories/exerciseTranslation.repository"
import {typeQuizChoose} from "./typeQuizChoose"

 

import { 
    quizIniciante01,quizIniciante02,quizIniciante03,quizIniciante04,quizIniciante05,
    quizIniciante06,quizIniciante07,quizIniciante08,quizIniciante09,quizIniciante010,
    quizIniciante011,quizIniciante012,quizIniciante013,quizIniciante014,quizIniciante015,
    quizIniciante016,quizIniciante017,quizIniciante018,quizIniciante019,quizIniciante020
   

} from "../conteudo/vocabulario/substantivos/viagens-e-turismo"
import { 
    quizBasico01,quizBasico02,quizBasico03,quizBasico04,quizBasico05,
    quizBasico06,quizBasico07,quizBasico08,quizBasico09,quizBasico010,
    quizBasico011,quizBasico012,quizBasico013,quizBasico014,quizBasico015,
    quizBasico016,quizBasico017,quizBasico018,quizBasico019,quizBasico020 
} from "../conteudo/vocabulario/substantivos/viagens-e-turismo"

import { 
    quizIntermediario01,quizIntermediario02,quizIntermediario03,quizIntermediario04,
    quizIntermediario05,quizIntermediario06,quizIntermediario07,quizIntermediario08,
    quizIntermediario09,quizIntermediario010,quizIntermediario011,quizIntermediario012,
    quizIntermediario013,quizIntermediario014,quizIntermediario015,quizIntermediario016,
    quizIntermediario017,quizIntermediario018,quizIntermediario019,quizIntermediario020
    
} from "../conteudo/vocabulario/substantivos/viagens-e-turismo"

const quizzes=[
   quizIntermediario01,quizIntermediario02,quizIntermediario03,quizIntermediario04,
    quizIntermediario05,quizIntermediario06,quizIntermediario07,quizIntermediario08,
    quizIntermediario09,quizIntermediario010,quizIntermediario011,quizIntermediario012,
    quizIntermediario013,quizIntermediario014,quizIntermediario015,quizIntermediario016,
    quizIntermediario017,quizIntermediario018,quizIntermediario019,quizIntermediario020
]
    //iniciante
    //básico
    //Intermediário
    //avançado
const typeQuiz=[
    {
        category:"dia-a-dia",
        subCategory:"casa e vida doméstica",
        level:"Intermediário"
    },
    {
        category:"vocabulário",
        subCategory:"substantivos",
        area:"viagens e turismo",
        level:"Intermediário"
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
      
                const data:Omit<ExerciseData,"id"|"numeroNovo">={
                    numero: (index + 1).toString(),
                    alternativa_correcta: item.resposta_correta,
                    alternativa_a: item.opcoes.A,
                    alternativa_b: item.opcoes.B,
                    alternativa_c: item.opcoes.C,
                    alternativa_d: item.opcoes.D,
                    pergunta: item.pergunta,
                    quiz: response[count]._id.toString()
                }

                return data
        }) 
        await createManyExercise(exercises)
    
     
   
     
        
    }

    
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

