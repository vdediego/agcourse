import {MysqlError} from 'mysql';
import {response} from 'express';

export function errorHandling(error: MysqlError | null, results: any | undefined) {
    if (error) {
        console.log(error);
        response.status(500).json({status: 'error'});
    } else {
        if (results === undefined) {
            response.status(200).json({status: 'ok'});
        } else {
            response.status(200).json(results);
        }
    }
}
