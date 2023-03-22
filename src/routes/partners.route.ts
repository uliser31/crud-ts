import {Router} from "express";
const router = Router();

import  {partnersCtrl}  from '../controllers/partners.controller'
          

//import IPartners from '../models/partners.model'

router.route('/')
   .get(partnersCtrl);  

export default router;

