

import { Router } from "express";

import {Exercise__Controlers} from "../controllers/exercise.controller"

const routes=Router()


routes.post('/createExercise',Exercise__Controlers.store)
routes.get('/getExercises',Exercise__Controlers.index)
routes.get('/getExercise/:exercicioId',Exercise__Controlers.show)
routes.put('/updateExercise/:exercicioId',Exercise__Controlers.update)


routes.get('/findexercisesbyquiz/:quizId',Exercise__Controlers.findExercisesByQuizController)
routes.get('/deleteexercisesbyquiz/:quiz',Exercise__Controlers.deleteExerciseByQuizController)
routes.delete('/deletemanyexercisesbyquizzes',Exercise__Controlers.deletemanyExerciseByQuizController)
export const Exercise__routes=routes 