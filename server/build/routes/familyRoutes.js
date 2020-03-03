"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const familyController_1 = require("../controllers/familyController");
class FamilyRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', familyController_1.familyController.list);
        this.router.get('/names', familyController_1.familyController.listNames);
        this.router.get('/:id', familyController_1.familyController.show);
        this.router.post('/', familyController_1.familyController.create);
        this.router.put('/:id', familyController_1.familyController.update);
        this.router.delete('/:id', familyController_1.familyController.delete);
    }
}
const familyRoutes = new FamilyRoutes();
exports.default = familyRoutes.router;
