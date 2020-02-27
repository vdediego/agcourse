import {Request, response, Response, text} from 'express';
import db from '../database';

class FamilyController {

    public list(request: Request, response: Response) {
        response.json({'text':'Listing all plant families'})
    };

    public show(request: Request, response: Response) {
        response.json({'text':'Showing plant family'} + request.params.id)
    };

    public create(request: Request, response: Response) {
        console.log(request.body);
        response.json({text: "plant family has been created"});
    }

    public update(request: Request, response: Response) {
        response.json({text: "plant family updated"} + request.params.id);
    }

    public delete(request: Request, response: Response) {
        response.json({text: "plant family deleted"} + request.params.id);
    }
}

export const familyController = new FamilyController();
