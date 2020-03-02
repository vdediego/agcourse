"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class PlantController {
    async list(request, response) {
        let query = "SELECT p.name AS name, p.description AS description, f.name AS family, c.name AS category, i.filename AS image_filename, i.caption AS image_caption FROM plants p JOIN families f ON p.family_id = f.id JOIN categories c ON p.category_id = c.id JOIN images i ON p.image_id = i.id";
        let plants = await database_1.default.query(query, (error, results) => {
            if (error) {
                console.log(error);
                response.status(500).json({ status: 'error' });
            }
            else {
                response.status(200).json(results);
            }
        });
        return response.json(plants);
    }
    ;
    async show(request, response) {
        let query = "SELECT p.name AS name, p.description AS description, f.name AS family, c.name AS category, i.filename AS image_filename, i.caption AS image_caption FROM plants p JOIN families f ON p.family_id = f.id JOIN categories c ON p.category_id = c.id JOIN images i ON p.image_id = i.id WHERE p.id = ?";
        let plant = await database_1.default.query(query, [request.params.id], (error, results) => {
            if (error) {
                console.log(error);
                response.status(500).json({ status: 'error' });
            }
            else {
                response.status(200).json(results);
            }
        });
        return response.json(plant);
    }
    ;
    async create(request, response) {
        await database_1.default.query('INSERT INTO plants SET ?', [request.body], (error) => {
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
        await database_1.default.query('UPDATE plants SET ? WHERE id=?', [request.body, request.params.id], (error) => {
            if (error) {
                console.log(error);
                response.status(500).json({ status: 'error' });
            }
            else {
                response.status(200).json({ status: 'ok' });
            }
        });
    }
    delete(request, response) {
        database_1.default.query('DELETE FROM plants WHERE id=?', [request.params.id], (error) => {
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
exports.plantController = new PlantController();
