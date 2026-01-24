

import { Router } from "express";

import {Categories__Controlers} from "../controllers/category.controller"

const routes=Router()


routes.post('/createCategory',Categories__Controlers.store)
routes.get('/findCategories',Categories__Controlers.index)
routes.get('/getCategory/:categoryId',Categories__Controlers.show)
routes.put('/updateCategory/:categoryId',Categories__Controlers.update)

export const Categories__routes=routes