"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: 'we are in INDEX' });
    }
    ;
}
exports.indexController = new IndexController();
