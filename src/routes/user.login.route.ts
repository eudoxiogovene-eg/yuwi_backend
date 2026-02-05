
import { Router } from "express";

import {Users__Login__Controlers} from "../controllers/user.login.controller"

const routes=Router()


routes.post('/login',Users__Login__Controlers.store)
routes.post('/loginWithGoogle',Users__Login__Controlers.loginWithGoogle)

export const User__Login__Route=routes