
import {Levels} from "../models/level.model"


interface LevelData{
    name:string,
    id:string
}


export const createLevel= async({name}:Omit<LevelData,"id">)=>{
    const levelExist= await Levels.findOne({name})
    if(levelExist){
        throw new Error("este nivel ja foi cadastrada")
    }

    const newLevel= await Levels.create({name})

    if(!newLevel){
        throw new Error("houve um erro ao tentar criar nivel")
    }
    return newLevel

}

export const getLevel= async({id}:Omit<LevelData,"name">)=>{
    const level= await Levels.findById(id)
    if(!level){
        throw new Error("nivel nao encontrada")
    }
    return level
}

export const getLevels= async()=>{
    const levels= await Levels.find()
    if(!levels.length){
        throw new Error("ainda nao ha niveis cadastrados")
    }
    return levels
}
 

export const updateLevel= async({id,name}:LevelData)=>{
    const levelExist= await Levels.findOne({name})
    if(levelExist){
        throw new Error("este nivel ja foi cadastrada")
    }
    const levelUpdated= await Levels.findByIdAndUpdate(id,{
        name
    },{
        new:true
    })

    if(!levelUpdated){
        throw new Error("houve um erro ao tentar actualizar nivel")
    }

    return levelUpdated
}