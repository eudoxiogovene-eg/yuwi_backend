

import { Router } from "express";

import {Levels__Controlers} from "../controllers/level.controller"

const routes=Router()


routes.post('/createlevel',Levels__Controlers.store)
routes.get('/getLevels',Levels__Controlers.index)
routes.get('/getLevel/:levelId',Levels__Controlers.show)
routes.put('/updateLevel/:levelId',Levels__Controlers.update)

export const Levels__routes=routes