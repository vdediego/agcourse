"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class FamilyController {
    async list(request, response) {
        let families = await database_1.default.query('SELECT * FROM families', (error, results) => {
            if (error) {
                console.log(error);
                response.status(500).json({ status: 'error' });
            }
            else {
                response.status(200).json(results);
            }
        });
        return response.json(families);
    }
    ;
    async listNames(request, response) {
        let families = await database_1.default.query('SELECT f.id AS family_id, f.name AS name FROM families f', (error, results) => {
            if (error) {
                console.log(error);
                response.status(500).json({ status: 'error' });
            }
            else {
                response.status(200).json(results);
            }
        });
        return response.json(families);
    }
    ;
    async show(request, response) {
        let family = await database_1.default.query('SELECT * FROM families WHERE id=?', [request.params.id], (error, results) => {
            if (error) {
                console.log(error);
                response.status(500).json({ status: 'error' });
            }
            else {
                response.status(200).json(results);
            }
        });
        return response.json(family);
    }
    ;
    async create(request, response) {
        await database_1.default.query('INSERT INTO families SET ?', [request.body], (error) => {
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
        await database_1.default.query('UPDATE families SET ? WHERE id=?', [request.body, request.params.id], (error) => {
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
        await database_1.default.query('DELETE FROM families WHERE id=?', [request.params.id], (error) => {
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
exports.familyController = new FamilyController();
