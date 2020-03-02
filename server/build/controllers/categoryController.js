"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class CategoryController {
    async list(request, response) {
        let categories = await database_1.default.query('SELECT * FROM categories', (error, results) => {
            if (error) {
                console.log(error);
                response.status(500).json({ status: 'error' });
            }
            else {
                response.status(200).json(results);
            }
        });
        return response.json(categories);
    }
    ;
    async show(request, response) {
        let category = await database_1.default.query('SELECT * FROM categories WHERE id=?', [request.params.id], (error, results) => {
            if (error) {
                console.log(error);
                response.status(500).json({ status: 'error' });
            }
            else {
                response.status(200).json(results);
            }
        });
        return response.json(category);
    }
    ;
    async create(request, response) {
        await database_1.default.query('INSERT INTO categories SET ?', [request.body], (error) => {
            if (error) {
                console.log(error);
                response.status(500).json({ status: 'error' });
            }
            else {
                response.status(200).json({ status: 'ok' });
            }
        });
    }
    async update(request, response) {
        await database_1.default.query('UPDATE categories SET ? WHERE id=?', [request.body, request.params.id], (error) => {
            if (error) {
                console.log(error);
                response.status(500).json({ status: 'error' });
            }
            else {
                response.status(200).json({ status: 'ok' });
            }
        });
    }
    async delete(request, response) {
        await database_1.default.query('DELETE FROM categories WHERE id=?', [request.params.id], (error) => {
            if (error) {
                console.log(error);
                response.status(500).json({ status: 'error' });
            }
            else {
                response.status(200).json({ status: 'ok' });
            }
        });
    }
}
exports.categoryController = new CategoryController();
