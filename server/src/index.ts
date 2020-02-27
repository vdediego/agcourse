import express, {Application} from 'express';

class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    private config():void {
        // Server config
        this.app.set('port', process.env.POST || 3000);
    }

    private routes(): void {
        // Server routing
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
