

import { Router } from "express";

import {Quiz__Controlers} from "../controllers/quiz.controller"

const routes=Router()


routes.post('/createQuiz',Quiz__Controlers.store)
routes.get('/getQuizzes',Quiz__Controlers.index)
routes.get('/getQuiz/:quizId',Quiz__Controlers.show)
routes.put('/updateQuiz/:quizId',Quiz__Controlers.update)
routes.post('/createQuizSemArea',Quiz__Controlers.createQuizSemArea)
routes.post('/filterQuiz',Quiz__Controlers.filterQuizController)
routes.post('/filterQuizSemArea',Quiz__Controlers.filterQuizSemAreaController)
routes.delete('/deleteQuizzesbyfilter',Quiz__Controlers.deleteQuizByFilterController)
routes.delete('/deleteQuizzesSemAreaByFilter',Quiz__Controlers.deleteQuizSemAreaByFilterController)

export const Quiz__routes=routes   