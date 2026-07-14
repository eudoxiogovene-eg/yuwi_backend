import fs from "fs"



export interface ExerciseData{
    pergunta:string
    opcoes:{
        A:string,
        B:string,
        C:string,
        D:string
    }
    numero:string,
    resposta_correta:string
}


import { 
    quizIniciante1,quizIniciante2,quizIniciante3,quizIniciante4,quizIniciante5,
    quizIniciante6,quizIniciante7,quizIniciante8,quizIniciante9,quizIniciante10,
   
} from "../conteudo/vocabulario/verbos/Verbos_modais"
import { 
    quizBasico1,quizBasico2,quizBasico3,quizBasico4,quizBasico5,
   quizBasico6,quizBasico7,quizBasico8,quizBasico9,quizBasico10,

} from "../conteudo/vocabulario/verbos/Verbos_modais"

import { 
    quizIntermediario1,quizIntermediario2,quizIntermediario3,quizIntermediario4,
    quizIntermediario5
    ,quizIntermediario6,quizIntermediario7,quizIntermediario8,quizIntermediario9,quizIntermediario10
    
} from "../conteudo/vocabulario/verbos/Verbos_modais"











const quizzes=[
    quizIntermediario1,quizIntermediario2,quizIntermediario3,quizIntermediario4,
    quizIntermediario5
    ,quizIntermediario6,quizIntermediario7,quizIntermediario8,quizIntermediario9,quizIntermediario10
]


type arrayQuizzesTypes=Omit<ExerciseData,"id"|"numeroNovo"|"quiz">[]
const quizzes2:arrayQuizzesTypes[]=[]


let finallyQuizzes:any = {};
const nameQuiz="quizIntermediario"

function createNewQuiz(data:arrayQuizzesTypes[]){
    for(let count=0;count<data.length;count++){
        finallyQuizzes[`export const ${nameQuiz}0${count+1}`] = data[count];
    }
    fs.writeFileSync('test.json', JSON.stringify(finallyQuizzes, null, 2))
    console.log("arquivo gerado com sucesso")
}



    for(let count=0;count<quizzes.length;count++){
     const meio = quizzes[count].length / 2;
     const quiz1=quizzes[count].slice(0, meio);
     const quiz2=quizzes[count].slice(meio, quizzes[count].length);

     
        const novoQuiz1= quiz1.map((item,index)=>{
           
            const data:Omit<ExerciseData,"id"|"numeroNovo"|"quiz">={
                pergunta: quiz1[index].pergunta,
                opcoes:{
                    A: quiz1[index].opcoes.A,
                    B: quiz1[index].opcoes.B,
                    C: quiz1[index].opcoes.C,
                    D: quiz1[index].opcoes.D,
                },
                numero: quiz1[index].numero,
                resposta_correta: quiz1[index].resposta_correta,
            }
            return data
        }) 
         const novoQuiz2= quiz2.map((item,index)=>{
           
            const data:Omit<ExerciseData,"id"|"numeroNovo"|"quiz">={
                pergunta: quiz2[index].pergunta,
                opcoes:{
                    A: quiz2[index].opcoes.A,
                    B: quiz2[index].opcoes.B,
                    C: quiz2[index].opcoes.C,
                    D: quiz2[index].opcoes.D,
                },
                numero: quiz2[index].numero,
                resposta_correta: quiz2[index].resposta_correta,
            }
            
            return data
        }) 
        
        quizzes2.push(novoQuiz1)
        quizzes2.push(novoQuiz2)
    
        
    }

    createNewQuiz(quizzes2)
    





