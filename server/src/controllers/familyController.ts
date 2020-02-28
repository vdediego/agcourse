import {Request, response, Response, text} from 'express';
import db from '../database';
import {errorHandling} from '../classes/errors';

class FamilyController {

    public async list(request: Request, response: Response) {
        await db.query(
            'SELECT * FROM families',
            (error, results) => {
                errorHandling(error, results);
            }
        );
    };

    public async show(request: Request, response: Response) {
        await db.query(
            'SELECT * FROM families WHERE id=?',
            [request.params.id],
            (error, results) => {
                errorHandling(error, results);
            }
        );
        response.json({'text': 'Showing plant family'} + request.params.id);
    };

    public async create(request: Request, response: Response): Promise<void> {
        await db.query('INSERT INTO families SET ?',
            [request.body],
            (error, results) => {
                errorHandling(error, results);
            }
        );
    }

    public async update(request: Request, response: Response) {
        await db.query('UPDATE families SET ? WHERE id=?',
            [request.body, request.params.id],
            (error) => {
                errorHandling(error,null);
            }
        );
    }

    public delete(request: Request, response: Response) {
        response.json({text: 'plant family deleted'} + request.params.id);
    }
}

export const familyController = new FamilyController();
