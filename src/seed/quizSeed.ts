
import {QuizData,createQuiz, getQuiz} from "../repositories/quiz.repository"
import {quizSchema} from "../validations/quiz.schema.validation"


export const createQuizSeed= async (data:Omit<QuizData,"id">)=>{
    
     await quizSchema.validate(data)  
     const newQuiz= await createQuiz(data)
     if(!newQuiz){
        return false
     }
    const quizId=newQuiz._id.toString() 
    return quizId
   
}