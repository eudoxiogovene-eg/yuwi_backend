

import { Router } from "express";

import {SubCategories__Controlers} from "../controllers/subCategory.controller"

const routes=Router()


routes.post('/createSubCategory',SubCategories__Controlers.store)
routes.get('/findSubCategories',SubCategories__Controlers.index)
routes.get('/getSubCategory/:subCategoryId',SubCategories__Controlers.show)
routes.put('/updateSubCategory/:subCategoryId',SubCategories__Controlers.update)

export const SubCategories__routes=routes