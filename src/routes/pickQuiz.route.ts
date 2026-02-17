

import { Router } from "express";

import {PickQuiz__Controlers} from "../controllers/pickQuiz.controller"

const routes=Router()


routes.post('/pickQuiz',PickQuiz__Controlers.pickQuizController)
routes.post('/pickExerciseByQuiz',PickQuiz__Controlers.pickExerciseByQuizController)

export const PickQuiz__routes=routes   