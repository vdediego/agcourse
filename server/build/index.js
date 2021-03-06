"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const plantRoutes_1 = __importDefault(require("./routes/plantRoutes"));
const familyRoutes_1 = __importDefault(require("./routes/familyRoutes"));
const categoryRoutes_1 = __importDefault(require("./routes/categoryRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        // -- Server config --
        // Set port 3000 if not other
        this.app.set('port', process.env.POST || 3000);
        // Config Morgan
        this.app.use(morgan_1.default('dev'));
        // Config CORS
        this.app.use(cors_1.default());
        // Config express to understand JSON and sending from a form in HTTP
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
    }
    routes() {
        // Server routing
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/plants', plantRoutes_1.default);
        this.app.use('/families', familyRoutes_1.default);
        this.app.use('/categories', categoryRoutes_1.default);
    }
    start() {
        // Server start listening
        this.app.listen(this.app.get('port'), () => {
            console.log('Server started on port ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
