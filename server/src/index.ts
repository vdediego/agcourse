import express, {Application} from 'express';
import indexRoutes from './routes/indexRoutes';
import morgan from 'morgan';
import cors from 'cors';

class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    private config():void {
        // -- Server config --
        // Set port 3000 if not other
        this.app.set('port', process.env.POST || 3000);
        // Config Morgan
        this.app.use(morgan('dev'));
        // Config CORS
        this.app.use(cors());
        // Config express to understand JSON and sending from a form in HTTP
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    private routes(): void {
        // Server routing
        this.app.use('/', indexRoutes);
    }

    public start(): void {
        // Server start listening
        this.app.listen(this.app.get('port'), () => {
            console.log('Server started on port ', this.app.get('port'))
        })
    }
}

const server = new Server();
server.start();
