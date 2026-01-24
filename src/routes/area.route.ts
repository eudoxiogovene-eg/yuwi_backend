

import { Router } from "express";

import {Areas__Controlers} from "../controllers/area.controller"

const routes=Router()


routes.post('/createArea',Areas__Controlers.store)
routes.get('/getAreas',Areas__Controlers.index)
routes.get('/getArea/:areaId',Areas__Controlers.show)
routes.put('/updateArea/:areaId',Areas__Controlers.update)

export const Areas__routes=routes