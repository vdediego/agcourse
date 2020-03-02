"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const keys_1 = __importDefault(require("./keys"));
let dbConnection = mysql_1.default.createPool(keys_1.default.database);
dbConnection.getConnection(function (err, connection) {
    if (err) {
        switch (err.code) {
            case 'PROTOCOL_CONNECTION_LOST':
                console.error('DATABASE CONNECTION WAS CLOSED');
                break;
            case 'ER_CON_COUNT_ERROR':
                console.error('DATABASE HAS TOO MANY CONNECTIONS');
                break;
            case 'ECONNREFUSED':
                console.error('DATABASE CONNECTION WAS REFUSED');
                break;
        }
        console.error('error connecting: ' + err.stack);
    }
    if (connection) {
        connection.release();
    }
    console.log('DB is connected as id ' + connection.threadId);
});
const util = require('util');
dbConnection.query = util.promisify(dbConnection.query);
exports.default = dbConnection;
