


import { Users } from "../models/user.js"
const bcrypt = require('bcrypt')
import crypto from "crypto"
const date= new Date()

interface User{
    id:string
    nome:string, 
    email:string,
    password:string,
}

interface UserUpdateData{
    id:string
    como_conheceu:string
    objectivo :string
    meta_diaria:string
    nivel:string
    pais:string
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

export const updateUser= async (data:UserUpdateData)=>{

    const userUpdate= await Users.findByIdAndUpdate(data.id,{
        como_conheceu:data.como_conheceu,
        objectivo :data.objectivo,
        meta_diaria:data.meta_diaria,
        nivel:data.nivel,
        pais:data.pais
    },{
        new :true
    })

    if(!userUpdate){
        throw new Error("usuario nao encontrado")
    }
    return userUpdate
} 



export const createAccountWithGoogle= async(email:string,nome:string)=>{
   const userExist= await Users.findOne({email})
    if(userExist){
        throw new Error("este email ja foi usado")
    }
    const password= crypto.randomBytes(4).toString('hex')+"comecaaqui"+ Date.now()
    const salt = await bcrypt.genSalt(12)
    const passwordHash= await bcrypt.hash(password, salt)
    const newUser= await Users.create({
        nome,
        email,
        password:passwordHash
    })
    return newUser
}