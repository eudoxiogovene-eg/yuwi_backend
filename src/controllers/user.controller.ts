
import  {Request,Response,} from "express"


import {userValidacao,userUpdateValidacao} from "../validations/user"
import {createNewUser,getUsers,getUser,updateUser,createAccountWithGoogle} from "../repositories/user.js"
import { userValidacaoSignUpWithGoogle} from "../validations/user"



export const Users__Controlers ={
    
   async store(req:Request,res:Response){
    const {nome,email,password,confirmPassword}=req.body
   
   
    try {
        await userValidacao.validate(req.body)
        if(password!==confirmPassword){
            throw new Error("as senhas nao correspondem")
        }
    
        const newUser= await createNewUser({nome,email,password})

        return res.status(200).json({
            message:"usuário criado com sucesso",
            data:newUser 
        })
     
    } catch (error:any) {
        return res.status(400).json({message:error.message})
    }

    

   },
   async index(req:Request,res:Response){
   // console.log("chegou")
    try {
        const users= await getUsers()
        
        return res.status(200).json({message:"dados encontrados com sucesso",dados:users})
    } catch (error:any) {
        return res.status(400).json({message:error.message})
    }
   },
   async show(req:Request,res:Response){
    const {userId} = req.params 
    const id=userId.toString()
   
    try {
        const user= await getUser(id)
        return res.status(200).json({message:"usuário encontrado com sucesso",dado:user})
    } catch (error:any) {
        return res.status(400).json({message:error.message})
    }
   },

   async update(req:Request,res:Response){
    const {userId} = req.params
    const id:string=userId.toString()

    const {nome}=req.body
    try {
        await userUpdateValidacao.validate(req.body)
        await getUser(id)
        const userUpdate= await updateUser({nome,id})
        return res.status(200).json({message:"dado encontrado com sucesso",dado:userUpdate})
    } catch (error) {
        return res.status(400).json({message:error})
    }
   },
 
   async createAccountWithGoogleController(req:Request,res:Response){
       const {email,nome}=req.body
    try {
        await userValidacaoSignUpWithGoogle.validate(req.body)
      
        const newUser= await createAccountWithGoogle(email,nome)

        return res.status(200).json({
            message:"usuário criado com sucesso",
            data:newUser 
        })
     
    } catch (error:any) {
        return res.status(400).json({message:error.message})
    }
   }
 
}