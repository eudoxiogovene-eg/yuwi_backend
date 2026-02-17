
import {Levels} from "../models/level.model"
import {Areas} from "../models/area.model"
import {Categories} from "../models/category.model"
import {Exercises} from "../models/exercise.model"
import {Quiz} from "../models/quiz.model"
import {SubCategories} from "../models/subCategory.model"





export const deleteAllRepository= async ()=>{
    await Levels.deleteMany()
    await Areas.deleteMany()
    await Categories.deleteMany()
    await Exercises.deleteMany()
    await Quiz.deleteMany()
    await SubCategories.deleteMany()
  return
}