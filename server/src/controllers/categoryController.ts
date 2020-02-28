import {Request, Response} from 'express';
import db from '../database';

class CategoryController {

    public async list(request: Request, response: Response): Promise<any> {
        let categories = await db.query(
            'SELECT * FROM categories',
            (error, results) => {
                if (error) {
                    console.log(error);
                    response.status(500).json({status: 'error'});
                } else {
                    response.status(200).json(results);
                }
            }
        );

        return response.json(categories);
    };

    public async show(request: Request, response: Response): Promise<any> {
        let category = await db.query(
            'SELECT * FROM categories WHERE id=?',
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

        return response.json(category);
    };

    public async create(request: Request, response: Response): Promise<void> {
        await db.query('INSERT INTO categories SET ?',
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
        await db.query('UPDATE categories SET ? WHERE id=?',
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
        await db.query('DELETE FROM categories WHERE id=?',
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

export const categoryController = new CategoryController();
