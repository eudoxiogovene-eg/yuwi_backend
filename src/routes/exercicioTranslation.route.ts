

import { Router } from "express";

import {ExerciseTranslation__Controlers} from "../controllers/exerciseTranslation.controller"

const routes=Router()


routes.post('/createExerciseTranslation',ExerciseTranslation__Controlers.store)
routes.get('/getExercisesTranslation',ExerciseTranslation__Controlers.index)
routes.get('/getExerciseTranslation/:exercicioId',ExerciseTranslation__Controlers.show)
routes.put('/updateExerciseTranslation/:exercicioId',ExerciseTranslation__Controlers.update)
routes.get('/getExerciseTranslationsByQuiz/:quiz',ExerciseTranslation__Controlers.findExerciseTranslationsByQuizController)
routes.get('/deleteExercisesTranslationsByQuiz/:quiz',ExerciseTranslation__Controlers.deleteExerciseTranslationsByQuizController)

export const ExerciseTranslation__routes=routes