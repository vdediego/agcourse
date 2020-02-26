import express, {Application} from 'express';

class Server {
    public app: Application;

    constructor() {
        this.app = express();
    }

    config():void {
        // Server config
    }

    routes(): void {
        // Server routing
    }

    start(): void {
        // Server start listening
    }
}

new Server();
