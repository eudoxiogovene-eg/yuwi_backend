

import { Router } from "express";

import {Quiz__Controlers} from "../controllers/quiz.controller"

const routes=Router()


routes.post('/createQuiz',Quiz__Controlers.store)
routes.get('/getQuizzes',Quiz__Controlers.index)
routes.get('/getQuiz/:quizId',Quiz__Controlers.show)
routes.put('/updateQuiz/:quizId',Quiz__Controlers.update)

export const Quiz__routes=routes  