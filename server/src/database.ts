import mysql from 'mysql';
import keys from './keys';

let dbConnection = mysql.createPool(keys.database);
dbConnection.getConnection(function(err, connection) {
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
export default dbConnection;
