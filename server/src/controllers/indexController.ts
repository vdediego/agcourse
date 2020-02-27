import { Request, Response } from 'express';
import db from '../database';

class IndexController {

    public index (req: Request, res: Response) {
        db.query('DESCRIBE plants');
        res.json({'text':'Hallo'})
    };
}

export const indexController = new IndexController();
