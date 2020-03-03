"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ImageController {
    async create(request, response) {
        await database_1.default.query('INSERT INTO images SET ?', [request.body], (error) => {
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
        await database_1.default.query('UPDATE images SET ? WHERE id=?', [request.body, request.params.id], (error) => {
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
        await database_1.default.query('DELETE FROM images WHERE id=?', [request.params.id], (error) => {
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
exports.imageController = new ImageController();
