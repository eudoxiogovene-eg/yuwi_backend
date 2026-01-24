

import {Request,Response,} from "express"


import {userLoginrepository} from "../repositories/user.login.repository"
import { userValidacaoLogin } from "../validations/user"


export const Users__Login__Controlers ={
    
   async store(req:Request,res:Response){
    const {email,password}=req.body
   

    try {
        await userValidacaoLogin.validate(req.body)
        const usuarioLogado= await userLoginrepository({email,password})      
        return res.status(200).json({
            message:"usuário criado com sucesso",
            data:usuarioLogado   
        }) 
    } catch (error:any) {
        return res.status(400).json({message:error.message})
    }

   },

 
}