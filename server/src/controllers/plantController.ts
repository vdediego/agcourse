import {Request, response, Response, text} from 'express';
import db from '../database';

class PlantController {

    public list(request: Request, response: Response) {
        response.json({'text':'Listing all plants'})
    };

    public show(request: Request, response: Response) {
        response.json({'text':'Showing plant'} + request.params.id)
    };

    public create(request: Request, response: Response) {
        console.log(request.body);
        response.json({text: "plant has been created"});
    }

    public update(request: Request, response: Response) {
        response.json({text: "plant updated"} + request.params.id);
    }

    public delete(request: Request, response: Response) {
        response.json({text: "plant deleted"} + request.params.id);
    }
}

export const plantController = new PlantController();
