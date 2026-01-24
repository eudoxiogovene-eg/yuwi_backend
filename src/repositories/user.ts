


import { Users } from "../models/user.js"
const bcrypt = require('bcrypt')

interface User{
    id:string
    nome:string, 
    email:string,
    password:string,
}


export const createNewUser= async ({nome,email,password}:Omit<User,"id">) => {
    
    const userExist= await Users.findOne({email})
    if(userExist){
        throw new Error("este email ja foi usado")
    }
    const salt = await bcrypt.genSalt(12)
    const passwordHash= await bcrypt.hash(password, salt)
    const newUser= await Users.create({
        nome,
        email,
        password:passwordHash
    })
    return newUser
}


export const getUsers= async ()=>{
    const users= await Users.find()
    if(users.length==0){
        throw new Error("ainda nao ha usuarios cadastrados")
    }
    return users
} 


export const getUser= async (id:string)=>{
    const user= await Users.findById(id)
    if(!user){
        throw new Error("usuario nao encontrado")
    }
    return user
} 

export const updateUser= async ({nome,id}:Omit<User,"email"|"password">)=>{
  
    const userUpdate= await Users.findByIdAndUpdate(id,{
        nome
    },{
        new :true
    })

    if(!userUpdate){
        throw new Error("usuario nao encontrado")
    }
    return userUpdate
} 

