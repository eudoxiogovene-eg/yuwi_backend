
import {SubCategories} from "../models/subCategory.model"


interface SubSubCategoryData{
    name:string,
    category:string,
    id:string
}


export const createSubCategory= async({name,category}:Omit<SubSubCategoryData,"id">)=>{
    const subCategoryExist= await SubCategories.findOne({name,category})
    if(subCategoryExist){
        throw new Error("esta subcategoria ja foi cadastrada")
    }

    const newSubCategory= await SubCategories.create({name,category})

    if(!newSubCategory){
        throw new Error("houve um erro ao tentar criar categoria")
    }
    return newSubCategory

}

export const getSubCategory= async({id}:Omit<SubSubCategoryData,"name"|"category">)=>{
    const subCategory= await SubCategories.findById(id)
    if(!subCategory){
        throw new Error("categoria nao encontrada")
    }
    return subCategory
}

export const getSubCategories= async()=>{
    //await SubCategories.deleteMany()
    const subCategories= await SubCategories.find()
    if(!subCategories.length){
        throw new Error("ainda nao ha categorias cadastradas")
    }
    return subCategories
}

export const UpdateSubCategory= async({id,name,category}:SubSubCategoryData)=>{
    const subCategoryExist= await SubCategories.findOne({name,category})
    if(subCategoryExist){
        throw new Error("esta categoria ja foi cadastrada")
    }
    const subCategoryUpdated= await SubCategories.findByIdAndUpdate(id,{
        name,category
    },{
        new:true
    })

    if(!subCategoryUpdated){
        throw new Error("houve um erro ao tentar actualizar cateforia")
    }

    return subCategoryUpdated
}

export const findSubCategoryByNameAndCategory= async({name,category}:Omit<SubSubCategoryData,"id">)=>{
    const subCategoryExist= await SubCategories.findOne({name,category})
    if(!subCategoryExist){
        throw new Error("subcategoria nao encontrada")
    }
    return subCategoryExist
}