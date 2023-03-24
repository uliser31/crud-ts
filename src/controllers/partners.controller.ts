import  db from '../database';

import {Request,Response} from 'express';

import IPartners from '../models/partners.model'

const partenrs: IPartners =[] ; 


export function partnersCtrl(req:Request,res:Response):Response{
    db.getPartners();
   // return res.send(db.getPartners)
    return res.json(db.partners)
}

//export default partenrsCtlr;

//return res.send(db.getPartners);
//export function partnersCtrl(req: Request, res: Response):Response{
    
//    const partners = db.getPartners();
//    return res.json(partners);
//}

//import IPartners from '../model/partner';

//partnersCtrl.getPartners<IPartners> = (req, res) => { 
    //res.send(odoo.connect());
//    const partners = db.getPartners();
//    res.json(partners);
//}  
    
