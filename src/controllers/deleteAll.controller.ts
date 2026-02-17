
import  {Request,Response,} from "express"

import {deleteAllRepository} from "../repositories/deleteAll.repository"


export const DeleteAll__Controlers ={
    
   async store(req:Request,res:Response){
   
   
    try {
       
    
        const dadosApagados= await deleteAllRepository()

        return res.status(200).json({
            message:"dados apagados com sucesso",
            data:dadosApagados 
        })
     
    } catch (error:any) {
        return res.status(400).json({message:error.message})
    }

    

   },
   



 
}