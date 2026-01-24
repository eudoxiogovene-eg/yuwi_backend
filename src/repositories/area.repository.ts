
import {Areas} from "../models/area.model"


interface AreaData{
    name:string,
    subCategory:string
    category:string
    id:string
}


export const createArea= async({name,category,subCategory}:Omit<AreaData,"id">)=>{
    const areaExist= await Areas.findOne({name,category,subCategory})
    if(areaExist){
        throw new Error("esta area ja foi cadastrada")
    }

    const newArea= await Areas.create({name,category,subCategory})

    if(!newArea){
        throw new Error("houve um erro ao tentar criar area")
    }
    return newArea

}

export const getArea= async(id:string)=>{
    const area= await Areas.findById(id)
    if(!area){
        throw new Error("area nao encontrada")
    }
    return area
}

export const getAreas= async()=>{
    const areas= await Areas.find()
    if(!areas.length){
        throw new Error("ainda nao ha areas cadastradas")
    }
    return areas
}
 

export const UpdateArea= async({id,name,category,subCategory}:AreaData)=>{
    const areaExist= await Areas.findOne({name,category,subCategory})
    if(areaExist){
        throw new Error("esta area ja foi cadastrada")
    }
    const areaUpdated= await Areas.findByIdAndUpdate(id,{
        name,category,subCategory
    },{
        new:true
    })

    if(!areaUpdated){
        throw new Error("houve um erro ao tentar actualizar area")
    }

    return areaUpdated
}