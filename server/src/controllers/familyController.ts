import {Request, response, Response} from 'express';
import db from '../database';

class FamilyController {

    public async list(request: Request, response: Response): Promise<any> {
        let families = await db.query(
            'SELECT * FROM families',
            (error, results) => {
                if (error) {
                    console.log(error);
                    response.status(500).json({status: 'error'});
                } else {
                    response.status(200).json(results);
                }
            }
        );

        return response.json(families);
    };

    public async show(request: Request, response: Response): Promise<any> {
        let family = await db.query(
            'SELECT * FROM families WHERE id=?',
            [request.params.id],
            (error, results) => {
                if (error) {
                    console.log(error);
                    response.status(500).json({status: 'error'});
                } else {
                    response.status(200).json(results);
                }
            }
        );

        return response.json(family);
    };

    public async create(request: Request, response: Response): Promise<void> {
        await db.query('INSERT INTO families SET ?',
            [request.body],
            (error) => {
                if (error) {
                    console.log(error);
                    response.status(500).json({status: 'error'});
                } else {
                    response.status(200).json({status: 'ok'});
                }
            }
        );
    }

    public async update(request: Request, response: Response): Promise<void> {
        await db.query('UPDATE families SET ? WHERE id=?',
            [request.body, request.params.id],
            (error) => {
                if (error) {
                    console.log(error);
                    response.status(500).json({status: 'error'});
                } else {
                    response.status(200).json({status: 'ok'});
                }
            }
        );
    }

    public async delete(request: Request, response: Response): Promise<void> {
        await db.query('DELETE FROM families WHERE id=?',
            [request.params.id],
            (error) => {
                if (error) {
                    console.log(error);
                    response.status(500).json({status: 'error'});
                } else {
                    response.status(200).json({status: 'ok'});
                }
            }
        );
    }
}

export const familyController = new FamilyController();
