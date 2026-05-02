
import {Quiz} from "../models/quiz.model"


export interface QuizData{
    id:string
    numeroQuiz:number,
    category:string
    subCategory:string
    area:string,
    level:string
    
}

interface FilterQuizData{
    category:string
    subCategory:string
    area:string,
    level:string
}
export interface FilterQuizSemAreaData{
    category:string
    subCategory:string
    level:string
}

export const createQuiz= async({numeroQuiz,category,subCategory,area,level}:Omit<QuizData,"id">)=>{
    const quizExist= await Quiz.findOne({numeroQuiz,category,subCategory,area,level})
    if(quizExist){
        throw new Error("este quiz ja foi cadastrado")
    }

    const newQuiz= await Quiz.create({numeroQuiz,category,subCategory,area,level})

    if(!newQuiz){
        throw new Error("houve um erro ao tentar criar numero quiz")
    }
    return newQuiz

}
export const createSemAreaQuiz= async({numeroQuiz,category,subCategory,level}:Omit<QuizData,"id"|"area">)=>{
    const quizExist= await Quiz.findOne({numeroQuiz,category,subCategory,level})
    if(quizExist){
        throw new Error("este quiz ja foi cadastrado")
    }

    const newQuiz= await Quiz.create({numeroQuiz,category,subCategory,level})

    if(!newQuiz){
        throw new Error("houve um erro ao tentar criar numero quiz")
    }
    return newQuiz

}

export const getQuiz= async(id:string)=>{
    const quiz= await Quiz.findById(id)
    if(!quiz){
        throw new Error(" quiz nao encontrado")
    }
    return quiz
}

export const getQuizzes= async()=>{
   // await Quiz.deleteMany()
    const quizzes= await Quiz.find()
    if(!quizzes.length){
        throw new Error("ainda nao ha quizzes cadastrados")
    }
    return quizzes
}
 

export const updateQuiz= async({id,numeroQuiz,category,subCategory,area,level}:QuizData)=>{
    const quizExist= await Quiz.findOne({numeroQuiz,category,subCategory,area,level})
    if(quizExist){
        throw new Error("este quiz ja foi cadastrado")
    }
    const quizUpdated= await Quiz.findByIdAndUpdate(id,{
        numeroQuiz,category,subCategory,area,level
    },{
        new:true
    })

    if(!quizUpdated){
        throw new Error("houve um erro ao tentar actualizar o quiz")
    }

    return quizUpdated
}

export const filterQuiz=async(data:FilterQuizData)=>{
    const quizzes= await Quiz.find({
        category:data.category,
        subCategory:data.subCategory,
        area:data.area,
        level:data.level
    })
    if(quizzes.length==0){
        throw new Error("quizzes nao encontrados")
    }
    // const ids= quizzes.map((quizz)=>{
    //   return quizz._id.toString()
    // })

    // console.log(ids)
    return quizzes
}

export const filterQuizSemArea=async(data:FilterQuizSemAreaData)=>{
    const quizzes= await Quiz.find({
        category:data.category,
        subCategory:data.subCategory,
        level:data.level
    })
    if(quizzes.length==0){
        throw new Error("quizzes nao encontrados")
    }
    return quizzes
}
export const deleteQuizByFilter=async(data:FilterQuizData)=>{
    const quizzes= await Quiz.deleteMany({
        category:data.category,
        subCategory:data.subCategory,
        area:data.area,
        level:data.level
    })
 
    return quizzes
}

export const deleteQuizSemAreaByFilter=async(data:FilterQuizSemAreaData)=>{
    const quizzes= await Quiz.deleteMany({
        category:data.category,
        subCategory:data.subCategory,
        level:data.level
    })
   
    return quizzes
}
export const createManyQuizzesSemArea= async(quizzes:Omit<QuizData,"id"|"area">[])=>{
    //console.log(quizzes)
        try {
            const result = await Quiz.insertMany(quizzes, {
            ordered: false
            })
            return result
    } catch (error: any) {
        if (error.code === 11000) {
        console.log("alguns quizzes já existiam")
        }
    }
}
export const createManyQuizzes= async(quizzes:Omit<QuizData,"id">[])=>{
    
        try {
            const result = await Quiz.insertMany(quizzes, {
            ordered: false
            })
            return result
    } catch (error: any) {
        if (error.code === 11000) {
      
        console.log("alguns quizzes já existiam")
        
        }
    }
}