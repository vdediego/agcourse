import {Request, Response} from 'express';
import db from '../database';

class PlantController {

    public async list(request: Request, response: Response): Promise<any> {
        let plants = await db.query(
            'SELECT * FROM plants',
            (error, results) => {
                if (error) {
                    console.log(error);
                    response.status(500).json({status: 'error'});
                } else {
                    response.status(200).json(results);
                }
            }
        );

        return response.json(plants);
    };

    public async show(request: Request, response: Response): Promise<any> {
        let plant = await db.query(
            'SELECT * FROM plants WHERE id=?',
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

        return response.json(plant);
    };

    public async create(request: Request, response: Response): Promise<void> {
        await db.query('INSERT INTO plants SET ?',
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
        await db.query('UPDATE plants SET ? WHERE id=?',
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

    public delete(request: Request, response: Response) {
        db.query('DELETE FROM plants WHERE id=?',
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

export const plantController = new PlantController();
