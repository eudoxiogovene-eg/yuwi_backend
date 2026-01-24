import {Users} from "../models/user"
const bcrypt = require('bcrypt')

interface User{
    email:string,
    password:string,
}



export const userLoginrepository= async ({email,password}:User) => {

    const userExist= await Users.findOne({email}).select("+password")
    if(!userExist){
        throw new Error("crendencias invalidas")
    }
    const userPassword=userExist.password
    const usuarioAutenticado= await bcrypt.compare(password, userPassword)
    if(!usuarioAutenticado){
         throw new Error("credencias invalidas")
    }

    return userExist
}


