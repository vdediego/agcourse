"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
function errorHandling(error, results) {
    if (error) {
        console.log(error);
        express_1.response.status(500).json({ status: 'error' });
    }
    else {
        if (results === undefined) {
            express_1.response.status(200).json({ status: 'ok' });
        }
        else {
            express_1.response.status(200).json(results);
        }
    }
}
exports.errorHandling = errorHandling;
