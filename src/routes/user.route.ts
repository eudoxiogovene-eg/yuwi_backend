
import { Router } from "express";

import {Users__Controlers} from "../controllers/user.controller"

const routes=Router()


routes.post('/createuser',Users__Controlers.store)
routes.get('/findusers',Users__Controlers.index)
routes.get('/finduser/:userId',Users__Controlers.show)
routes.put('/finduserupdate/:userId',Users__Controlers.update)

export const Users__routes=routes