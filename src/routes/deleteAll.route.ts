
import { Router } from "express";

import {DeleteAll__Controlers} from "../controllers/deleteAll.controller"

const routes=Router()


routes.post('/deleteall',DeleteAll__Controlers.store)


export const DadosApagados__routes=routes