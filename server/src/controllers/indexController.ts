import { Request, Response } from 'express';

class IndexController {

    public index (req: Request, res: Response) {
        res.json({text: 'we are in INDEX'})
    };
}

export const indexController = new IndexController();
