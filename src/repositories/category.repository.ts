
import {Categories} from "../models/category.model"


interface CategoryData{
    name:string,
    id:string
}


export const createCategory= async({name}:Omit<CategoryData,"id">)=>{
    const categoryExist= await Categories.findOne({name})
    if(categoryExist){
        throw new Error("esta categoria ja foi cadastrada")
    }

    const newCategory= await Categories.create({name})

    if(!newCategory){
        throw new Error("houve um erro ao tentar criar categoria")
    }
    return newCategory

}

export const getCategory= async({id}:Omit<CategoryData,"name">)=>{
    const category= await Categories.findById(id)
    if(!category){
        throw new Error("categoria nao encontrada")
    }
    return category
}

export const getCategories= async()=>{
    const categories= await Categories.find()
    if(!categories.length){
        throw new Error("ainda nao ha categorias cadastradas")
    }
    return categories
}
 

export const UpdateCategory= async({id,name}:CategoryData)=>{
    const categoryExist= await Categories.findOne({name})
    if(categoryExist){
        throw new Error("esta categoria ja foi cadastrada")
    }
    const categoryUpdated= await Categories.findByIdAndUpdate(id,{
        name
    },{
        new:true
    })

    if(!categoryUpdated){
        throw new Error("houve um erro ao tentar actualizar cateforia")
    }

    return categoryUpdated
}