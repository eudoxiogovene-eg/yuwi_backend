


import express from 'express'
import cors from "cors"
import {db_connection} from "./db/config"

import {Users__routes} from "./routes/user.route"
import {User__Login__Route} from "./routes/user.login.route"
import {Categories__routes} from "./routes/category.route"
import {SubCategories__routes} from "./routes/subCategory.route"
import {Areas__routes} from "./routes/area.route"
import {Levels__routes} from "./routes/level.route"
import {Quiz__routes} from "./routes/quiz.route"
import {Exercise__routes} from "./routes/exercicio.route"
import {PickQuiz__routes} from "./routes/pickQuiz.route"







const port=process.env.port || 3333



const app=express()
app.use(cors()) 
app.use(
    express.urlencoded({
              extended:true
    })
)


app.use(express.json())

app.use(Users__routes)
app.use(User__Login__Route)
app.use(Categories__routes)
app.use(SubCategories__routes)
app.use(Areas__routes)
app.use(Levels__routes)
app.use(Quiz__routes)
app.use(Exercise__routes)
app.use(PickQuiz__routes)


 db_connection.then(()=>{  
     console.log("banco conectado com sucesso")
     app.listen(port,()=>{
         console.log(`estou rodando na porta ${port}`)
     })
 })
 .catch(function(erro){
        return   console.log("houve um erro "+erro.message)    
}) 

