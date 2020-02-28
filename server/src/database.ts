import mysql from 'mysql';
import keys from './keys';

let dbConnection = mysql.createConnection(keys.database);

dbConnection.connect();

export default dbConnection;
