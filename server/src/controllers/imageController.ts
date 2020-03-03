import {Request, Response} from 'express';
import db from '../database';

class ImageController {

    public async create(request: Request, response: Response): Promise<void> {
        await db.query('INSERT INTO images SET ?',
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
        await db.query('UPDATE images SET ? WHERE id=?',
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
        await db.query('DELETE FROM images WHERE id=?',
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

export const imageController = new ImageController();
