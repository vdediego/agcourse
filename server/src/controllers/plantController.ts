import {Request, Response} from 'express';
import db from '../database';

class PlantController {

    public async list(request: Request, response: Response): Promise<any> {

        let query = "SELECT p.name AS name, p.description AS description, f.name AS family, c.name AS category, i.filename AS image_filename, i.caption AS image_caption FROM plants p JOIN families f ON p.family_id = f.id JOIN categories c ON p.category_id = c.id JOIN images i ON p.image_id = i.id";

        let plants = await db.query(
            query,
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

    public async listMin(request: Request, response: Response): Promise<any> {

        let query = "SELECT p.name AS name, i.filename AS image_filename FROM plants p JOIN images i ON p.image_id = i.id";

        let plants = await db.query(
            query,
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
        let query = "SELECT p.name AS name, p.description AS description, f.name AS family, c.name AS category, i.filename AS image_filename, i.caption AS image_caption FROM plants p JOIN families f ON p.family_id = f.id JOIN categories c ON p.category_id = c.id JOIN images i ON p.image_id = i.id WHERE p.id = ?";

        let plant = await db.query(
            query,
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
