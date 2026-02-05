
import {QuizData,createSemAreaQuiz, getQuiz} from "../repositories/quiz.repository"
import {quizSchema,quizSEmAreaSchema} from "../validations/quiz.schema.validation"


export const createQuizSeedSemArea= async (data:Omit<QuizData,"id"|"area">)=>{
    
     await quizSEmAreaSchema.validate(data)  
     const newQuiz= await createSemAreaQuiz(data)
     if(!newQuiz){
        return false
     }
    const quizId=newQuiz._id.toString() 
    return quizId
   
}