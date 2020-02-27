import mysql, {PoolConnection} from 'mysql';
import keys from './keys';

let pool = mysql.createPool(keys.database);

pool.getConnection(function(err, connection) {
    if (err){
        console.log('DB error ' + err.message);
        return err;
    }
    pool.releaseConnection(connection);
    console.log('DB is connected');
});
export default pool;
