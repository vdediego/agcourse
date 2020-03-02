"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const plantController_1 = require("../controllers/plantController");
class PlantRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', plantController_1.plantController.list);
        this.router.get('/min', plantController_1.plantController.listMin);
        this.router.get('/:id', plantController_1.plantController.show);
        this.router.post('/', plantController_1.plantController.create);
        this.router.put('/:id', plantController_1.plantController.update);
        this.router.delete('/:id', plantController_1.plantController.delete);
    }
}
const plantRoutes = new PlantRoutes();
exports.default = plantRoutes.router;
