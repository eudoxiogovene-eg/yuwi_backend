
import {Levels} from "../models/level.model"
import {Areas} from "../models/area.model"
import {Categories} from "../models/category.model"
import {Exercises} from "../models/exercise.model"
import {Quiz} from "../models/quiz.model"
import {SubCategories} from "../models/subCategory.model"
import {ExercisesTranslation} from "../models/exerciseTranslation.model"




export const deleteAllRepository= async ()=>{
  //await Categories.deleteMany()
  //await SubCategories.deleteMany()
  //await Areas.deleteMany()
  //await Levels.deleteMany()
  //await Quiz.deleteMany()
  //await Exercises.deleteMany()
  //await ExercisesTranslation.deleteMany()


  //await Quiz.collection.drop()

  await Categories.collection.drop()
  await SubCategories.collection.drop()
  await Areas.collection.drop()
  await Levels.collection.drop()
  await Quiz.collection.drop()
  await Exercises.collection.drop()
  await ExercisesTranslation.collection.drop()
  
  return
}