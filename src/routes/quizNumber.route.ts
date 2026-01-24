

import { Router } from "express";

import {QuizNumbers__Controlers} from "../controllers/quizNumber.controller"

const routes=Router()


routes.post('/createQuizNumber',QuizNumbers__Controlers.store)
routes.get('/getQuizNumbers',QuizNumbers__Controlers.index)
routes.get('/getQuizNumber/:quizNumberId',QuizNumbers__Controlers.show)
routes.put('/updateQuizNumber/:quizNumberId',QuizNumbers__Controlers.update)

export const QuizNumber__routes=routes